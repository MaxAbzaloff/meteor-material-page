import React, { Component } from 'react'

import TaskCreateUpdateContainer from '../TaskCreateUpdateContainer'
import CustomIconButton from '../components/CustomIconButton'

import Task from '../components/Task'

import './Tasks.scss'

class Tasks extends Component {
  state = {
    taskData: null,
    createUpdateIsOnView: false
  }

  tasksSort (a, b) {
    switch (this.sort) {
      case 'Priority':
        return a.priority - b.priority
      case 'Asignee':
        return a.employee - b.employee
      case 'Recent':
        return a.createdAt - b.createdAt

      default:
        return 1
    }
  }

  addNewTask (event, task) {
    event.preventDefault()
    // targetRef.classList.toggle('hide')
    this.setState({
      taskData: task,
      createUpdateIsOnView: !this.state.createUpdateIsOnView
    })
  }

  render () {
    return (
      <div className='tasks'>
        {
          this.state.createUpdateIsOnView ? <TaskCreateUpdateContainer task={this.state.taskData} onClose={this.addNewTask.bind(this)} /> : ''
        }
        <div className='tasks__control-panel'>
          <h3 className='tasks__header'>Tasks</h3>
          <CustomIconButton className='tasks__icon-button' onClick={this.addNewTask.bind(this)} />
          <div className='tasks__filters' onClick={this.props.onFilterClick} >
            <span className='tasks__filter'>Priority<i className='material-icons tasks__filter-icon'>arrow_drop_down</i></span>
            <span className='tasks__filter'>Asignee<i className='material-icons tasks__filter-icon'>arrow_drop_down</i></span>
            <span className='tasks__filter'>Recent<i className='material-icons tasks__filter-icon'>arrow_drop_down</i></span>
          </div>
          <span className='tasks__details'>This is your tasks sheet. Here you can create, delete and edit tasks concerning your project.</span>
        </div>
        <div className='tasks__stack'>
          {
            this.props.tasks.sort(this.tasksSort.bind({sort: this.props.sort})).map(task => <Task key={task.id} task={task} updateTask={this.addNewTask.bind(this)} />)
          }
        </div>
      </div>
    )
  }
}

export default Tasks
