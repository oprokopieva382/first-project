export type ActionsType =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof setLoadingAC>;

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
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};
export type InitialStateType = Users;

let initialState: InitialStateType = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false
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
        users: [...action.users, ...state.users],
      };
    case "SET-CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET-TOTAL-USERS-COUNT":
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case "IS-LOADING":
      return {
        ...state,
        isFetching: action.loading,
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
export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage,
  } as const;
};
export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    totalCount,
  } as const;
};
export const setLoadingAC = (loading: boolean) => {
  return {
    type: "IS-LOADING",
    loading,
  } as const;
};
