import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = () => {
  const message1: string = "Hi, how are you?";
  const message2: string = "It is my first post";
  return (
    <>
      <div>My posts</div>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>New Post</div>
      <Posts message={message1} />
      <Posts message={message2} />
    </>
  );
};

export default MyPosts;
