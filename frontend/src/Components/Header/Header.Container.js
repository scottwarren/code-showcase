import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header
        unreadCount={this.props.unreadCount}
      />
    )
  }
}

const mapStateToProps = state => {
  const unreadCount = state.messagesState.messages.reduce((accumulator, message) => {
    
    if (message.isUnread) {
      accumulator++
    }

    return accumulator
  }, 0)

  return {
    unreadCount,
  }
}

export default connect(mapStateToProps, null)(HeaderContainer);
