import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container, Menu } from "semantic-ui-react"

import "semantic-ui-less/semantic.less"
import "./header.less"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }) => (
  <header>
    <Menu fixed="top" inverted>
      <Container>
        {/* <Menu.Item as="a" header> */}
        <div id="logo" className="logoColor">
          MAD
          <span id="logoSecond" className="logoLighter">
            MINUTES
          </span>
          {/* <img id="zachSVG" src="zach-dinosaur.svg" style="clip-path: unset;"> */}
        </div>
        {/* </Menu.Item> */}
      </Container>
    </Menu>
  </header>
)

export default Header
