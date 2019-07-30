import React from 'react'
import Title from '../../components/common/title'

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div className="wrapper">
        <Title body="ゲーム画面" />
        {/* トランプを表示 */}
        <img
          src="/static/spade_1.png"
          alt="スペードのエース"
          width="200px"
          height="400px"
        />
        {/* BETするコインを選択 */}
        <p>BETするコインを選択してください</p>
        <select>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
        </select>
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
