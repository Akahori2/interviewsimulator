import { Reducer } from "redux"
import { ActionTypes, DisplayStateAction } from "actions/"
import { INTERVIEW_PANEL } from "utils/partsName"

const InitialState = {
  displayState: {
    currentPanel: INTERVIEW_PANEL
  }
}

export interface DisplayState {
  currentPanel: string
}

const displayStateReducer: Reducer<DisplayState, DisplayStateAction> = (
  state: DisplayState = InitialState.displayState,
  action: DisplayStateAction
) => {
  switch (action.type) {
    case ActionTypes.PUSH_BOTTOM_NAVI_BUTTON:
      return {
        ...state,
        currentPanel: action.pushedPanelName
      }
    default:
      return state
  }
}

export default displayStateReducer
