import { MyPostsType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileType = {
  postDate: MyPostsType[];
  addPost: (postText: string) => void;
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPosts postDate={props.postDate} addPost={props.addPost}/>
      </div>
    </div>
  );
};

export default Profile;
