import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { StoreType } from "./redux/reduxStore";

type AppPropsType = {
  store: StoreType;
};

const App: React.FC<AppPropsType> = (props) => {
  const state = props.store.getState();
  console.log(state);

  const dispatch = props.store.dispatch;

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
                messagesData={state.dialogsPage.messagesData}
                dialogsData={state.dialogsPage.dialogsData}
                dispatch={dispatch}
                newMessageBody={state.dialogsPage.newMessageBody}
              />
            )}
          ></Route>
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
                profilePage={state.profilePage.postDate}
                newPostText={state.profilePage.newPostText}
                dispatch={dispatch}
              />
            )}
          ></Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
