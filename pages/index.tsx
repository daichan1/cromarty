import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Top = () => (
  <div>
    <Head>
      <title>ハイ&ロー</title>
    </Head>
    <div className="wrapper">
      <h1 className="title">ハイ&ロー</h1>
      <Link href='/rule'>
        <a className="link mg-20">ルール説明</a>
      </Link>
      <form>
        <label className="mg-20">
          参加人数：
          <select>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <div className="mg-20">
          <input type="submit" value="スタート!!"/>
        </div>
      </form>
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

export default Top
