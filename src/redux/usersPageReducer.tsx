import { v1 } from "uuid";

export type ActionsType =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>;

export type LocationType = {
  city: string;
  country: string;
};

export type UsersType = {
  id: string;
  photoUrl: string;
  followed: boolean;
  fullName: string;
  status: string;
  location: LocationType;
};

export type Users = {
  users: UsersType[];
};
export type InitialStateType = Users;

let initialState: InitialStateType = {
  users: [
    {
      id: v1(),
      photoUrl:
        "https://static.wikia.nocookie.net/future-fight/images/5/55/Nova%28RR%29.jpg",
      followed: false,
      fullName: "Nova",
      status: "Andromeda Galaxy open door",
      location: { city: "Nebula", country: "Messier" },
    },
    {
      id: v1(),
      photoUrl:
        "https://static.wikia.nocookie.net/ultimate-marvel-cinematic-universe/images/6/64/Super_Skrull_Raf_Art.jpg",
      followed: true,
      fullName: "krull",
      status: "Cygnus A open door",
      location: { city: "Pegasus", country: "Northern Cross" },
    },
  ],
};

export const usersPageReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.usersId ? { ...u, followed: true } : u
        ),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.usersId ? { ...u, followed: false } : u
        ),
      };
    case "SET-USERS":
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (usersId: string) => {
  return {
    type: "FOLLOW",
    usersId: usersId,
  } as const;
};
export const unfollowAC = (usersId: string) => {
  console.log("reduser unfollow");
  return {
    type: "UNFOLLOW",
    usersId: usersId,
  } as const;
};
export const setUsersAC = (users: UsersType[]) => {
  return {
    type: "SET-USERS",
    users: users,
  } as const;
};
