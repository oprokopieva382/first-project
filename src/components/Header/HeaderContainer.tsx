import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserDataThunk } from "../../redux/authReducer";
import { RootStateType } from "../../redux/reduxStore";

type MapDispatchToPropsType = {
  getAuthUserDataThunk: () => void;
};
type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};

type OwnType = MapDispatchToPropsType & MapStateToPropsType;
class HeaderContainer extends React.Component<OwnType> {
  componentDidMount(): void {
    this.props.getAuthUserDataThunk();
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

export default connect(mapStateToProps, { getAuthUserDataThunk })(
  HeaderContainer
);
