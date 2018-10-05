import React, { Component } from 'react';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Messages from './Components/Messages'
import NewMessageGenerator from './Components/NewMessageGenerator'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <Messages />
          {/* TODO: Pass action dispatcher for onClick to generate a new message */}
          <NewMessageGenerator onClick={() => {}} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;