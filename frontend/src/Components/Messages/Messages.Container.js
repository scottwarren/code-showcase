import React from 'react'
import { connect } from 'react-redux'

import Messages from './Messages'

class MessagesContainer extends React.Component {
  render() {
    return (
      <Messages
        messages={this.props.messages}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
  }
}

export default connect(mapStateToProps, null)(MessagesContainer);
