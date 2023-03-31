import { ActionsType, MyPostsType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileType = {
  profilePage: MyPostsType[];
  newPostText: string;
  dispatch: (action: ActionsType) => void;
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPosts
          profilePage={props.profilePage}
          newPostText={props.newPostText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Profile;
