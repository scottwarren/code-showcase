import React, { Component } from 'react'

import UnreadStatus from './UnreadStatus'

import './Header.css'

import logo from '../../assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="Header-container">
          <div className="Header-logo">
            <img src={logo} className="Header-logo" alt="logo" />
          </div>
          <div className="Header-navigation">
            <div className="Header-navigation-item">
              <UnreadStatus isUnread={true} />
              Messages
            </div>
          </div>
        </header>
        <hr className="Header-separator" />
      </React.Fragment>
    )
  }
}

export default Header