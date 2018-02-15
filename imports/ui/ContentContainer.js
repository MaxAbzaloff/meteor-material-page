import React, { Component } from 'react'

import { Tabs, Tab } from 'material-ui/Tabs'
import TasksContainer from './TasksContainer'

import './ContentContainer.scss'

class ContentContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tabStyle: {
        backgroundColor: '#3e4eb8'
      },
      btnStyle: {
        width: '230px'
      }
    }
  }
  render () {
    return (
      <div className='content'>
        <div className='content-header content__content-header header'>
          <h3 className='content-header__header'>{this.props.headerText}</h3>
          <i className='material-icons content-header__icon'>search</i>
          <Tabs className='content-header__tabs' tabItemContainerStyle={this.state.tabStyle}>
            <Tab label='overview' className='content-header__tab' buttonStyle={this.state.btnStyle}>
              overview
            </Tab>
            <Tab label='tasks' className='content-header__tab'>
              <TasksContainer />
            </Tab>
            <Tab label='progress' className='content-header__tab'>
              progress
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default ContentContainer
