import React from 'react'

import './RaisedButton.scss'

const RaisedButton = props => (
  <button type='button' className={'raised-button ' + props.className}>
    <span>{props.label}</span>
    {props.icon}
  </button>
)

export default RaisedButton
