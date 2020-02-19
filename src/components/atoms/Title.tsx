import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  }
}))

const Title: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Typography variant="h6" className={classes.title}>
      {children}
    </Typography>
  )
}

export default Title
