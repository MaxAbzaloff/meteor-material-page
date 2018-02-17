import React from 'react'

import Avatar from 'material-ui/Avatar'

const CustomAvatar = ({src = '', className = '', size = 140, customStyles = {}}) => (
  <div className={className}>
    <Avatar src={src} style={customStyles} />
  </div>
)

export default CustomAvatar
