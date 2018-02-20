import React, { Component } from 'react'

import LastChats from './components/LastChats'
import AddChat from './components/AddChat'
import './ChatContainer.scss'

class ChatContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      chats: [
        {
          id: 1,
          name: 'Elnora',
          src: ''
        },
        {
          id: 2,
          name: 'Damien',
          src: ''
        },
        {
          id: 3,
          name: 'Lora',
          src: ''
        },
        {
          id: 4,
          name: 'Carla',
          src: ''
        },
        {
          id: 5,
          name: 'Greg',
          src: ''
        }
      ]
    }
  }
  render () {
    return (
      <div className='chat'>
        <div className='chat__icon'>
          <i className='material-icons'>chat</i>
        </div>
        <LastChats className='chat__recent-chat' chats={this.state.chats} />
        <AddChat className='chat__plus' />
        <div className='footer chat__footer' />
      </div>
    )
  }
}

export default ChatContainer
