import React from 'react'

import './Notifications.scss'

const Notifications = ({className = '', unreeded = 0}) => {
  const unrdd = () => {
    if (unreeded > 0) {
      return <span className='badge'>{unreeded}</span>
    } else {
      return ''
    }
  }

  return (
    <div className={className}>
      <i className='material-icons'>notifications</i>
      {
        unrdd()
      }
    </div>
  )
}

export default Notifications
