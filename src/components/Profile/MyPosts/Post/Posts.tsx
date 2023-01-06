import React from "react";
import s from "./Posts.module.css";

type PostsPropsType = {
  message: string;
};

const Posts = (props: PostsPropsType) => {
  return (
    <>
      <div className={s.item}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Artist%27s_impression_of_the_Milky_Way_%28updated_-_annotated%29.jpg/290px-Artist%27s_impression_of_the_Milky_Way_%28updated_-_annotated%29.jpg"
          alt=""
        />
        {props.message}
        <div>
          <span>Like</span>
        </div>
      </div>
    </>
  );
};

export default Posts;
