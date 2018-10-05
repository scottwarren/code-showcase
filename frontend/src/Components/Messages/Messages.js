import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Message from './Message'

import './Messages.css'

class Messages extends Component {
  render() {
    let messages = 'No messages found'

    if (this.props.messages.length > 0) messages = this.props.messages.map(m => <Message key={m._id} message={m} />)
    
    return (
      <div className="Messages-container">
        <div className="Messages-info-panel">
          {messages}
        </div>
        <div className="Messages-display-panel">
          No Message Selected
        </div>
      </div>
    )
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
}

Messages.defaultProps = {
  messages: [],
}

export default Messages