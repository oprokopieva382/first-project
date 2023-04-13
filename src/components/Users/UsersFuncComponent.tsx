import { NavLink } from "react-router-dom";
import Nova from "../../pictures/nova.jpg";
import { FollowingUsers, UsersType } from "../../redux/usersPageReducer";
import { Preloader } from "../Preloader/Preloader";
import s from "./Users.module.css";

type UsersFuncComponentPropsType = {
  users: UsersType[];
  follow: (usersId: number) => void;
  unfollow: (usersId: number) => void;
  onPageChange: (p: number) => void;
  followingInProgress: FollowingUsers;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followThunk: (id: number) => void
  unfollowThunk: (id: number) => void
};

export const UsersFuncComponent = (props: UsersFuncComponentPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {props.isFetching === true ? <Preloader /> : null}
      <span>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.onPageChange(p);
              }}
              className={props.currentPage === p ? s.selectedPage : ""}
            >
              {p}
            </span>
          );
        })}
      </span>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : Nova}
                  alt="imgHero"
                  className={s.usersPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                     props.unfollowThunk(u.id);
                    // props.toggleFollowingProgress(true, u.id);
                    // usersAPI.unfollowUser(u.id).then((res) => {
                    //   if (res.data.resultCode === 0) {
                    //     props.unfollow(u.id);
                    //   }
                    //   props.toggleFollowingProgress(false, u.id);
                    // });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunk(u.id);
                    // props.toggleFollowingProgress(true, u.id);
                    //   usersAPI.followUser(u.id).then((res) => {
                    //   if (res.data.resultCode === 0) {
                    //     props.follow(u.id);
                    //   }
                    //   props.toggleFollowingProgress(false, u.id);
                    // });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};
