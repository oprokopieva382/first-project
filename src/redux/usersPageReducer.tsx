import { Dispatch } from "redux";
import { usersAPI } from "../api/api";

export type ActionsType =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof toggleFollowingProgress>;

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

export type FollowingUsers = number[];
export type Users = {
  users: UsersType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: FollowingUsers;
};
export type InitialStateType = Users;

let initialState: InitialStateType = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false,
  followingInProgress: [],
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
    case "TOGGLE-FOLLOWING":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.usersId]
          : state.followingInProgress.filter((id) => id !== action.usersId),
      };

    default:
      return state;
  }
};

export const follow = (usersId: number) => {
  return {
    type: "FOLLOW",
    usersId: usersId,
  } as const;
};
export const unfollow = (usersId: number) => {
  return {
    type: "UNFOLLOW",
    usersId: usersId,
  } as const;
};
export const setUsers = (users: UsersType[]) => {
  return {
    type: "SET-USERS",
    users: users,
  } as const;
};
export const setCurrentPage = (currentPage: number) => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage,
  } as const;
};
export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    totalCount,
  } as const;
};
export const setLoading = (loading: boolean) => {
  return {
    type: "IS-LOADING",
    loading,
  } as const;
};
export const toggleFollowingProgress = (
  isFetching: boolean,
  usersId: number
) => {
  return {
    type: "TOGGLE-FOLLOWING",
    isFetching,
    usersId,
  } as const;
};

export const getUserThunk = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setLoading(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};
export const followThunk = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.followUser(id).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(follow(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};

export const unfollowThunk = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.unfollowUser(id).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(unfollow(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};
