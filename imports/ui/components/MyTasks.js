import React from 'react'

const MyTasks = ({className = ''}) => (
  <div className={className} >
    <i className='material-icons gray'>today</i>
    <span className='side-content__block_header'>{'my tasks'.toUpperCase()}</span>
  </div>
)

export default MyTasks
