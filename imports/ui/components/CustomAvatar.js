import React from 'react'

// import Avatar from 'material-ui/Avatar'
import './CustomAvatar.scss'

const CustomAvatar = ({src = '', className = '', onlineState = '', check = false, size = 140, label = ''}) => {
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
    <div className={'avatar ' + className}>
      <div className={'avatar__wrapper'}>
        <div className={'avatar__img'} style={{backgroundImage: `url(${src})`}} />
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
