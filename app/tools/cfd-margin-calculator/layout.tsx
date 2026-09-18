import type { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/tools/cfd-margin-calculator' }, title: 'CFD Trading Calculator｜商品CFDの必要証拠金・損益を計算', description: 'CFD Trading Calculatorとして、DMM CFDの商品14銘柄を価格・Lot数・米ドル円から計算。取引総額、必要証拠金、1ドル変動時の損益を日本円で試算します。' };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
