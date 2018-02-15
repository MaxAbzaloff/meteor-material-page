import React from 'react'

import { Tabs, Tab } from 'material-ui/Tabs'
import Tasks from './components/Tasks'

import './TasksContainer.scss'

class TasksContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tabStyle: {
        backgroundColor: 'gray'
      },
      tasks: [{
        id: 1,
        tag: 'ROYA1',
        title: 'New user list for inline shop quo-shopping.com',
        priority: 'Medium',
        status: 'Open',
        avatar: 'src',
        employee: 'Elnora Douglas',
        dueDate: '13 APR 2017',
        estimated: '23h',
        logged: '4h'
      }, {
        id: 2,
        tag: 'BUL-1',
        title: 'New user list for inline shop quo-shopping.com',
        priority: 'Low',
        status: 'Open',
        avatar: 'src',
        employee: 'Elnora Douglas',
        dueDate: '13 APR 2017',
        estimated: '23h',
        logged: '2h'
      }
      ]
    }
  }

  render () {
    return (
      <div>
        <Tabs className='tasks-container__tabs' tabItemContainerStyle={this.state.tabStyle}>
          <Tab label='new(2)' className='tasks-container__tab'>
            <Tasks tasks={this.state.tasks} />
          </Tab>
          <Tab label='in progress(6)' className='tasks-container__tab'>
            in progress
          </Tab>
          <Tab label='ready for qa(1)' className='tasks-container__tab'>
            ready for qa
          </Tab>
          <Tab label='done(9)' className='tasks-container__tab'>
            done
          </Tab>
          <Tab label='close(6)' className='tasks-container__tab'>
            close
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default TasksContainer
