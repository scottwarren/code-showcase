import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './UnreadStatus.css'

// @TODO: use a prop that accepts how many unread messages there are
const UnreadBadge = ({ count }) => (
  <span className="UnreadStatus-badge">
    <sup>{count} </sup>
    <sup>New</sup>
  </span>
)

class UnreadStatus extends Component {
  render() {
    return this.props.unreadCount > 0 && <UnreadBadge count={this.props.unreadCount} />
  }
}

UnreadStatus.propTypes = {
  unreadCount: PropTypes.number.isRequired
}

export default UnreadStatus