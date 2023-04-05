import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";


const App = () => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/dialogs"
            render={() => <DialogsContainer />}
          ></Route>
          <Route exact path="/profile" render={() => <Profile />}></Route>
          <Route exact path="/users" render={() => <UsersContainer />}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
