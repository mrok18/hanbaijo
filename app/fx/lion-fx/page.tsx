import FxProviderFactSheet from '@/components/FxProviderFactSheet';
import { FX_PROVIDERS } from '@/lib/fx-providers';

export const metadata = { alternates: { canonical: '/fx/lion-fx' }, title: 'ヒロセ通商 LION FXの取引コスト', description: 'ヒロセ通商LION FXの通貨ペア数、最小取引単位、手数料、ロスカットと不足金の条件を公式情報から整理します。' };
export default function Page() { return <FxProviderFactSheet provider={FX_PROVIDERS['lion-fx']} relatedArticles={[
  { href: '/articles/lion-fx-trading-hours-lot', title: '取引時間と1,000通貨', description: '夏時間・冬時間、日次メンテナンス、1Lotの通貨数を整理します。' },
  { href: '/articles/lion-fx-deposit-withdrawal', title: '入金・出金と名義ルール', description: 'クイック入金1万円、銀行振込、反映遅延の切り分けを確認します。' },
  { href: '/articles/lion-fx-losscut-margin', title: 'ロスカットと不足金', description: '有効比率100％未満の基準と、急変時の不足金リスクを確認します。' },
  { href: '/articles/fx-company-selection-cost-checklist', title: 'FX会社の比較7項目', description: 'スプレッド以外の約定、スワップ、最低単位、入出金を比較します。' },
]} />; }
