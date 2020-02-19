import React from "react"
import { connect } from "react-redux"
// import { DisplayState as DisplayStateProp } from "reducers/displayStateReducer"
import { CombineState as CombineStateProp } from "reducers/"
import { pushBottomNaviButton } from "actions/"
import { Action, Dispatch } from "redux"
// import { makeStyles } from "@material-ui/core/styles"
import MuiBottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import RestoreIcon from "@material-ui/icons/Restore"
import FavoriteIcon from "@material-ui/icons/Favorite"
// import { DisplayStateAction as DisplayStateActionProps } from "actions/"
import { INTERVIEW_PANEL, EDIT_PANEL } from "utils/partsName"

// const useStyles = makeStyles({
// spacer: {
//   marginRight: "10vw"
// }
// })

interface BottomNavigationProps {
  currentPanel: string
  pushBottomNaviButtonAction: (pushedPanelName: string) => void
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentPanel,
  pushBottomNaviButtonAction
}) => {
  // const classes = useStyles()
  // const [value, setValue] = React.useState(0)

  return (
    <MuiBottomNavigation
      value={currentPanel}
      onChange={(event, newValue) => {
        pushBottomNaviButtonAction(newValue)
      }}
      showLabels
    >
      <BottomNavigationAction
        label="面接"
        value={INTERVIEW_PANEL}
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="編集"
        value={EDIT_PANEL}
        icon={<FavoriteIcon />}
      />
    </MuiBottomNavigation>
  )
}

const mapStateToProps = (state: CombineStateProp) => ({
  currentPanel: state.displayState.currentPanel
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  pushBottomNaviButtonAction: (pushedPanelName: string) =>
    dispatch(pushBottomNaviButton(pushedPanelName))
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation)
