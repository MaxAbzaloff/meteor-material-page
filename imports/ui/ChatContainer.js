import React, { Component } from 'react'

import LastChats from './components/LastChats'

class ChatContainer extends Component {
  render () {
    return (
      <div className='chat'>
        <div className='chat__message'>
        </div>
        <LastChats />
        <div className='chat__plus'>
        </div>
        <div className='footer'>
        </div>
      </div>
    )
  }
}

export default ChatContainer
