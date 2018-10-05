import React from 'react'
import PropTypes from 'prop-types'

import './Message.css'

const Message = ({ message }) => {
  return (
    <div className="Message-container">
      <div className="Message-row Message-row--first">
        <span>{message.author}</span>
        <span>{message.createdAt}</span>
      </div>
      <div className="Message-row Message-row--last">
        <div className="Message-content">
          {message.isSentByCurrentUser ? 'You: ': 'Them: '}
          {message.content}
        </div>
        <span>{message.isUnread ? 'Unread' : 'Read'}</span>
      </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isSentByCurrentUser: PropTypes.bool.isRequired,
    isUnread: PropTypes.bool.isRequired,
  }).isRequired
}

export default Message