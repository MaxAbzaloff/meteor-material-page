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

  componentDidMount () {
    this.moveStresser(this.refs[0].getBoundingClientRect())
  }

  onClick (event) {
    event.preventDefault()
    this.setState({
      active: [...event.target.parentNode.children].indexOf(event.target)
    })

    this.moveStresser(ReactDOM.findDOMNode(event.target).getBoundingClientRect())
  }

  moveStresser (target) {
    this.stresser.style.left = (target.x - this.refs[0].getBoundingClientRect().x) + 'px'
    this.stresser.style.width = target.width + 'px'
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
            titles.map((title, idx) => <div key={idx} className={'tab ' + (idx === this.state.active ? this.props.activeClassName : this.props.defaultClassName) } ref={idx} onClick={this.onClick.bind(this)}>{title.toUpperCase()}</div>)
          }
        </div>
        <div className={'stresser-default ' + this.props.stresserClassName} ref={target => this.stresser = target} />
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
