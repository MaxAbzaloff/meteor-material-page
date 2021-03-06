import React from 'react'

import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

const iconStyle = {
  color: '#5da6ff',
  backgroundColor: '#dadfea',
  borderRadius: '50%'
}

const CustomIconButton = ({className = '', onClick}) => (
  <IconButton className={className} iconStyle={iconStyle} onClick={onClick} >
    <FontIcon className='material-icons'>add_circle</FontIcon>
  </IconButton>
)

export default CustomIconButton
