import React, { Component } from 'react'

import './Messages.css'

class Messages extends Component {
  render() {
    return (
      <div className="Messages-container">
        <div className="Messages-info-panel">
          Loading Messages...
        </div>
        <div className="Messages-display-panel">
          No Message Selected
        </div>
      </div>
    )
  }
}

export default Messages