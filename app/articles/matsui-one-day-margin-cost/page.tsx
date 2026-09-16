import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
export const metadata={ alternates: { canonical: '/articles/matsui-one-day-margin-cost' },title:'松井証券 信用取引 手数料 無料｜一日信用0円と持越し費用',description:'松井証券の信用取引手数料が無料になる一日信用の条件を、売買0円・金利0％・貸株料0％に分けて整理。翌日持越しやプレミアム空売り、任意決済の費用も確認できます。'};
const FAQS=[
{question:'松井証券の信用取引手数料は無料ですか？',answer:'一日信用をインターネット経由で当日中に返済する場合、新規・返済の売買手数料は無料です。無料の対象時間、商品、注文方法が限られるため、制度信用・無期限信用や電話取引は別条件として確認してください。'},
{question:'松井証券のデイトレード手数料はいくらですか？',answer:'一日信用をインターネット経由で当日中に返済する場合、新規・返済の売買手数料は無料です。現引・現渡も条件内なら無料ですが、電話取引や対象外商品は別条件です。'},
{question:'一日信用を持ち越した場合の費用は？',answer:'新規建日の大引けまでに返済できず翌営業日に任意決済となる場合、1注文あたり3,250円（税込3,575円）がかかります。返済時刻と注文状況を当日中に確認します。'},
{question:'デイトレなら空売りも無料ですか？',answer:'売買手数料が無料でも、プレミアム空売り料は銘柄ごとに発生する場合があります。在庫と日々の料率を注文前に確認してください。'},
] as const;
export default function Page(){const faqJsonLd={'@context':'https://schema.org','@type':'FAQPage',mainEntity:FAQS.map((faq)=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}}))};return <article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqJsonLd).replace(/</g,'\\u003c')}}/><p className="page-kicker">MATSUI / DAY MARGIN</p><h1>松井証券 信用取引 手数料 無料<br/>一日信用0円と持越し費用</h1><p className="lede">松井証券の信用取引手数料が無料になる条件を、一日信用・制度信用・無期限信用で分けて確認します。一日信用はインターネット経由の日計りなら新規・返済と現引・現渡が無料ですが、翌営業日まで残った建玉や対象外の操作には別の費用が生じます。</p>
<div className="callout"><strong>結論：一日信用は当日中なら売買0円・金利/貸株料0％</strong><p>新規建日の大引けまでに反対売買、または15:45までに現引・現渡を行う条件です。決済できず翌営業日に松井証券が任意決済すると、1注文あたり3,250円（税込3,575円）がかかります。</p></div>
<p className="panel-note">公式条件の確認日：2026年9月16日。金利・貸株料・プレミアム空売り料や対象銘柄は変更される場合があります。</p>
<h2>コストを4つに分ける</h2><div className="fx-metric-grid"><article><b>TRADE</b><h3>売買手数料</h3><p>ネット経由の新規・返済は無料。電話取引は別条件です。</p></article><article><b>RATE</b><h3>金利・貸株料</h3><p>公式料金表では年利0.0％。別途諸経費があります。</p></article><article><b>PREMIUM</b><h3>空売り料</h3><p>プレミアム空売りは銘柄別料金がかかり、日々変動します。</p></article><article><b>DEADLINE</b><h3>任意決済</h3><p>期日超過の任意決済は1注文3,250円、税込3,575円です。</p></article></div>
<div className="callout"><strong>「一日」は当日中の管理が前提</strong><p>新規建日の大引けまでの反対売買、または15時45分までの現引・現渡が案内されています。翌営業日には会社の任意で決済されます。</p></div>
<h2>取引前の確認</h2><ul><li>売建対象銘柄と在庫があるか</li><li>プレミアム空売り料が0円か有料か</li><li>返済注文が約定しない場合の対応時刻</li><li>一日信用・制度信用等を合算した保証金維持率</li></ul>
	<h2>松井証券のデイトレ手数料FAQ</h2>{FAQS.map((faq)=><section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
	<section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.matsui.co.jp/stock/margin/d-margin/rate.html" target="_blank" rel="noopener noreferrer">松井証券「手数料・弁済期限・金利・貸株料」</a></li><li><a href="https://www.matsui.co.jp/stock/margin/d-margin/rule/" target="_blank" rel="noopener noreferrer">松井証券「一日信用取引 取引ルール」</a></li></ul><p>取引条件は2026年9月7日に確認しました。</p></section><p><Link href="/tools/matsui-box-rate-calculator">通常取引のボックスレートを計算する →</Link></p><p><Link href="/stocks/matsui">松井証券の国内株コストシートへ →</Link></p><section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section></article>}
