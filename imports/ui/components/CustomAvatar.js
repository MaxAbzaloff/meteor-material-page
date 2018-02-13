import React from 'react'

import Avatar from 'material-ui/Avatar'

const CustomAvatar = ({src = ''}) => (
  <div>
    <Avatar src={src} />
  </div>
)

export default CustomAvatar
