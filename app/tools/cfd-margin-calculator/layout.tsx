import type { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/tools/cfd-margin-calculator' }, title: 'CFD必要証拠金計算｜CFD Trading Calculator・14銘柄', description: 'CFDの必要証拠金を計算。CFD Trading Calculatorで14銘柄の価格・Lot数・米ドル円を入力し、計算式・取引総額・1ドル変動損益を確認します。' };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
