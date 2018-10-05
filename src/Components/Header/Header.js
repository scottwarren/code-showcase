import React, { Component } from 'react'

import UnreadStatus from './UnreadStatus'

import './Header.css'

import logo from '../../assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          {/* Dumb stub for now for the unread status */}
          <UnreadStatus isUnread={Math.random() >= 0.5}>
            Messages
          </UnreadStatus>
        </div>
      </header>
    )
  }
}

export default Header