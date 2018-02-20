import React from 'react'

import './AddChat.scss'

const AddChat = ({className = ''}) => (
  <div className={'add-chat ' + className}>
    <div className='add-chat__wrapper'>
      <i className='material-icons add-chat__icon'>add</i>
    </div>
    <span className='add-chat__label'>More...</span>
  </div>
)

export default AddChat
