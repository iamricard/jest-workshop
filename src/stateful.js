import React from 'react'

class Component extends React.Component {
  constructor (props) {
    super(props)

    this.handleButtonMouseDown = this.handleButtonMouseDown.bind(this)

    this.state =
      { isExpanded: false
      }
  }

  handleButtonMouseDown (event) {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render () {
    return (
      <div>
        <button onMouseDown={this.handleButtonMouseDown}>
          {this.props.label}
        </button>

        {this.state.isExpanded && this.props.children}
      </div>
    )
  }
}

Component.propTypes =
  { children: React.PropTypes.any.isRequired
  , label: React.PropTypes.string.isRequired
  }

export default Component
