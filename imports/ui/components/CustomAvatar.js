import React from 'react'

import Avatar from 'material-ui/Avatar'

const CustomAvatar = ({src = '', className = '', size = 140, customStyles = {}, label = ''}) => {
  const lbl = () => {
    if (label !== '') {
      return <span className={className + '__label'}>{label}</span>
    } else {
      return ''
    }
  }

  return (
    <div className={className}>
      <div className={className + '__wrapper'}>
        <Avatar src={src} style={customStyles} className={className + '__avatar'} />
      </div>
      {
        lbl()
      }
    </div>
  )
}

export default CustomAvatar
