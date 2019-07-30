import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Title from '../components/common/title'

class Top extends React.Component {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div>
        <Head>
          <title>ハイ&ロー</title>
        </Head>
        <div className="wrapper">
          <Title body="ハイ&ロー" />
          <Link href="/rule">
            <a className="link mg-20">ルール説明</a>
          </Link>
          <Link href="/game">
            <a className="link mg-20">スタート!!</a>
          </Link>
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

export default Top
