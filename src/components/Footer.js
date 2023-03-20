import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-light">
        <Menu className="bg-white text-white" inverted fluid widths={1}>
          <Menu.Item>
            LandAllotment 
          </Menu.Item>
        </Menu>
      </footer>
    )
  }
}
