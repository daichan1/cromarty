import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Button } from 'sancho'
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
        <div className="wrapper center">
          <Title body="ハイ&ロー" />
          <div className="button center">
            <Button>
              <Link href="/rule">
                <a className="link">ルール説明</a>
              </Link>
            </Button>
          </div>
          <div className="button">
            <Button intent="primary">
              <Link href="/game">
                <a className="link">スタート!!</a>
              </Link>
            </Button>
          </div>
        </div>

        <style jsx>{`
          .wrapper {
            text-align: center;
          }
          .link {
            color: black;
            text-decoration: none;
          }
          .button {
            margin: 20px;
          }
          .center {
            margin-top: 200px;
          }
        `}</style>
      </div>
    )
  }
}

export default Top
