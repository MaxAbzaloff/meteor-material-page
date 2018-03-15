import React from 'react'

import LinearProgress from 'material-ui/LinearProgress'
import RaisedButton from '../components/RaisedButton'
import './Task.scss'

const Task = ({task}) => (
  <React.Fragment>
    <div className={'task ' + 'task__priority_' + task.priority.toLowerCase()}>
      <div className='task__more'>
        <i className='material-icons'>more_vert</i>
      </div>

      <div className='task__content'>
        <span className='task__tag'>{task.tag}</span><br />
        <h4 className='task__title'>{task.title}</h4><br />

        <div className='task__details'>
          <div className={'task__flag task__flag_priority_' + task.priority.toLowerCase()}>
            <span className='task__point' />
            {task.priority}
          </div>
          <div className='task__flag'>
            <span className='task__point' />
            {task.status}
          </div>
          <span className='task__avatar' />
          <span className='task__detail'>{task.employee}</span>
          <span className='task__detail'>{'Due date: ' + task.dueDate}</span>
          <span className='task__detail'>{'Estimated: ' + task.estimated}</span>
        </div>
      </div>

      <div className='log-data task__log-data'>
        <div className='log-data__block log-data__block_get-lower_0-2-rem'>
          <span className='log-data__logged'>Logged {task.logged}</span>
          <LinearProgress mode='determinate' value={task.completed} />
        </div>
        <div className='log-data__block log-data__block_get-higer_0-7-rem'>
          <RaisedButton label='Log Time' icon={<i className='material-icons'>timer</i>} className='raised-button' />
        </div>
      </div>
    </div>
    <div className='gray-container' />
  </React.Fragment>
)

export default Task
