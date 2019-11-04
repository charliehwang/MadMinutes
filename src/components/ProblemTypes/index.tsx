import React from "react"
import { Link } from "gatsby"

import { Button } from "semantic-ui-react"
// import * as less from "semantic-ui-less/less"
// import "semantic-ui-less/semantic.less"
import "semantic-ui-less/semantic.less"
import * as CONFIG from "../../madminutes-config"
import "./ProblemTypes.less"
import Levels from "../Levels"

const defaultProblemTypeOrder = CONFIG.defaultProblemTypeOrder

const displayProblemTypes = (typeOrder: Array<string>) => {
  let items: Array<any> = []
  typeOrder.forEach((type, i) => {
    items.push(
      <div className="type">
        <div className="header">{type}</div>
        <Levels type={type}></Levels>
      </div>)
  })
  return items
}

const ProblemTypes = () => (
  <div id="problemGroupsContainer">
    {displayProblemTypes(defaultProblemTypeOrder)}
  </div>
)

export default ProblemTypes
