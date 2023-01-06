import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
const MyPosts = () => {
  return (
    <>
      <div>My posts</div>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>New Post</div>
      <Posts />
      <Posts />
      <Posts />
    </>
  );
};

export default MyPosts;
