import React from 'react'
import Link from 'next/link'
import { Button } from 'sancho'
import Title from '../../components/common/title'

interface Props {
  coins: number[]
}

interface State {
  coin: number
  playingCards: string[]
  nextCard: string
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
      nextCard: 'static/back.png',
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
  // トランプをひっくり返す
  answer = (): void => {
    this.setState({
      nextCard: this.state.playingCards[this.state.gameCount + 1]
    })
  }

  render(): JSX.Element {
    const coinInterval = 100
    let coins = []
    for (let i = coinInterval; i <= this.state.coin; i += coinInterval) {
      coins.push(i)
    }
    return (
      <div>
        <Link href="/">
          <a>トップへ戻る</a>
        </Link>
        <div className="wrapper">
          <Title body="ゲーム画面" />
          <div>
            <img
              src={this.state.playingCards[this.state.gameCount]}
              alt="トランプ表"
              width="200px"
              height="400px"
            />
            <ul className="select-btn">
              <li className="btn high">
                <Button size="lg" onClick={this.answer}>
                  ⬆︎
                </Button>
              </li>
              <li className="btn equal">
                <Button size="lg" onClick={this.answer}>
                  ＝
                </Button>
              </li>
              <li className="btn low">
                <Button size="lg" onClick={this.answer}>
                  ⬇︎
                </Button>
              </li>
            </ul>
            <img
              src={this.state.nextCard}
              alt="トランプ裏"
              width="200px"
              height="400px"
            />
          </div>
          <p>BETするコインを選択してください</p>
          <DisplayBetCoin coins={coins} />
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
          .select-btn {
            display: inline-block;
            list-style-type: none;
            margin: 0;
            padding: 20px;
          }
          .btn {
            margin-bottom: 20px;
          }
          .high {
            position: relative;
            top: -200px;
          }
          .equal {
            position: relative;
            top: -120px;
          }
          .low {
            position: relative;
            top: -40px;
          }
        `}</style>
      </div>
    )
  }
}

export default Game
