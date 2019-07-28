import React from 'react'
import Link from 'next/link'

class Rule extends React.Component {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div className="wrapper">
        <Link href="/">
          <a>トップへ戻る</a>
        </Link>
        <h1 className="title">ルール説明</h1>

        <h2>遊び方</h2>
        <ul>
          <li>選択する前にベットするコインを決める</li>
          <li>表示されているトランプの数より上か下かイコールかを当てる</li>
          <li>最終的にコインをどれだけ持っているかを競う</li>
          <li>参加人数は1人</li>
          <li>初期所持コインは「1000」</li>
        </ul>

        <h2>敗北条件</h2>
        <ul>
          <li>途中でコインが0枚になった場合は終了</li>
        </ul>

        <h2>コイン獲得レート</h2>
        <ul>
          <li>上か下かで当てた場合は、ベットしたコイン*2を獲得</li>
          <li>イコールで当てた場合は、ベットしたコイン*4を獲得</li>
        </ul>

        <h2>トランプの強さ</h2>
        <ul>
          <li>「A」が一番弱く「ジョーカー」が一番強い</li>
        </ul>

        <style>{`
          .wrapper {
            text-align: center;
          }
          ul {
            list-style-type: none;
          }
        `}</style>
      </div>
    )
  }
}

export default Rule
