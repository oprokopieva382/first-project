import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPosts message={""} id={0} likesCount={0} />
      </div>
    </>
  );
};

export default Profile;
