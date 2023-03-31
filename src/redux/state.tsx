import { dialogsPageReducer, sendMessageAC, updateNewMessageBodyAC } from "./dialogsPageReducer";
import { addPostAC, profilePageReducer, updateNewPostTextAC } from "./profilePageReducer";
import { sidebarReducer } from "./sidebarReducer";

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
  newMessageBody: string;
};
export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
};

export type StoreType = {
  _state: RootStateType;
  _rerender: () => void;
  subscribe: (observer: () => void) => void;
  getState: () => void;
  dispatch: (action: ActionsType) => void;
};

export type ActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof sendMessageAC>;

const store: StoreType = {
  _state: {
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
        { message: "Hey Alpha.", id: 1 },
        {
          message: "Hey. There is rain of comets on the way to Pandora?",
          id: 2,
        },
        { message: "Thanks for let me know.", id: 3 },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _rerender() {
    console.log("state changed");
  },
  subscribe(observer: () => void) {
    this._rerender = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {

this._state = profilePageReducer(this._state, action);
this._state = dialogsPageReducer(this._state, action);
this._state = sidebarReducer(this._state, action);

  
      this._rerender();
    }
  }


export default store;
