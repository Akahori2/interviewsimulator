// import { Action } from "redux"

export enum ActionTypes {
  PUSH_BOTTOM_NAVI_BUTTON = "DISPLAY_STATE/PUSH_BOTTOM_NAVI_BUTTON"
}

// export interface PushBottomNaviButtonAction {
//   type: ActionTypes.PUSH_BOTTOM_NAVI_BUTTON,
//   pushedPanelName: string
// }

// export interface CombineAction {
//   pushBottomNaviButton: PushBottomNaviButtonAction
// }

export interface DisplayStateAction {
  type: ActionTypes.PUSH_BOTTOM_NAVI_BUTTON
  pushedPanelName: string
}

export const pushBottomNaviButton = (
  pushedPanelName: string
): DisplayStateAction => ({
  type: ActionTypes.PUSH_BOTTOM_NAVI_BUTTON,
  pushedPanelName
})
