import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = () => {
  const message1: string = "Hi, how are you?";
  const message2: string = "It is my first post";
  const likesCount1: number = 6;
  const likesCount2: number = 8;
  return (
    <>
      <div>My posts</div>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>New Post</div>
      <Posts message={message1} likesCount={likesCount1} />
      <Posts message={message2} likesCount={likesCount2} />
    </>
  );
};

export default MyPosts;
