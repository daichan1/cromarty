import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

class Top extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Head>
          <title>ハイ&ロー</title>
        </Head>
        <div className="wrapper">
          <h1 className="title">ハイ&ロー</h1>
          <Link href="/rule">
            <a className="link mg-20">ルール説明</a>
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
