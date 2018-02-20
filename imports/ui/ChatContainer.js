import React, { Component } from 'react'

import LastChats from './components/LastChats'
import AddChat from './components/AddChat'
import './ChatContainer.scss'

class ChatContainer extends Component {
  render () {
    return (
      <div className='chat'>
        <div className='chat__icon'>
          <i className='material-icons'>chat</i>
        </div>
        <LastChats />
        <AddChat className='chat__plus' />
        <div className='footer chat__footer' />
      </div>
    )
  }
}

export default ChatContainer
