import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
