import { connect } from "react-redux";
import { RootStateType } from "../../redux/reduxStore";
import {
  follow,
  followThunk,
  getUserThunk,
  setCurrentPage,
  unfollow,
  unfollowThunk,
  UsersType,
} from "../../redux/usersPageReducer";
import React from "react";
import { UsersFuncComponent } from "./UsersFuncComponent";
import {FollowingUsers} from "../../redux/usersPageReducer";

type UsersPropsType = {
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  users: UsersType[];
  followingInProgress: FollowingUsers;
  follow: (usersId: number) => void;
  unfollow: (usersId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  getUserThunk: (currentPage: number, pageSize: number) => void;
  followThunk: (id: number) => void;
  unfollowThunk: (id: number) => void;
};

export class UsersClass extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.getUserThunk(this.props.currentPage, this.props.pageSize);
     }
  onPageChange = (p: number) => {
    // this.props.setCurrentPage(p);
    // this.props.setLoading(true);
    // usersAPI.getUsers(p, this.props.pageSize).then((data) => {
    //   this.props.setLoading(false);
    //   this.props.setUsers(data.items);
    // });
    this.props.getUserThunk(p, this.props.pageSize);
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
        followingInProgress={this.props.followingInProgress}
        followThunk={this.props.followThunk}
        unfollowThunk={this.props.unfollowThunk}
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
    followingInProgress: state.usersPage.followingInProgress
  };
};

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUserThunk,
  followThunk,
  unfollowThunk
})(UsersClass);
