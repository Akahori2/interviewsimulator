import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  image: {
    maxHeight: "100%",
    objectFit: "cover",
    width: "100%"
  }
}))

type InterviewerImageProps = {
  children?: never
}

const InterviewerImage: React.FC<InterviewerImageProps> = () => {
  const classes = useStyles()

  return (
    <>
      <img src="/ushi.jpg" alt="面接官の画像" className={classes.image} />
    </>
  )
}

export default InterviewerImage
