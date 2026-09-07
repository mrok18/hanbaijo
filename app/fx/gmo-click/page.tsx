import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { title: 'GMOクリック証券 FXネオの取引コスト', description: 'GMOクリック証券FXネオの最小取引単位、通常手数料、自動ロスカット手数料、必要証拠金を公式情報から整理します。' };
export default function Page() { return <FxProviderFactSheet provider={FX_PROVIDERS['gmo-click']} />; }
