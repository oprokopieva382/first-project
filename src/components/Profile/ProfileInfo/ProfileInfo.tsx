import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
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
        <div className={s.discriptionBlock}>ava</div>
      </div>
    </>
  );
};

export default ProfileInfo;
