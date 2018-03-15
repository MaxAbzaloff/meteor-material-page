import React from 'react'

import CustomIconButton from '../components/CustomIconButton'

import Task from '../components/Task'

import './Tasks.scss'

const Tasks = props => (
  <div className='tasks'>
    <div className='tasks__control-panel'>
      <h3 className='tasks__header'>Tasks</h3>
      <CustomIconButton className='tasks__icon-button' onClick={props.addNewTask} />
      <div className='tasks__filters' onClick={props.onFilterClick} >
        <span className='tasks__filter'>Priority<i className='material-icons tasks__filter-icon'>arrow_drop_down</i></span>
        <span className='tasks__filter'>Asignee<i className='material-icons tasks__filter-icon'>arrow_drop_down</i></span>
        <span className='tasks__filter'>Recent<i className='material-icons tasks__filter-icon'>arrow_drop_down</i></span>
      </div>
      <span className='tasks__details'>This is your tasks sheet. Here you can create, delete and edit tasks concerning your project.</span>
    </div>
    <div className='tasks__stack'>
      {
        props.tasks.map(task => <Task key={task.id} task={task} />)
      }
    </div>
  </div>
)

export default Tasks
