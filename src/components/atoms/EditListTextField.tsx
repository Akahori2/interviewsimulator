import React from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  text: {
    marginRight: theme.spacing(2)
  }
}))

type EditListTextFieldProps = {
  children?: never
}

const EditListTextField: React.FC<EditListTextFieldProps> = () => {
  const classes = useStyles()

  return <TextField className={classes.text} />
}

export default EditListTextField
