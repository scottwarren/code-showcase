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
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
  }
}


const mapDispatchToProps = dispatch => ({
  selectMessageAction: id => { 
    debugger
    return dispatch(selectMessageAction(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
