import React from "react"
import InterviewerImage from "components/atoms/InterviewerImage"
import InterviewPanelButton from "components/atoms/InterviewPanelButton"
import { makeStyles } from "@material-ui/core/styles"
import {
  INTERVIEW_START_BUTTON_SIZE,
  BOTTOM_NAVIGATION_HEIGHT
} from "utils/partsSize"

const BUTTON_SIZE = `${INTERVIEW_START_BUTTON_SIZE / 2}px`

const useStyles = makeStyles(() => ({
  button: {
    bottom: `${BOTTOM_NAVIGATION_HEIGHT + 20}px`,
    left: `calc( 50vw - ${BUTTON_SIZE})`,
    position: "absolute"
  }
}))

const InterviewPanel = () => {
  const classes = useStyles()

  return (
    <div>
      <InterviewerImage />
      <div className={classes.button}>
        <InterviewPanelButton>面接開始</InterviewPanelButton>
      </div>
    </div>
  )
}

export default InterviewPanel
