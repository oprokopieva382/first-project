import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <>
      <div>
        <div className={s.content}>
          <img
            src="https://static.scientificamerican.com/sciam/cache/file/5FE5FD06-AA07-43DE-9AF48B96EEDCF063_source.jpg"
            alt=""
          />
        </div>
        <div>ava</div>
        <MyPosts />
      </div>
    </>
  );
};

export default Profile;
