import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import EditListTextField from "components/atoms/EditListTextField"

const useStyles = makeStyles(() => ({
  card: {
    boxShadow: "none"
  }
}))

type EditListCardProps = {
  children?: never
}

const EditListCard: React.FC<EditListCardProps> = () => {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.card}>
        <EditListTextField />
      </Card>
    </>
  )
}

export default EditListCard
