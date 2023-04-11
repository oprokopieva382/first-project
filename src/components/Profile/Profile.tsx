import { ProfileUserPageType } from "../../redux/state";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  profile: ProfileUserPageType | null;
};

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
