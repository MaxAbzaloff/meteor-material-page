import React from 'react'

import CustomIconButton from '../components/CustomIconButton'

import Task from '../components/Task'

import './Tasks.scss'

const Tasks = ({tasks = []}) => (
  <div className='tasks'>
    <div className='tasks__control-panel'>
      <h3 className='tasks__header'>Tasks</h3>
      <CustomIconButton className='tasks__icon-button' />
      <div className='tasks__filters'>
        <span>Priority<i className='material-icons tasks__filter-icon'>arrow_drop_down</i></span>
        <span>Asignee<i className='material-icons tasks__filter-icon'>arrow_drop_down</i></span>
        <span>Recent<i className='material-icons tasks__filter-icon'>arrow_drop_down</i></span>
      </div>
      <span className='tasks__details'>This is your tasks sheet. Here you can create, delete and edit tasks concerning your project.</span>
    </div>
    <div className='tasks__stack'>
      {
        tasks.map(task => <Task key={task.id} task={task} />)
      }
    </div>
  </div>
)

export default Tasks
