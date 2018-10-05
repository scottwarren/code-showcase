import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <ul>
          <li>
            Selected
          </li>
          <li>
            Messages
          </li>
        </ul>
      </header>
    )
  }
}

export default Header