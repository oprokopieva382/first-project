import { ActionsType, MyPostsType, RootStateType } from "./state";

export const profilePageReducer = (
  state: RootStateType,
  action: ActionsType
): RootStateType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: MyPostsType = {
        message: action.postText,
        id: new Date().getTime(),
        likesCount: 8,
      };
      state.profilePage.postDate.push(newPost);
      state.profilePage.newPostText = "";
      return state;
    case "UPDATE-NEW-POST-TEXT":
      state.profilePage.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostAC = (postText: string) => {
  return {
    type: "ADD-POST",
    postText: postText,
  } as const;
};
export const updateNewPostTextAC = (newText: string) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText,
  } as const;
};