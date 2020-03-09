import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MuiAppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"

import HeaderIcon from "components/atoms/HeaderIcon"
import Title from "components/atoms/Title"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },

  bar: {
    boxShadow: "none"
  }
}))

type AppBarProps = {
  children?: never
}

const AppBar: React.FC<AppBarProps> = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MuiAppBar position="static" className={classes.bar}>
        <Toolbar>
          <Title>面接シミュレーター</Title>
          <HeaderIcon>
            <MenuIcon />
          </HeaderIcon>
        </Toolbar>
      </MuiAppBar>
    </div>
  )
}

export default AppBar
