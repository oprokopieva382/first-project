import { UsersType } from "../../redux/usersPageReducer";
import s from "./Users.module.css";

type UsersPropsType = {
  users: UsersType[];
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
};

export const Users = (props: UsersPropsType) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="imgHero" className={s.usersPhoto} />
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};
