import { combineReducers } from "redux"
import displayStateReducer, { DisplayState } from "./displayStateReducer"

const rootReducer = combineReducers({
  displayState: displayStateReducer
})

export interface CombineState {
  displayState: DisplayState
}

export default rootReducer
