import React from "react"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(2)
  }
}))

const InterviewPanelButton: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <IconButton
      edge="start"
      className={classes.button}
      color="inherit"
      aria-label="Menu"
    >
      {children}
    </IconButton>
  )
}

export default InterviewPanelButton
