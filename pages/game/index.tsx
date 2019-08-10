import React from 'react'
import Title from '../../components/common/title'

interface Props {
  coins: number[]
}

interface State {
  coin: number
}

// 所持コイン数を100単位で表示(selectタグで)
const BetCoin = (props: Props): JSX.Element => {
  const options = props.coins.map(
    (coin): JSX.Element => (
      <option key={coin.toString()} value={coin}>
        {coin}
      </option>
    )
  )
  return <select>{options}</select>
}

// ゲーム画面
class Game extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    // 初期所持コインは1000
    this.state = { coin: 1000 }
  }

  render(): JSX.Element {
    const coinInterval = 100
    let coins = []
    for (let i = coinInterval; i <= this.state.coin; i += coinInterval) {
      coins.push(i)
    }
    return (
      <div className="wrapper">
        <Title body="ゲーム画面" />
        <img
          src="/static/spade_1.png"
          alt="スペードのエース"
          width="200px"
          height="400px"
        />
        <p>BETするコインを選択してください</p>
        <BetCoin coins={coins} />
        {/* ハイかローかイコールかを選択 */}
        <div className="answer-buttons mg-20">
          <button>ハイ</button>
          <button>ロー</button>
          <button>イコール</button>
        </div>

        <style jsx>{`
          .wrapper {
            text-align: center;
          }
          .link {
            display: block;
          }
          .mg-20 {
            margin: 20px;
          }
        `}</style>
      </div>
    )
  }
}

export default Game
