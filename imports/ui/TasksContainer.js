import React from 'react'

import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import { Tasks as apiTasks } from '../api/tasks'

import Tasks from './components/Tasks'
import Tabs from './components/Tabs'
import Tab from './components/Tab'

import './TasksContainer.scss'

class TasksContainer extends React.Component {
  componentWillMount () {
    const tasks = [{
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
    }]

    Meteor.call('tasks.removeAll')
    Meteor.call('tasks.insertMany', tasks)
  }

  onFilterClick (event) {
    event.preventDefault()
  }

  addNewTask (event) {
    event.preventDefault()
    console.log('add new task')
    Meteor.call('tasks.insert', {
      id: 3,
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
    })
  }

  render () {
    return (
      <div>
        <Tabs className='tasks-container__tabs'
          contentContainerClassName='tab-container'
          headerContainerClassName='tab-header'
          defaultClassName='tab tab_default'
          activeClassName='tab tab_active'
          stresserClassName='tasks-container__stresser'>
          <Tab label='new(2)' className='tasks-container__tab'>
            <Tasks tasks={this.props.tasks} onFilterClick={this.onFilterClick.bind(this)} addNewTask={this.addNewTask.bind(this)} />
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

export default withTracker(() => {
  Meteor.subscribe('tasks')

  return {
    tasks: apiTasks.find({}, {sort: {createdAt: -1}}).fetch()
  }
})(TasksContainer)
