import { NavLink } from "react-router-dom";
import Nova from "../../pictures/nova.jpg";
import { UsersType } from "../../redux/usersPageReducer";
import { Preloader } from "../Preloader/Preloader";
import s from "./Users.module.css";

type UsersFuncComponentPropsType = {
  users: UsersType[];
  follow: (usersId: number) => void;
  unfollow: (usersId: number) => void;
  onPageChange: (p: number) => void;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
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
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
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
