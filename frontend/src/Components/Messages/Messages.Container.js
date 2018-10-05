import React from 'react'
import { connect } from 'react-redux'

import { selectMessageAction } from '../../actions/selectMessageAction'

import Messages from './Messages'

class MessagesContainer extends React.Component {
  render() {
    return (
      <Messages
        messages={this.props.messages}
        handleMessageClick={this.props.selectMessageAction}
        selectedMessage={this.props.selectedMessage}
      />
    )
  }
}

const mapStateToProps = state => {
  const { messages, selectedMessageId } = state.messagesState

  let selectedMessage = null
  
  if (selectedMessageId) {
    // Find the selected message from the state of messages
    const filteredMessages = messages.filter(m => m._id === selectedMessageId)
    
    // If we find it, then we're passing this selected message down to the message display panel, so we can display the content
    if (filteredMessages && filteredMessages.length > 0) {
      selectedMessage = filteredMessages[0]
    }
  }

  return {
    messages,
    selectedMessage,
  }
}


const mapDispatchToProps = dispatch => ({
  selectMessageAction: id => { 
    return dispatch(selectMessageAction(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
