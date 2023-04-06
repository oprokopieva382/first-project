import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootStateType } from "../../redux/reduxStore";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  UsersType,
} from "../../redux/usersPageReducer";
import { UsersC } from "./UsersC";

let mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    follow: (usersId: number) => {
      dispatch(followAC(usersId));
    },
    unfollow: (usersId: number) => {
      console.log("dispatch unfollow");
      dispatch(unfollowAC(usersId));
    },
    setUsers: (users: UsersType[]) => {
      dispatch(setUsersAC(users));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersC);
