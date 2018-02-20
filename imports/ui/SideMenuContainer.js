import React, { Component } from 'react'

import CustomAvatar from './components/CustomAvatar'
import Authorization from './components/Authorization'
import Notifications from './components/Notifications'
import Settings from './components/Settings'

import PojectsDashboard from './components/ProjectsDashboard'
import MyTasks from './components/MyTasks'
import TimeTracking from './components/TimeTracking'

import './SideMenuContainer.scss'

class SideMenuContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      customAvatarStyles: {
        width: 138 / 2160 * 100 + 'vh',
        height: 138 / 2160 * 100 + 'vh'
      },
      dashboard: [
        {
          id: 1,
          className: 'blue',
          title: 'Buildteam'
        },
        {
          id: 2,
          className: 'yellow',
          title: 'Kickstagram'
        }
      ]
    }
  }
  render () {
    return (
      <div className='side-menu'>
        <div className='side-header side-menu__side-header header'>
          <CustomAvatar className='side-header__avatar' customStyles={this.state.customAvatarStyles} onlineState='online' />
          <div className='side-header__buttons-block'>
            <Notifications className='side-header__button' unreeded={1} />
            <Settings className='side-header__button' />
            <Authorization className='side-header__button' />
          </div>
        </div>
        <div className='side-content'>
          <PojectsDashboard className='side-content__block active' list={this.state.dashboard} />
          <MyTasks className='side-content__block' />
          <TimeTracking className='side-content__block' />
        </div>
        <button className='footer side-menu__footer'>
          <span className='footer__icon'></span>
          <span className='footer__text'></span>
        </button>
      </div>
    )
  }
}

export default SideMenuContainer
