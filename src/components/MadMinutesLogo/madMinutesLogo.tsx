import { Link } from "gatsby"
import React from "react"

import logo from "./zach-dinosaur.svg"

import { Container, Menu } from "semantic-ui-react"

import "semantic-ui-less/semantic.less"
import "./madMinutesLogo.less"


interface Props {
    linkHref: string
}

const MadMinutesLogo = ({ linkHref = "/" }) => (
    <a href={linkHref}>
        <div id="madMinutesLogo" className="logoColor">
            <span className="firstHalf">
                MAD
                </span>
            <span className="secondHalf">
                MINUTES
                </span>
            <img className="icon" src={logo} alt="zach dinosaur logo" />
        </div>
    </a >
)

export default MadMinutesLogo
