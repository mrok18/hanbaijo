import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/dmm-fx-margin-call-losscut' },
  title: 'DMM FXの追証とロスカットの違い｜100％と50％を整理',
  description: 'DMM FXの追加証拠金とロスカットについて、判定時刻、証拠金維持率100％・50％、解消期限、強制決済の違いを解説します。',
};

const EXAMPLES = [
  { assets: '12万円', ratio: '200％', state: '100％・50％のどちらも上回る' },
  { assets: '9万円', ratio: '150％', state: '100％・50％のどちらも上回る' },
  { assets: '5万9,000円', ratio: '約98.3％', state: '終値判定なら追加証拠金の対象' },
  { assets: '3万円', ratio: '50％', state: 'ロスカットの対象' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM FX / MARGIN CONTROL</p>
      <h1>DMM FXの追証とロスカットは別物<br />維持率100％と50％を整理</h1>
      <p className="lede">DMM FXには、毎営業日の終値で判定する「追加証拠金」と、取引時間中に証拠金維持率50％以下で動く「ロスカット」があります。100％を下回っても直ちにロスカットとは限らず、逆に追証の期限前でも50％へ達すればロスカットの対象です。</p>

      <div className="callout"><strong>2つの強制決済ルート</strong><p>追加証拠金を期限までに解消できない場合はマージンカット、証拠金維持率が50％以下になった場合はロスカットです。判定の時刻と条件が異なります。</p></div>

      <h2>追加証拠金とロスカットの違い</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>項目</th><th>追加証拠金</th><th>ロスカット</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">基準</td><td>証拠金維持率100％未満</td><td>証拠金維持率50％以下</td></tr>
            <tr><td className="ex-name">判定</td><td>毎営業日のマーケットクローズ後</td><td>取引時間中に監視</td></tr>
            <tr><td className="ex-name">対応</td><td>入金またはポジション決済等で不足額を0円へ</td><td>未約定注文を取り消し、全ポジションを強制決済</td></tr>
            <tr><td className="ex-name">未解消時</td><td>翌営業日04時59分まで。未解消なら05時00分にマージンカット</td><td>基準到達時に執行。指定レートは保証されない</td></tr>
          </tbody>
        </table>
      </div><p className="panel-note">通常時の公式ルール。休日や取引時間、システム状況によって取扱いが異なる場合があるため、発生時は取引画面の案内を優先してください。</p></div>

      <h2>証拠金維持率の計算式</h2>
      <div className="formula-box">
        <code>証拠金維持率 ＝（純資産額 − 注文証拠金）÷ ポジション必要証拠金 × 100</code>
        <small>未約定の新規注文に必要な注文証拠金も、余力の計算へ影響します。</small>
      </div>
      <p>純資産額は口座残高へ評価損益などを反映した金額です。相場が不利に動いて評価損が増えると、分子が小さくなり維持率が低下します。新規の未約定注文があれば注文証拠金も差し引かれます。</p>

      <h2>必要証拠金6万円のポジションで見る</h2>
      <p>注文証拠金が0円、ポジション必要証拠金が6万円で変わらないと仮定した簡易例です。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th className="num">純資産額</th><th className="num">維持率</th><th>状態</th></tr></thead>
          <tbody>{EXAMPLES.map((example) => (
            <tr key={example.assets}><td className="num ex-name">{example.assets}</td><td className="num"><strong>{example.ratio}</strong></td><td>{example.state}</td></tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">説明用の固定条件による単純計算です。実際のポジション必要証拠金、純資産額、判定結果は取引画面で確認してください。</p></div>

      <h2>100％を下回った瞬間に追証とは限らない</h2>
      <p>追加証拠金は、毎営業日のマーケットクローズ後の判定で証拠金維持率が100％を下回った場合に発生します。日中に一時的に100％を下回ったというだけで同じ判定になるわけではありません。ただし、そのまま50％以下まで低下すれば、終値判定を待たずロスカットの対象になります。</p>

      <h2>追証が発生したら「不足額だけ」では余裕がない</h2>
      <p>公式ルール上は、期限までに追加証拠金額以上を入金するか、ポジション決済等によって追加証拠金額を0円にする必要があります。ただし入金後も相場が動けば純資産額は変化します。表示された不足額ぴったりの対応では、再び維持率が低下する可能性があります。</p>
      <ol>
        <li>取引画面で追加証拠金額と解消期限を確認する</li>
        <li>入金反映の時間と、金融機関側のメンテナンスを確認する</li>
        <li>決済する場合は、数量と残るポジションの維持率を確認する</li>
        <li>相場変動を含め、解消後にも余力が残る対応を検討する</li>
      </ol>

      <h2>ロスカットでも損失額は限定されない</h2>
      <p>証拠金維持率が50％以下になると、未約定注文が取り消され、原則として全ポジションが強制決済されます。しかし急変時、流動性低下時、注文集中時などは基準を大きく下回るレートで約定する可能性があります。預けた証拠金を上回る損失もあり得ます。</p>
      <div className="callout"><strong>事前にできること</strong><p>必要証拠金ぎりぎりで建てず、取引数量を抑え、許容損失に合わせた逆指値を検討します。逆指値も指定レートでの約定を保証するものではありません。</p></div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://fx.dmm.com/support/faqs/article/00126/" target="_blank" rel="noopener noreferrer">DMM FX「ロスカットと追加証拠金はどのような違いがありますか？」</a></li>
          <li><a href="https://fx.dmm.com/fx/service/margin/" target="_blank" rel="noopener noreferrer">DMM FX「証拠金シミュレーション」</a></li>
          <li><a href="https://fx.dmm.com/support/faqs/article/00128/" target="_blank" rel="noopener noreferrer">DMM FX「ロスカットとはなんですか？」</a></li>
          <li><a href="https://fx.dmm.com/policy/risk/" target="_blank" rel="noopener noreferrer">DMM FX「重要事項の説明」</a></li>
        </ul>
        <p>取引条件は2026年9月7日に確認しました。追加証拠金が発生した場合は、取引画面に表示される金額と期限を必ず確認してください。</p>
      </section>

      <p><Link href="/fx/dmm-fx">DMM FXのコストシートを見る →</Link></p>
      <p><Link href="/articles/dmm-fx-mini-normal-large">DMM FXのミニ・通常・ラージを比較する →</Link></p>
      <p><Link href="/fx/losscut-comparison">FX各社のロスカット基準を比較する →</Link></p>
    </article>
  );
}
