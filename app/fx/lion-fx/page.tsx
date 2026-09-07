import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { title: 'ヒロセ通商 LION FXの取引コスト', description: 'ヒロセ通商LION FXの通貨ペア数、最小取引単位、手数料、ロスカットと不足金の条件を公式情報から整理します。' };
export default function Page() { return <FxProviderFactSheet provider={FX_PROVIDERS['lion-fx']} />; }
