import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-primary">
        <Menu className="bg-primary text-white" inverted fluid widths={1}>
          <Menu.Item>
            Truviq - React Redux Example Tasklist 2018
          </Menu.Item>
        </Menu>
      </footer>
    )
  }
}
