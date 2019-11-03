import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { Button } from "semantic-ui-react"
// import * as less from "semantic-ui-less/less"
// import "semantic-ui-less/semantic.less"
import "semantic-ui-less/semantic.less"

import ProblemGroups from "../components/ProblemGroups/ProblemGroups"

const IndexPage = () => (
  <Layout>
    <SEO></SEO>
    {/* <div><Container text style={{ marginTop: "7em" }}></Container></div> */}
    <ProblemGroups />
  </Layout>
)

export default IndexPage
