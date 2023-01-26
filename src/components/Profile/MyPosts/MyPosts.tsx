import React from "react";
import { MyPostsType } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

type MyPostsComponentType = {
  postDate: MyPostsType[];
  addPost: (postText: string) => void;
};

const MyPosts = (props: MyPostsComponentType) => {

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    if (newPostElement.current) {
    props.addPost(newPostElement.current.value);
    newPostElement.current.value = ""
      };
    }
  let posts = props.postDate.map((p) => (
    <Posts message={p.message} likesCount={p.likesCount} id={p.id} />
  ));
  return (
    <>
      <div>
        <div className={s.postBlock}>My posts</div>
        <h3>My posts</h3>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>

        <div className={s.posts}>New Post</div>
        {posts}
      </div>
    </>
  );
};

export default MyPosts;
