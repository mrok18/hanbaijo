import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { title: 'MATSUI FXの取引コスト・最小取引単位', description: 'MATSUI FXの1通貨単位、取引手数料、レバレッジコース、スプレッドの確認方法を公式情報から整理します。' };
export default function Page() { return <FxProviderFactSheet provider={FX_PROVIDERS.matsui} affiliateOffer={AFFILIATE_OFFERS['matsui-fx']} />; }
