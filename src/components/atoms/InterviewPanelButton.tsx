import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { INTERVIEW_START_BUTTON_SIZE } from "utils/partsSize"

const useStyles = makeStyles(() => ({
  button: {
    width: interview_start_button_size
  }
}))

const InterviewPanelButton: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Button className={classes.button} color="primary" variant="contained">
      {children}
    </Button>
  )
}

export default InterviewPanelButton
