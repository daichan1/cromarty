import React from 'react'
import Title from '../../components/common/title'

interface Props {
  coins: number[]
}

interface State {
  coin: number
  playingCards: string[]
  gameCount: number
}

// 所持コイン数を100単位で表示(selectタグで)
const DisplayBetCoin = (props: Props): JSX.Element => {
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
    // coin：初期所持コインは1000
    // images：トランプ画像格納用配列
    // gameCount：何ゲーム目か
    this.state = {
      coin: 1000,
      playingCards: [],
      gameCount: 0
    }
  }

  // render後に実行される処理
  componentDidMount(): void {
    this.shuffle(this.getPlayingCards())
  }

  // トランプ画像を取得
  getPlayingCards(): string[] {
    const playingCards = []
    // トランプ画像のURLを格納
    for (let i = 1; i <= 13; i++) {
      playingCards.push(`static/club_${i}.png`)
      playingCards.push(`static/diamond_${i}.png`)
      playingCards.push(`static/heart_${i}.png`)
      playingCards.push(`static/spade_${i}.png`)
    }
    playingCards.push(`static/joker.png`)
    return playingCards
  }

  // トランプ画像をシャッフル
  shuffle(playingCards: string[]): void {
    // シャッフル
    for (let i = playingCards.length - 1; i >= 0; i--) {
      let rand: number = Math.floor(Math.random() * (i + 1))
      let temp: string = playingCards[i]
      playingCards[i] = playingCards[rand]
      playingCards[rand] = temp
    }
    this.setState({ playingCards: playingCards })
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
          src={this.state.playingCards[this.state.gameCount]}
          alt="トランプ画像"
          width="200px"
          height="400px"
        />
        <p>BETするコインを選択してください</p>
        <DisplayBetCoin coins={coins} />
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
