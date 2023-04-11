import { connect } from "react-redux";
import { RootStateType } from "../../redux/reduxStore";
import {
  follow,
  setCurrentPage,
  setLoading,
  setTotalUsersCount,
  setUsers,
  unfollow,
  UsersType,
} from "../../redux/usersPageReducer";
import React from "react";
import { UsersFuncComponent } from "./UsersFuncComponent";
import axios from "axios";

type UsersPropsType = {
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  users: UsersType[];
  follow: (usersId: number) => void;
  unfollow: (usersId: number) => void;
  setUsers: (users: Array<UsersType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  setLoading: (loading: boolean) => void;
};

export class UsersClass extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.setLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setLoading(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }
  onPageChange = (p: number) => {
    this.props.setCurrentPage(p);
    this.props.setLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setLoading(false);
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    return (
      <UsersFuncComponent
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        isFetching={this.props.isFetching}
      />
    );
  }
}

let mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     follow: (usersId: number) => {
//       dispatch(followAC(usersId));
//     },
//     unfollow: (usersId: number) => {
//       dispatch(unfollowAC(usersId));
//     },
//     setUsers: (users: UsersType[]) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalUsersCount: (totalCount: number) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     setLoading: (loading: boolean) => {
//       dispatch(setLoadingAC(loading));
//     },
//   };
// };

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setLoading,
})(UsersClass);
