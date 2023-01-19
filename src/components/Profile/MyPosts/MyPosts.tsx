import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

export type MyPostsType = {
  message: string;
  id: number;
  likesCount: number;
};

const MyPosts = (props: MyPostsType) => {
  let postDate = [
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
  ];

  let posts = postDate.map((p) => (
    <Posts message={p.message} likesCount={p.likesCount} id={p.id} />
  ));
  return (
    <div>
      <div className={s.postBlock}>My posts</div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>

      <div className={s.posts}>New Post</div>
      {posts}
    </div>
  );
};

export default MyPosts;
