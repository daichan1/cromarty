import React from 'react'

interface Props {
  body: string
}

const Title = (props: Props): JSX.Element => <h1>{props.body}</h1>

export default Title
