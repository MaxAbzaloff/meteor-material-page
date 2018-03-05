import React from 'react'

import './RaisedButton.scss'

const RaisedButton = props => (
  <button type='button' className={'raised-button ' + props.className}>
    {props.label} {props.icon}
  </button>
)

export default RaisedButton
