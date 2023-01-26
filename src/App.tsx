import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import  { addPost, RootStateType } from "./redux/state"

type AppType = {
  state: RootStateType;
  addPost: (postText: string) => void;
};

const App = ({state}: AppType) => {
 
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
              />
            )}
          ></Route>
          <Route
            exact
            path="/profile"
            render={() => <Profile postDate={state.profilePage.postDate} addPost = {addPost}/>}
          ></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
