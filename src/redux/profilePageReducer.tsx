import { Dispatch } from "redux";
import { MyPostsType, ProfilePageType, ProfileUserPageType } from "./state";
import { usersAPI } from "../api/api";

export type ActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof setUserProfile>;

type InitialStateType = ProfilePageType;
let initialState: InitialStateType = {
  postDate: [
    {
      message: "Hi Darna, how are you?",
      id: 1,
      likesCount: 12,
    },
    {
      message: "Whats up Alpha, I am good. You?",
      id: 2,
      likesCount: 10,
    },
  ],
  newPostText: "",
  profile: null,
};

export const profilePageReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: MyPostsType = {
        message: state.newPostText,
        id: new Date().getTime(),
        likesCount: 8,
      };
      state.newPostText = "";
      return { ...state, postDate: [newPost, ...state.postDate] };
    case "UPDATE-NEW-POST-TEXT":
      return { ...state, newPostText: action.newText };
    case "SET-USER-PROFILE":
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};
export const updateNewPostTextAC = (newText: string) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText,
  } as const;
};
export const setUserProfile = (profile: ProfileUserPageType) => {
  return {
    type: "SET-USER-PROFILE",
    profile,
  } as const;
};

export const getUserProfile = (userId: string) => {
  return (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then((res) => {
      dispatch(setUserProfile(res.data));
    });
  };
};
