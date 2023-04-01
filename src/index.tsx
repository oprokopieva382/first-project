import "./index.css";
import ReactDOM from "react-dom";
// import store  from "./redux/state";
import App from "./App";
import { store } from "./redux/reduxStore";




export const rerenderEntireTree = () => {
  ReactDOM.render(
   <App store={store} />, document.getElementById("root"));
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree();
