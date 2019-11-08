import React from "react"

import { Button } from "semantic-ui-react"
// import * as less from "semantic-ui-less/less"
// import "semantic-ui-less/semantic.less"
import "semantic-ui-less/semantic.less"
import * as CONFIG from "../../madminutes-config"
// import "./Levels.less"

// const defaultProblemTypeOrder = CONFIG.defaultProblemTypeOrder

// const displayLevels = (problemType: ProblemType) => {
//   let items: Array<any> = []
//   typeOrder.forEach((type, i) => {
//     items.push(
//       <div className="type">
//         <div className="header">{type}</div>
//         <Levels type={type}></Levels>
//       </div>)
//   })
//   return items
//   return <div>{problemType}</div>
// }
interface Props {
  problemType: string
}

const Levels = ({ problemType }) => {
  console.log("--->", problemType)
  return (
    <div className="levels">
      {/* Levels...
    <Button>A</Button>
    <Button>B</Button> */}
      asdfad
      {problemType}
      ....
      {/* {displayLevels(problemType)} */}
    </div>
  )
}

export default Levels
