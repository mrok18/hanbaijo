import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { title: 'LIGHT FXの取引コスト・スプレッド条件', description: 'LIGHT FXの最小取引単位、取引手数料、LIGHTペアの時間帯別スプレッド、ロスカット条件を公式情報から整理します。' };
export default function Page() { return <FxProviderFactSheet provider={FX_PROVIDERS.lightfx} />; }
