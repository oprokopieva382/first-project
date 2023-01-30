import { MyPostsType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileType = {
  profilePage: MyPostsType[];
  addPost: (postText: string) => void;
  updateNewPostText: (newText: string) => void;
  newPostText: string;
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPosts
          profilePage={props.profilePage}
          newPostText={props.newPostText}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  );
};

export default Profile;
