import React from "react"
import Header from "containers/organisms/Header"
import CenterPanel from "containers/organisms/CenterPanel"
import BottomNavigation from "containers/organisms/BottomNavigation"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import store from "store/"
import { Provider } from "react-redux"
import { BOTTOM_NAVIGATION_HEIGHT, APP_BAR_HEIGHT } from "utils/partsSize"

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    gridTemplateRows: `${`${APP_BAR_HEIGHT}px`} auto ${`${BOTTOM_NAVIGATION_HEIGHT}px`}`,
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
