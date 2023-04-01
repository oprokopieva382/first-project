import { combineReducers, legacy_createStore } from "redux";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilePageReducer } from "./profilePageReducer";
import { sidebarReducer } from "./sidebarReducer";

const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sidebar: sidebarReducer,
});

export let store = legacy_createStore(rootReducer);
export type StoreType = typeof store
export type RootStateType = ReturnType<typeof rootReducer>;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
