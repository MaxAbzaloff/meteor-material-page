import React from 'react'

const Tab = props => (
  <div onClick={props.onClick}>
    {
      props.children
    }
  </div>
)

export default Tab
