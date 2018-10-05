import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
              <UnreadStatus unreadCount={this.props.unreadCount} />
              Messages
            </div>
          </div>
        </header>
        <hr />
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  unreadCount: PropTypes.number.isRequired,
}

export default Header