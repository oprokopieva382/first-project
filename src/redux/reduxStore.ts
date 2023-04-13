import { usersPageReducer } from './usersPageReducer';
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilePageReducer } from "./profilePageReducer";
import { sidebarReducer } from "./sidebarReducer";
import { authReducer } from './authReducer';
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sidebar: sidebarReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

export let store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type StoreType = typeof store
export type RootStateType = ReturnType<typeof rootReducer>;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
