import React from "react";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://static.scientificamerican.com/sciam/cache/file/5FE5FD06-AA07-43DE-9AF48B96EEDCF063_source.jpg"
          alt=""
        />
      </div>
      <div>ava</div>
      <div>
        My posts
        <div className={s.posts}>New Post</div>
        <div>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
