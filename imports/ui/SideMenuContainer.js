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
  render () {
    return (
      <div className='side-menu'>
        <div className='side-header side-menu__side-header header'>
          <CustomAvatar className='side-header__avatar' />
          <Notifications className='side-header__button' />
          <Settings className='side-header__button' />
          <Authorization className='side-header__button' />
        </div>
        <div className='side-content'>
          <PojectsDashboard className='side-content__block' />
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
