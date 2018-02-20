import React from 'react'

import Avatar from 'material-ui/Avatar'

const CustomAvatar = ({src = '', className = '', onlineState = '', check = false, size = 140, customStyles = {}, label = ''}) => {
  const lbl = () => {
    if (label !== '') {
      return <span className={className + '__label'}>{label}</span>
    } else {
      return ''
    }
  }

  const onln = () => {
    if (onlineState === 'online') {
      return <span className={className + '__state'} />
    } else {
      return ''
    }
  }

  const chck = () => {
    if (check !== false) {
      return (
        <span className={className + '__check'} />
      )
    } else {
      return ''
    }
  }

  return (
    <div className={className}>
      <div className={className + '__wrapper'}>
        <Avatar src={src} style={customStyles} className={className + '__avatar'} />
        {
          chck()
        }
        {
          onln()
        }
      </div>
      {
        lbl()
      }
    </div>
  )
}

export default CustomAvatar
