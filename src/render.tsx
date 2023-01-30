import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost,  RootStateType } from "./redux/state";
import {updateNewPostText} from "./redux/state"

export const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />,
    document.getElementById("root")
  );
};

