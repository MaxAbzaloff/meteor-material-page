import React, { Component } from 'react'

import { Meteor } from 'meteor/meteor'

import './TaskCreateUpdateContainer.scss'

class TaskCreateUpdateContainer extends Component {
  state = {
    priority: 'Low'
  }

  onSubmit (event) {
    event.preventDefault()

    if (this.props.task !== undefined) {
      Meteor.call('tasks.update', this.props.task._id, Object.assign({}, this.props.task, this.state))
    } else {
      const date = new Date(new Date().getTime() + this.state.estimated * 60 * 60 * 1000)
      const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'DEC']

      Meteor.call('tasks.insert', Object.assign({}, this.state, {
        id: Math.round(Math.random() * 1000),
        estimated: this.state.estimated + 'h',
        avatar: 'src',
        completed: 0,
        status: 'Open',
        dueDate: `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`,
        logged: '0h'
      }))
    }

    this.props.onClose(event)
  }

  onChange (event) {
    if (event.target.type === 'radio') {
      this.setState({
        [event.target.name]: event.target.value
      })
    } else if (event.target.type === 'text') {
      this.setState({
        [event.target.name]: event.target.value
      })
    } else if (event.target.type === 'number') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  checkbox (value, idx) {
    return (
      <React.Fragment key={idx}>
        <input type='radio' id={`checkbox-${value}`} value={value} name='priority' defaultChecked={this.props.task ? this.props.task.priority === value : value === 'Low'} onChange={this.onChange.bind(this)} />
        <label htmlFor={`checkbox-${value}`}>{value}</label>
      </React.Fragment>
    )
  }

  render () {
    return (
      <div className='CreateAndUpdateTask' ref={this.props.createUpdateTaskRef}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label className='CreateAndUpdateTask-Label'>
            Tag
            <input required type='text' name='tag' defaultValue={this.props.task ? this.props.task.tag : ''} onChange={this.onChange.bind(this)} />
          </label>
          <label className='CreateAndUpdateTask-Label'>
            Title
            <input required type='text' name='title' defaultValue={this.props.task ? this.props.task.title : ''} onChange={this.onChange.bind(this)} />
          </label>
          <div className='CreateAndUpdateTask-Checkboxes'>
            Priority:
            {
              ['Medium', 'Low'].map((checkbox, idx) => this.checkbox(checkbox, idx))
            }
          </div>
          <label className='CreateAndUpdateTask-Label'>
            Employee
            <input required type='text' name='employee' defaultValue={this.props.task ? this.props.task.employee : ''} onChange={this.onChange.bind(this)} />
          </label>
          <label className='CreateAndUpdateTask-Label'>
            Estimated hours
            <input required type='number' name='estimated' defaultValue={this.props.task ? parseInt(this.props.task.estimated, 10) : 0} onChange={this.onChange.bind(this)} />
          </label>

          <input className='RaisedButton' type='button' onClick={this.props.onClose} value='Cancel' />
          <input className='RaisedButton' type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default TaskCreateUpdateContainer
