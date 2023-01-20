import { MyPostsType } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

type MyPostsComponentType = {
  postDate: MyPostsType[];
};

const MyPosts = (props: MyPostsComponentType) => {
  let posts = props.postDate.map((p) => (
    <Posts message={p.message} likesCount={p.likesCount} id={p.id} />
  ));
  return (
    <div>
      <div className={s.postBlock}>My posts</div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>

      <div className={s.posts}>New Post</div>
      {posts}
    </div>
  );
};

export default MyPosts;
