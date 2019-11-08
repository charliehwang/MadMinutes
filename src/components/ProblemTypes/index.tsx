import React from "react"

// import * as less from "semantic-ui-less/less"
// import "semantic-ui-less/semantic.less"
import "semantic-ui-less/semantic.less"
import * as CONFIG from "../../madminutes-config"
import "./ProblemTypes.less"
import Levels from "../Levels"

const defaultProblemTypeOrder = CONFIG.defaultProblemTypeOrder

const displayProblemTypes = (typeOrder: Array<string>) => {
  const items: Array<any> = []
  typeOrder.forEach((type, i) => {
    items.push(
      <div key={type} className="type">
        <div className="header">{type}</div>
        <Levels problemType={type}></Levels>
      </div>
    )
  })
  return items
}

const ProblemTypes = () => (
  <div id="problemGroupsContainer">
    {displayProblemTypes(defaultProblemTypeOrder)}
  </div>
)

export default ProblemTypes
