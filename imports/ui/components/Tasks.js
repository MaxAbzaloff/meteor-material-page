import React from 'react'

import CustomIconButton from '../components/CustomIconButton'

import Task from '../components/Task'

import './Tasks.scss'

const Tasks = ({tasks = []}) => (
  <div>
    <h4>Tasks</h4>
    <CustomIconButton />
    <div>
      <span>Priority<i className='material-icons'>arrow_drop_down</i></span>
      <span>Asignee<i className='material-icons'>arrow_drop_down</i></span>
      <span>Recent<i className='material-icons'>arrow_drop_down</i></span>
    </div>
    <span>This is your tasks sheet. Here you can create, delete and edit tasks concerning your project.</span>
    <div>
      {
        tasks.map(task => <Task key={task.id} task={task} />)
      }
    </div>
  </div>
)

export default Tasks
