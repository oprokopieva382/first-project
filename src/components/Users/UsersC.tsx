import { UsersType } from "../../redux/usersPageReducer";
import s from "./Users.module.css";
import axios from "axios";
import Nova from "../../pictures/nova.jpg";
import React from "react";

type UsersPropsType = {
  users: UsersType[];
  follow: (usersId: number) => void;
  unfollow: (usersId: number) => void;
  setUsers: (users: Array<UsersType>) => void;
};

export class UsersC extends React.Component<UsersPropsType> {
  // constructor(props: UsersPropsType) {
  //   super(props);
  //    }

  componentDidMount(): void {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small !== null ? u.photos.small : Nova}
                  alt="imgHero"
                  className={s.usersPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

//   return (
//     <div>
//       <button onClick={getUsers}>Get Users</button>
//       {props.users.map((u) => (
//         <div key={u.id}>
//           <span>
//             <div>
//               <img
//                 src={u.photos.small !== null ? u.photos.small : Nova}
//                 alt="imgHero"
//                 className={s.usersPhoto}
//               />
//             </div>
//             <div>
//               {u.followed ? (
//                 <button
//                   onClick={() => {
//                     props.unfollow(u.id);
//                   }}
//                 >
//                   Unfollow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     props.follow(u.id);
//                   }}
//                 >
//                   Follow
//                 </button>
//               )}
//             </div>
//           </span>
//           <span>
//             <div>{u.name}</div>
//             <div>{u.status}</div>
//           </span>
//           <span>
//             <div>{"u.location.country"}</div>
//             <div>{"u.location.city"}</div>
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };
