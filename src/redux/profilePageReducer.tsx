import { MyPostsType, ProfilePageType } from "./state";

export type ActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>;

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
