import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/dialogs"
            render={() => <DialogsContainer />}
          ></Route>
          <Route exact path="/profile/:userId?" render={() => <ProfileContainer />}></Route>
          <Route exact path="/users" render={() => <UsersContainer />}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
