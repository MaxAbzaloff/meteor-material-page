import React, { Component } from 'react'

// import { Tabs, Tab } from 'material-ui/Tabs'
import TasksContainer from './TasksContainer'
import Tabs from './components/Tabs'
import Tab from './components/Tab'

import './ContentContainer.scss'

class ContentContainer extends Component {
  render () {
    return (
      <div className='content'>
        <div className='content-header content__content-header header'>
          <h2 className='content-header__header'>{this.props.headerText}</h2>
          <i className='material-icons content-header__icon'>search</i>
          <Tabs className='content-header__tabs'
                contentContainerClassName='tasks-container__tab'
                headerContainerClassName='tasks-container__header'
                defaultClassName='tasks__tab tasks__tab_default'
                activeClassName='tasks__tab tasks__tab_active'
                stresserClassName='stresser'>
            <Tab label='overview'>
              overview
            </Tab>
            <Tab label='tasks'>
              <TasksContainer />
            </Tab>
            <Tab label='progress'>
              progress
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default ContentContainer
