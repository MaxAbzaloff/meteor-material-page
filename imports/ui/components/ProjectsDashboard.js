import React from 'react'

import './ProjectsDashboard.scss'

const ProjectsDashboard = ({className = '', list = []}) => (
  <div className={className} >
    <i className='material-icons gray'>dashboard</i>
    <span className='side-content__block_header'>{'projects dashboard'.toUpperCase()}</span>

    <ul className='dashboard__ul'>
      {
        list.map(item => (
          <li key={item.id} className='dashboard__ul_item'>
            <i className={'material-icons dashboard__ul_icon ' + item.className}>brightness_1</i>
            <span className='dashboard__ul_text'>{item.title}</span>
          </li>
        ))
      }
    </ul>
  </div>
)

export default ProjectsDashboard
