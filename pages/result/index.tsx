import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Text } from 'sancho'
import Title from '../../components/common/title'

const Result = withRouter(
  (props): JSX.Element => (
    <div>
      <Link href="/">
        <a>トップへ戻る</a>
      </Link>
      <div className="wrapper">
        <div className="container">
          <Title body="リザルト画面" />
          <Text variant="display3">{`所持コイン数：${props.router.query.coin}`}</Text>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          width: 690px;
          margin: 0 auto;
        }
        .container {
          text-align: center;
        }
      `}</style>
    </div>
  )
)

export default Result
