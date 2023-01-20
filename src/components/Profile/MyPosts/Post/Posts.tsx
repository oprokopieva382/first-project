
import { MyPostsType } from "../../../../redux/state";
import s from "./Posts.module.css";


const Posts = (props: MyPostsType) => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Artist%27s_impression_of_the_Milky_Way_%28updated_-_annotated%29.jpg/290px-Artist%27s_impression_of_the_Milky_Way_%28updated_-_annotated%29.jpg"
          alt=""
        />
        {props.message}
        <div>
          <span>{props.likesCount} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
