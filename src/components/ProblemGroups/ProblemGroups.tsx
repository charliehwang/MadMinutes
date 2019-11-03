import React from "react"
import { Link } from "gatsby"

import { Button } from "semantic-ui-react"
// import * as less from "semantic-ui-less/less"
// import "semantic-ui-less/semantic.less"
import "semantic-ui-less/semantic.less"
import * as CONFIG from "../../madminutes-config"

const defaultProblemGroupOrder = CONFIG.defaultProblemGroupOrder

const displayProblemGroups = (groupOrder: Array<string>) => {
    let items: Array<any> = []
    groupOrder.forEach((group, i) => {
        items.push(<div>{group}</div>)
    })
    return items
}

const ProblemGroups = () => (
    <div>
        {displayProblemGroups(defaultProblemGroupOrder)}
    </div>
)

export default ProblemGroups
