import React from 'react'

import CustomAvatar from './CustomAvatar'

const LastChats = () => (
  <div>
    {
      [1, 2, 3, 4, 5].map(key => <CustomAvatar key={key} />)
    }
  </div>
)

export default LastChats
