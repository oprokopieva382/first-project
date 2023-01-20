import { MyPostsType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileType = {
  postDate: MyPostsType[]
}

const Profile = (props: ProfileType) => {
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPosts postDate={props.postDate} />
      </div>
    </>
  );
};

export default Profile;
