import React from 'react'
import Link from 'next/link'
import { Table, TableRow, TableCell, Text } from 'sancho'
import Title from '../../components/common/title'

class Rule extends React.Component {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div>
        <Link href="/">
          <a>トップへ戻る</a>
        </Link>

        <div className="wrapper">
          <div className="mb-100">
            <Title body="ルール説明" />
          </div>

          <Table fixed={['50%', '50%']} minWidth="960px">
            <TableRow>
              <TableCell component="th" scope="row" align="center">
                <Text variant="h3" className="pd-all">
                  遊び方
                </Text>
              </TableCell>
              <TableCell>
                選択する前にベットするコインを決める
                <br />
                表示されているトランプの数より上か下かイコールかを当てる
                <br />
                最終的にコインをどれだけ持っているかを競う
                <br />
                参加人数は1人
                <br />
                初期所持コインは「1000」
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="center">
                <Text variant="h3" className="pd-all">
                  敗北条件
                </Text>
              </TableCell>
              <TableCell>途中でコインが0枚になった場合は終了</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="center">
                <Text variant="h3" className="pd-all">
                  コイン獲得レート
                </Text>
              </TableCell>
              <TableCell>
                上か下かで当てた場合は、ベットしたコイン*2を獲得
                <br />
                イコールで当てた場合は、ベットしたコイン*4を獲得
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" align="center">
                <Text variant="h3" className="pd-all">
                  トランプの強さ
                </Text>
              </TableCell>
              <TableCell>「A」が一番弱く「ジョーカー」が一番強い</TableCell>
            </TableRow>
          </Table>
        </div>

        <style>{`
          .wrapper {
            text-align: center;
          }
          .mb-100 {
            margin-bottom: 100px;
          }
          .pd-all {
            padding: 1rem;
          }
          ul {
            list-style-type: none;
          }
        `}</style>
      </div>
    )
  }
}

export default Rule
