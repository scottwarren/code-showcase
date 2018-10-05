import React, { Component } from 'react'

import UnreadStatus from './UnreadStatus'

import './Header.css'

import logo from '../../assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <header className="Header-container">
        <div className="Header-logo">
          <img src={logo} className="Header-logo" alt="logo" />
        </div>
        <div className="Header-navigation">
          <UnreadStatus isUnread={true} />
          <div className="Header-navigation-item">
            Messages
          </div>
          <UnreadStatus isUnread={false} />
          <div className="Header-navigation-item">
            Another Message Center
          </div>
        </div>
      </header>
    )
  }
}

export default Header