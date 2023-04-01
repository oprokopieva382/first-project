import { ActionsType, SidebarType } from "./state";

type InitialStateType = SidebarType;
let initialState: InitialStateType = {}

export const sidebarReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  return state;
};
