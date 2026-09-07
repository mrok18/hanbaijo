import { notFound } from 'next/navigation';
import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

const provider = FX_PROVIDERS['minna-fx'];

export const metadata = {
  title: `${provider.name}の取引コスト・最低取引単位`,
  description: provider.summary,
};

export default function Page() {
  if (!provider) notFound();
  return <FxProviderFactSheet provider={provider} />;
}
