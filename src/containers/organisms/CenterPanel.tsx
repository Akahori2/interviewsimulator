import React from "react"
import { bindActionCreators, Action, Dispatch } from "redux"
import { connect } from "react-redux"
import { CombineState as CombineStateProp } from "reducers/"

import { INTERVIEW_PANEL } from "utils/partsName"
import { pushBottomNaviButton as actions } from "actions/"
import InterviewPanel from "./InterviewPanel"
import EditPanel from "./EditPanel"

interface CenterPanelProps {
  currentPanel: string
}

const CenterPanel: React.FC<CenterPanelProps> = ({ currentPanel }) => {
  return (
    <>{currentPanel === INTERVIEW_PANEL ? <InterviewPanel /> : <EditPanel />}</>
  )
}

const mapStateToProps = (state: CombineStateProp) => ({
  currentPanel: state.displayState.currentPanel
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterPanel)
