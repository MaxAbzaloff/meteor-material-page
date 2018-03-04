import React from 'react'

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
  }

  render () {
    const titles = []
    const children = React.Children.map(this.props.children, (child, idx) => {
      titles.push(child.props.label)
      return React.cloneElement(child, {onClick: this.onClick})
    })

    return (
      <div>
      {
        titles.map((title, idx) => <h3 key={idx} onClick={this.onClick.bind(this)}>{title}</h3>)
      }
      {
        children.filter((child, idx) => idx === this.state.active)
      }
      </div>
    )
  }
}

export default Tabs
