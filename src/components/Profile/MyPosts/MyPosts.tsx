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
      <Posts
        message={postDate[0].message}
        likesCount={postDate[0].likesCount}
        id={postDate[0].id}
      />
      <Posts
        message={postDate[1].message}
        likesCount={postDate[1].likesCount}
        id={postDate[1].id}
      />
    </div>
  );
};

export default MyPosts;
