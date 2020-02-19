import React from "react"
import Header from "containers/organisms/Header"
import InterviewPanel from "containers/organisms/InterviewPanel"
import BottomNavigation from "containers/organisms/BottomNavigation"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

const bottomNavigationHeight = "56px"
const appBarHeight = "64px"

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    gridTemplateRows: `${appBarHeight} auto ${bottomNavigationHeight}`,
    height: "100vh"
  },

  body: {
    overflow: "auto"
  }
}))

const InterviewSimulator = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <header>
        <Header />
      </header>
      <body className={classes.body}>
        <InterviewPanel />
      </body>
      <div>
        <BottomNavigation />
      </div>
    </div>
  )
}

export default InterviewSimulator
