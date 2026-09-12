import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const appDir = path.resolve('.next/server/app');

if (!existsSync(appDir)) {
  console.error('Missing .next output. Run `npm run build` before `npm run audit:seo`.');
  process.exit(1);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function countMatches(value, pattern) {
  return [...value.matchAll(pattern)].length;
}

const htmlFiles = walk(appDir).filter((file) => file.endsWith('.html'));
const issues = [];

for (const file of htmlFiles) {
  if (path.basename(file) === '_not-found.html') continue;

  const html = readFileSync(file, 'utf8');
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const linkTags = html.match(/<link\b[^>]*>/gi) ?? [];
  const counts = {
    title: countMatches(html, /<title(?:\s[^>]*)?>[\s\S]*?<\/title>/gi),
    description: metaTags.filter((tag) => /\bname=["']description["']/i.test(tag)).length,
    canonical: linkTags.filter((tag) => /\brel=["'][^"']*canonical[^"']*["']/i.test(tag)).length,
    h1: countMatches(html, /<h1(?:\s[^>]*)?>/gi),
  };

  const invalid = Object.entries(counts).filter(([, count]) => count !== 1);
  if (invalid.length > 0) {
    issues.push(`${path.relative(appDir, file)}: ${invalid.map(([name, count]) => `${name}=${count}`).join(', ')}`);
  }
}

const articleFiles = htmlFiles.filter((file) => {
  const relative = path.relative(appDir, file);
  return relative.startsWith(`articles${path.sep}`);
});

for (const file of articleFiles) {
  const html = readFileSync(file, 'utf8');
  const articleCount = countMatches(html, /["']@type["']\s*:\s*["']Article["']/gi);
  const breadcrumbCount = countMatches(html, /["']@type["']\s*:\s*["']BreadcrumbList["']/gi);

  if (articleCount !== 1 || breadcrumbCount !== 1) {
    issues.push(
      `${path.relative(appDir, file)}: Article=${articleCount}, BreadcrumbList=${breadcrumbCount}`,
    );
  }
}

if (issues.length > 0) {
  console.error(`SEO audit failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(
  `SEO audit passed: ${htmlFiles.length - 1} static pages and ${articleFiles.length} article schema pairs checked.`,
);
