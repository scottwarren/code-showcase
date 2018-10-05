import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Messages from './Components/Messages'
import NewMessageGenerator from './Components/NewMessageGenerator'

import { generateNewMessageAction } from './actions/generateNewMessageAction'
import { getMessagesAction } from './actions/getMessagesAction'


import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.getMessages()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <Messages />
          <NewMessageGenerator onClick={this.props.generateNewMessage} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  generateNewMessage: () => dispatch(generateNewMessageAction()),
  getMessages: () => dispatch(getMessagesAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
