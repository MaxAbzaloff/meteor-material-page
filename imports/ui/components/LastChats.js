import React from 'react'

import CustomAvatar from './CustomAvatar'

const LastChats = ({className = '', chats = [], customAvatarStyles = {}}) => (
  <div>
    {
      chats.map(chat => <CustomAvatar key={chat.id} className={className} label={chat.name} customStyles={customAvatarStyles} check={chat.check} />)
    }
  </div>
)

export default LastChats
