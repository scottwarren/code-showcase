import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NewMessageGenerator.css'

class NewMessageGenerator extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="NewMessageGenerator-button"
      >
        Receive New Message
      </button>
    )
  }
}

NewMessageGenerator.propTypes = {
  onClick: PropTypes.func
}

NewMessageGenerator.defaultProps = {
  onClick: () => {}
}

export default NewMessageGenerator