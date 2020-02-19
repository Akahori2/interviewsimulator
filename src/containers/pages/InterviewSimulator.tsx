import React from "react"
import Header from "containers/organisms/Header"
import CenterPanel from "containers/organisms/CenterPanel"
import BottomNavigation from "containers/organisms/BottomNavigation"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import store from "store/"
import { Provider } from "react-redux"

const BOTTOM_NAVIGATION_HEIGHT = "56px"
const APP_BAR_HEIGHT = "64px"

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    gridTemplateRows: `${APP_BAR_HEIGHT} auto ${BOTTOM_NAVIGATION_HEIGHT}`,
    height: "100vh"
  },

  center: {
    overflow: "auto"
  }
}))

const InterviewSimulator = () => {
  const classes = useStyles()

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <CssBaseline />
        <header>
          <Header />
        </header>
        <main className={classes.center}>
          <CenterPanel />
        </main>
        <div>
          <BottomNavigation />
        </div>
      </div>
    </Provider>
  )
}

export default InterviewSimulator
