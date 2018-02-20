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
          src: '',
          check: true
        },
        {
          id: 2,
          name: 'Damien',
          src: '',
          check: false
        },
        {
          id: 3,
          name: 'Lora',
          src: '',
          check: false
        },
        {
          id: 4,
          name: 'Carla',
          src: '',
          check: false
        },
        {
          id: 5,
          name: 'Greg',
          src: '',
          check: false
        }
      ],
      customAvatarStyles: {
        height: '100%',
        width: '100%'
      }
    }
  }
  render () {
    return (
      <div className='chat'>
        <div className='chat__icon'>
          <i className='material-icons'>chat</i>
        </div>
        <LastChats className='chat__recent-chat' chats={this.state.chats} customAvatarStyles={this.state.customAvatarStyles} />
        <AddChat className='chat__plus' />
        <div className='footer chat__footer' />
      </div>
    )
  }
}

export default ChatContainer
