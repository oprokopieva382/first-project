import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";



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
          <Route exact path="/login" render={() => <Login />}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
