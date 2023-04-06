export type ActionsType =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>;

export type PhotosType = {
  small: string;
  large: string;
};

export type UsersType = {
  id: number;
  uniqueUrlName: string;
  followed: boolean;
  name: string;
  status: string;
  photos: PhotosType;
};

export type Users = {
  users: UsersType[];
};
export type InitialStateType = Users;

let initialState: InitialStateType = {
  users: []
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

export const followAC = (usersId: number) => {
  return {
    type: "FOLLOW",
    usersId: usersId,
  } as const;
};
export const unfollowAC = (usersId: number) => {
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
