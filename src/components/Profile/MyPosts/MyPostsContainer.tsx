import { ChangeEvent } from "react";
import {
  addPostAC,
  updateNewPostTextAC,
} from "../../../redux/profilePageReducer";
import { ActionsType, MyPostsType } from "../../../redux/state";
import MyPosts from "./MyPosts";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

type MyPostsComponentType = {
  profilePage: MyPostsType[];
  dispatch: (action: ActionsType) => void;
  newPostText: string;
};

const MyPostsContainer = (props: MyPostsComponentType) => {
  const addPost = () => {
    props.dispatch(addPostAC(props.newPostText));
    //props.addPost(props.newPostText);
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.currentTarget.value;

    console.log(e.currentTarget.value);
    props.dispatch(updateNewPostTextAC(newText));
  };

  let posts = props.profilePage.map((p) => (
    <Posts key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />
  ));

  console.log(props.newPostText);

  return (
   <MyPosts/>
  );
};

export default MyPostsContainer;
