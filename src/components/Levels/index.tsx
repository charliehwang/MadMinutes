import React from "react"
import { Link } from "gatsby"

import { Button } from "semantic-ui-react"
// import * as less from "semantic-ui-less/less"
// import "semantic-ui-less/semantic.less"
import "semantic-ui-less/semantic.less"
import * as CONFIG from "../../madminutes-config"
// import "./Levels.less"

// const defaultProblemTypeOrder = CONFIG.defaultProblemTypeOrder

// const displayLevels = (typeOrder: Array<string>) => {
//   let items: Array<any> = []
//   typeOrder.forEach((type, i) => {
//     items.push(
//       <div className="type">
//         <div className="header">{type}</div>
//         <Levels type={type}></Levels>
//       </div>)
//   })
//   return items
// }

const Levels = () => (
  <div className="levels">
    Levels...
    <Button>A</Button>
    <Button>B</Button>
    {/* {displayLevels(defaultProblemTypeOrder)} */}
  </div>
)

export default Levels 
