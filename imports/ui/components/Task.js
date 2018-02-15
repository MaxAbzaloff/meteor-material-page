import React from 'react'

import CustomAvatar from '../components/CustomAvatar'
import LinearProgress from 'material-ui/LinearProgress'
import RaisedButton from 'material-ui/RaisedButton'
import './Task.scss'

const Task = ({task}) => (
  <div className='task'>
    <i className='material-icons'>more_vert</i>
    <span className='task__tag'>{task.tag}</span>
    <h6 className='task__title'>{task.title}</h6>
    <button disabled className='task__flag'>{task.status}</button>
    <button disabled className='task__flag'>{task.priority}</button>
    <CustomAvatar src={task.avatar} />
    <span className='task__detail'>{task.employee}</span>
    <span className='task__detail'>{task.dueDate}</span>
    <span className='task__detail'>{task.estimated}</span>
    <span className='task__detail'>{task.logged}</span>

    <div className='log-data task__log-data'>
      <div className='log-data__block'>
        <span className='log-data__logged'>Logged: {task.logged}</span>
        <LinearProgress />
      </div>
      <div className='log-data__block'>
        <RaisedButton label='Log Time' />
      </div>
    </div>
  </div>
)

export default Task
