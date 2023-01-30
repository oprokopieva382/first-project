import { rerenderEntireTree } from "../render";

export type MyPostsType = {
  message: string;
  id: number;
  likesCount: number;
};

export type DialogsDataType = {
  name: string;
  id: number;
};
export type MessagesDataType = {
  message: string;
  id: number;
};

export type ProfilePageType = {
  postDate: MyPostsType[];
  newPostText: string;
};
export type DialogPageType = {
  dialogsData: DialogsDataType[];
  messagesData: MessagesDataType[];
};
export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
};

let state: RootStateType = {
  profilePage: {
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
  },
  dialogsPage: {
    dialogsData: [
      { name: "Darna", id: 1 },
      { name: "Alpha", id: 2 },
      { name: "Zeratul", id: 3 },
      { name: "Kirby", id: 4 },
      { name: "Kreng", id: 5 },
    ],
    messagesData: [
      { message: "Hey", id: 1 },
      { message: "There is rain of comets on the way to Pandora?", id: 2 },
      { message: "Thanks for let me know", id: 3 },
    ],
  },
  sidebar: {},
};
export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export let addPost = (postText: string) => {
  let newPost: MyPostsType = {
    message: postText,
    id: new Date().getTime(),
    likesCount: 8,
  };
  state.profilePage.postDate.push(newPost);
  rerenderEntireTree(state);
};

export default state;
