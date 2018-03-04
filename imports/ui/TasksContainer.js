import React from 'react'

// import { Tabs, Tab } from 'material-ui/Tabs'
import Tasks from './components/Tasks'
import Tabs from './components/Tabs'
import Tab from './components/Tab'

import './TasksContainer.scss'

class TasksContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tabStyle: {
        backgroundColor: '#edeff2',
        color: '#bdbfc1'
      },
      activeTab: 0,
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
        logged: '4h',
        completed: 40
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
        logged: '2h',
        completed: 15
      }
      ]
    }
  }

  render () {
    return (
      <div>
        <Tabs className='tasks-container__tabs' tabs={this.state.tasks}>
          <Tab label='new(2)' className='tasks-container__tab'>
            <Tasks tasks={this.state.tasks} />
          </Tab>
          <div label='in progress(6)' className='tasks-container__tab'>
            in progress
          </div>
          <div label='ready for qa(1)' className='tasks-container__tab'>
            ready for qa
          </div>
          <div label='done(9)' className='tasks-container__tab'>
            done
          </div>
          <div label='close(6)' className='tasks-container__tab'>
            close
          </div>
        </Tabs>
      </div>
    )
  }
}

export default TasksContainer
