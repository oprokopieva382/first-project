import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootStateType } from "../../redux/reduxStore";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  UsersType,
} from "../../redux/usersPageReducer";
import { Users } from "./Users";

let mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    follow: (usersId: string) => {
      dispatch(followAC(usersId));
    },
    unfollow: (usersId: string) => {
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
)(Users);
