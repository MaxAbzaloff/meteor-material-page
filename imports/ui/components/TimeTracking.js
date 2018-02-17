import React from 'react'

import './TimeTracking.scss'

const TimeTracking = ({className = ''}) => (
  <div className={className}>
    <i className='material-icons gray'>timer</i>
    <span className='side-content__block_header'>{'time tracking'.toUpperCase()}</span>

    {/* <i className='material-icons'>play_arrow</i>
    <span>Start tracking</span>
    <i className='material-icons'>refresh</i>
    <span>Last tracked</span> */}

    <ul className='time-tracking__ul'>
      <li className='time-tracking__ul_item'>
        <i className='material-icons time-tracking__ul_icon aqua'>play_arrow</i>
        <span className='time-tracking__ul_text'>Start tracking</span>
      </li>
      <li className='time-tracking__ul_item'>
        <i className='material-icons time-tracking__ul_icon pink'>refresh</i>
        <span className='time-tracking__ul_text'>Last tracked</span>
      </li>
    </ul>
  </div>
)

export default TimeTracking
