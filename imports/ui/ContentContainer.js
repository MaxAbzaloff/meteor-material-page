import React, { Component } from 'react'

import { Tabs, Tab } from 'material-ui/Tabs'
import TasksContainer from './TasksContainer'

import './ContentContainer.scss'

class ContentContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tabStyle: {
        backgroundColor: '#3e4eb8',
        height: '4.5vh'
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
          <h2 className='content-header__header'>{this.props.headerText}</h2>
          <i className='material-icons content-header__icon'>search</i>
          <Tabs className='content-header__tabs' tabItemContainerStyle={this.state.tabStyle} contentContainerClassName='tasks-container__tab'>
            <Tab label='overview' buttonStyle={this.state.btnStyle}>
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
