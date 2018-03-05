import React from 'react'
import ReactDOM from 'react-dom'

import './Tabs.scss'

class Tabs extends React.Component {
  state = {
    active: 0
  }

  static defaultProps = {
    tasks: []
  }

  onClick (event) {
    event.preventDefault()
    this.setState({
      active: [...event.target.parentNode.children].indexOf(event.target)
    })

    this.moveStresser(ReactDOM.findDOMNode(event.target).getBoundingClientRect())
  }

  moveStresser (target) {
    const box = {
      x: target.x,
      y: target.y + target.height + pageYOffset
    }
    
    this.stresser.style.left = (box.x - this.refs[0].getBoundingClientRect().x) + 'px'
    this.stresser.style.width = target.width + 'px'
  }

  componentDidMount () {
    this.moveStresser(this.refs[0].getBoundingClientRect())
  }

  render () {
    const titles = []
    const children = React.Children.map(this.props.children, (child, idx) => {
      titles.push(child.props.label)
      return React.cloneElement(child, {onClick: this.onClick})
    })

    return (
      <div className={this.props.className}>
        <div className={this.props.headerContainerClassName}>
          {
            titles.map((title, idx) => <div key={idx} className={'tab ' + this.props.tabContainerClassName} ref={idx} onClick={this.onClick.bind(this)}>{title.toUpperCase()}</div>)
          }
        </div>
        <div className='stresser' ref={target => this.stresser = target} />
        <div className={this.props.contentContainerClassName}>
          {
            children.filter((child, idx) => idx === this.state.active)
          }
        </div>
      </div>
    )
  }
}

export default Tabs
