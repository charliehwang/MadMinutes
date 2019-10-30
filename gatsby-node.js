/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

// import path from "path"
// import * as path from "path"

exports.onCreateWebpackConfig = ({ actions }) => {
  // const path = import(“path”);
  // const path = require(“path”);

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "../../theme.config$": path.join(
          __dirname,
          "src/semantic/theme.config"
        ),
        // "../../theme.config$": "../../../../src/semantic/theme.config",
        // "../../theme.config$":
        // "/Volumes/Tree/Projects/JS/madminutes/src/semantic/theme.config",
        // "assets/fonts": "../../assets/fonts",
      },
    },
  })
}
