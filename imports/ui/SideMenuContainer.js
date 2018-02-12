import React, { Component } from 'react'

import Avatar from './components/Avatar'
import Authorization from './components/Authorization'
import Notifications from './components/Notifications'
import Settings from './components/Settings'

import PojectsDashboard from './components/ProjectsDashboard'
import MyTasks from './components/MyTasks'
import TimeTracking from './components/TimeTracking'

class SideMenuContainer extends Component {
  render () {
    return (
      <div className='side-menu'>
        <div className='side-header side-menu__side-header header'>
          <Avatar className='side-header__avatar' />
          <Notifications className='side-header__button' />
          <Settings className='side-header__button' />
          <Authorization className='side-header__button' />
        </div>
        <div className='side-content'>
          <PojectsDashboard />
          <MyTasks />
          <TimeTracking />
        </div>
        <button className='footer'>
          <span className='footer__icon'></span>
          <span className='footer__text'></span>
        </button>
      </div>
    )
  }
}

export default SideMenuContainer
