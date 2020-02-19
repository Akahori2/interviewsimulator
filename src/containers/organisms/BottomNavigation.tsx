import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MuiBottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import RestoreIcon from "@material-ui/icons/Restore"
import FavoriteIcon from "@material-ui/icons/Favorite"
// import LocationOnIcon from "@material-ui/icons/LocationOn"

const useStyles = makeStyles({
  spacer: {
    marginRight: "10vw"
  }
})

function BottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <MuiBottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
    >
      <BottomNavigationAction label="面接" icon={<RestoreIcon />} />
      <span className={classes.spacer} />
      <BottomNavigationAction label="編集" icon={<FavoriteIcon />} />
    </MuiBottomNavigation>
  )
}

export default BottomNavigation
