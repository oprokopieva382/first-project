import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { StoreType } from "./redux/state";

type AppPropsType = {
  store: StoreType;
};

const App: React.FC<AppPropsType> = (props) => {
  //const state = props.store.getState();
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/dialogs"
            render={() => (
              <Dialogs
                messagesData={props.store._state.dialogsPage.messagesData}
                dialogsData={props.store._state.dialogsPage.dialogsData}
                dispatch={props.store.dispatch.bind(props.store)}
                newMessageBody={props.store._state.dialogsPage.newMessageBody}
              />
            )}
          ></Route>
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.store._state.profilePage.postDate}
                newPostText={props.store._state.profilePage.newPostText}
                dispatch={props.store.dispatch.bind(props.store)}
              />
            )}
          ></Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
