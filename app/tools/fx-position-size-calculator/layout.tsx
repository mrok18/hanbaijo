import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FX取引数量計算機｜許容損失と損切り幅から逆算',
  description: '口座資金、許容リスク率、損切り幅、1通貨あたりの1pips損益から、FXの取引数量と想定損失を逆算します。',
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
