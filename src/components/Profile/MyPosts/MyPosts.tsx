import { ChangeEvent } from "react";
import { MyPostsType } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

type MyPostsComponentType = {
  profilePage: MyPostsType[];
  updateNewPostText: (newText: string) => void;
  addPost: () => void;
  newPostText: string;
};

const MyPosts = (props: MyPostsComponentType) => {
  const addPost = () => {
    props.addPost();
  };

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newText = e.currentTarget.value;
    props.updateNewPostText(newText);
    };

  let posts = props.profilePage.map((p) => (
    <Posts key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} />
  ));

  return (
    <>
      <div>
        <div className={s.postBlock}>My posts</div>
        <h3>My posts</h3>
        <div>
          <textarea value={props.newPostText} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>New Post</div>
        {posts}
      </div>
    </>
  );
};

export default MyPosts;
