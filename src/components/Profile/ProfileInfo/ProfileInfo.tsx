import { ProfileUserPageType } from "../../../redux/state";
import { Preloader } from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";

type ProfileInfoPropsType = {
  profile: ProfileUserPageType | null;
};

const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <>
      <div>
        <div>
          <img
            src="https://static.scientificamerican.com/sciam/cache/file/5FE5FD06-AA07-43DE-9AF48B96EEDCF063_source.jpg"
            alt=""
            width={700}
          />
        </div>
        <img src={props.profile.photos.large}/>
        <div className={s.discriptionBlock}>ava</div>
      </div>
    </>
  );
};

export default ProfileInfo;
