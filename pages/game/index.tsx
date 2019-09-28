import React from 'react'
import Link from 'next/link'
import { Button, Text } from 'sancho'
import Title from '../../components/common/title'

interface Props {
  coins: number[]
}

interface State {
  coin: number
  playingCards: string[]
  playingCardNumbers: number[]
  currentCard: string
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

// ※秒待機関数
async function wait(sec: number): Promise<void> {
  await new Promise((resolve): void => {
    setTimeout((): void => {
      resolve()
    }, sec * 1000)
  })
}

// ゲーム画面
class Game extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    // coin：初期所持コインは1000
    // playingCards：トランプ画像格納用配列
    // playingCardNumbers：トランプの数値格納用配列
    // nextCard：次のトランプ
    // gameCount：何ゲーム目か
    this.state = {
      coin: 1000,
      playingCards: [],
      playingCardNumbers: [],
      currentCard: 'static/back.png',
      nextCard: 'static/back.png',
      gameCount: 0
    }
  }
  // render後に実行される処理
  componentDidMount(): void {
    const playingCards = this.allPlayingCards()
    const playingCardNumbers = this.allPlayingCardNumbers(playingCards)
    this.shuffle(playingCards, playingCardNumbers)
    this.setState({ currentCard: playingCards[0] })
  }
  // トランプ画像を取得
  allPlayingCards(): string[] {
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
  // トランプの数値を取得
  allPlayingCardNumbers(playingCards: string[]): number[] {
    const numbers = []
    const maxNunber = 14
    // トランプの数値を格納
    playingCards.forEach((playingCard): void => {
      const replace = Number(playingCard.match(/[0-9]{1,2}/g))
      const number = replace == 0 ? maxNunber : replace
      numbers.push(number)
    })
    return numbers
  }
  // トランプをシャッフル
  shuffle(playingCards: string[], playingCardNumbers: number[]): void {
    // 画像と数値をシャッフル
    for (let i = playingCards.length - 1; i >= 0; i--) {
      let rand: number = Math.floor(Math.random() * (i + 1))
      let tempPlayingCard: string = playingCards[i]
      playingCards[i] = playingCards[rand]
      playingCards[rand] = tempPlayingCard
      let tempPlayingCardNumber: number = playingCardNumbers[i]
      playingCardNumbers[i] = playingCardNumbers[rand]
      playingCardNumbers[rand] = tempPlayingCardNumber
    }
    this.setState({
      playingCards: playingCards,
      playingCardNumbers: playingCardNumbers
    })
  }
  // 回答
  answer(num: number): void {
    const isJudge = this.answerCheck(num)
    console.log(isJudge)
    this.setState({
      nextCard: this.state.playingCards[this.state.gameCount + 1]
    })
    // 次のゲームの準備
    this.nextGame()
  }
  // 回答チェック
  answerCheck(num: number): boolean {
    // トランプの数字が大きい場合
    if (
      this.state.playingCardNumbers[this.state.gameCount] <
        this.state.playingCardNumbers[this.state.gameCount + 1] &&
      num == 0
    ) {
      return true
      // トランプの数字が同じの場合
    } else if (
      this.state.playingCardNumbers[this.state.gameCount] ==
        this.state.playingCardNumbers[this.state.gameCount + 1] &&
      num == 1
    ) {
      return true
      // トランプの数字が小さい場合
    } else if (
      this.state.playingCardNumbers[this.state.gameCount] >
        this.state.playingCardNumbers[this.state.gameCount + 1] &&
      num == 2
    ) {
      return true
      // 不正解の場合
    } else {
      return false
    }
  }
  // 次のゲームへの準備
  nextGame(): void {
    if (this.state.gameCount <= this.state.playingCards.length) {
      wait(2).then((): void => {
        this.setState({
          currentCard: this.state.playingCards[this.state.gameCount + 1],
          nextCard: 'static/back.png',
          gameCount: this.state.gameCount + 1
        })
      })
    } else {
      // 最終ゲームまで行ったらゲーム終了
      console.log('最終ゲームまで行ったのでゲーム終了')
    }
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
            <Text variant="display3">{`所持コイン数：${this.state.coin}`}</Text>
            <img
              src={this.state.currentCard}
              alt="トランプ表"
              width="200px"
              height="400px"
            />
            <ul className="select-btn">
              <li className="btn high">
                <Button size="lg" onClick={(): void => this.answer(0)}>
                  ⬆︎
                </Button>
              </li>
              <li className="btn equal">
                <Button size="lg" onClick={(): void => this.answer(1)}>
                  ＝
                </Button>
              </li>
              <li className="btn low">
                <Button size="lg" onClick={(): void => this.answer(2)}>
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
