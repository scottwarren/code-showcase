import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './UnreadStatus.css'

// @TODO: use a prop that accepts how many unread messages there are
const UnreadBadge = () => (
  <span className="UnreadStatus-badge">
    <sup>New</sup>
  </span>
)

class UnreadStatus extends Component {
  render() {
    // When this relies on there being a number instead of a boolean (when we're passed the number of unread messages)
    // We should calculate this in the render. Example: `{unreadCount > 0 && (<UnreadBadget count={unreadCount} />) }`
    return this.props.isUnread && <UnreadBadge />
  }
}

UnreadStatus.propTypes = {
  isUnread: PropTypes.bool.isRequired
}

export default UnreadStatus