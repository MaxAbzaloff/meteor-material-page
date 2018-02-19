import React from 'react'

import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

const CustomIconButton = ({className = ''}) => (
  <IconButton className={className}>
    <FontIcon className='material-icons'>add</FontIcon>
  </IconButton>
)

export default CustomIconButton
