import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthMe } from "../../redux/authReducer";
import { RootStateType } from "../../redux/reduxStore";

type MapDispatchToPropsType = {
  setAuthMe: (id: string, login: string, email: string) => void;
};
type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};

type OwnType = MapDispatchToPropsType & MapStateToPropsType;
class HeaderContainer extends React.Component<OwnType> {
  componentDidMount(): void {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        // debugger;
        if (res.data.resultCode === 0) {
          let { id, login, email } = res.data.data;
          this.props.setAuthMe(id, login, email);
        }
      });
  }

  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.data.isAuth,
    login: state.auth.data.login,
  };
};

export default connect(mapStateToProps, { setAuthMe })(HeaderContainer);
