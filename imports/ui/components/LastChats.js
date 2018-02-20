import React from 'react'

import CustomAvatar from './CustomAvatar'

const LastChats = ({className = '', chats = []}) => (
  <div>
    {
      chats.map(chat => <CustomAvatar key={chat.id} className={className} label={chat.name} />)
    }
  </div>
)

export default LastChats
