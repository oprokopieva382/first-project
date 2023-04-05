import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  addPostAC,
  updateNewPostTextAC,
} from "../../../redux/profilePageReducer";
import { RootStateType} from "../../../redux/reduxStore";
import MyPosts from "./MyPosts";


let mapStateToProps = (state: RootStateType) => {
  return {
    newPostText: state.profilePage.newPostText,
    profilePage: state.profilePage.postDate
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    updateNewPostText: (newText: string) => {
      dispatch(updateNewPostTextAC(newText));
    },
  };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);