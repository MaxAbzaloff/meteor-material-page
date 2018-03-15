import React from 'react'

import CustomAvatar from './CustomAvatar'

import './LastChats.scss'

const lbl = label => {
  if (label !== '') {
    return <span className='label'>{label}</span>
  } else {
    return ''
  }
}

const LastChats = ({className = '', chats = []}) => (
  <div>
    {
      chats.map(chat => <div key={chat.id} className='wrapper'><CustomAvatar className={className} check={chat.check} /> {lbl(chat.name)} </div>)
    }
  </div>
)

export default LastChats
