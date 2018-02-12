import React, { Component } from 'react'

import CustomTabs from './components/CustomTabs'
import Tasks from './components/Tasks'

class ContentContainer extends Component {
  render () {
    return (
      <div className='content'>
        <div className='content-header content__content-header header'>
          <h3 className='content-header__header'>{this.props.headerText}</h3>
          <span className='icon content-header__icon'></span>
          <CustomTabs />
        </div>
        <div className='content__workspace'>
          <CustomTabs />
          <Tasks />
        </div>
      </div>
    )
  }
}

export default ContentContainer
