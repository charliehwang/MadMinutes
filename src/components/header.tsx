import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../assets/zach-dinosaur.svg"

import { Container, Menu } from "semantic-ui-react"

import "semantic-ui-less/semantic.less"
import "./header.less"


interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }) => (
  <header>
    <Menu fixed="top">
      <Container>
        {/* <Menu.Item as="a" header> */}
        <div id="logo" className="logoColor">
          <span className="firstHalf">
            MAD
          </span>
          <span className="secondHalf">
            MINUTES
          </span>
          <img className="icon" src={logo} alt="zach dinosaur logo" />
        </div>
        {/* </Menu.Item> */}
      </Container>
    </Menu>
  </header>
)

export default Header
