import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

type DialogsItemPropsType = {
  name: string;
  id: string;
};
type MessegesPropsType = {
  message: string;
};

const DialogsItem = (props: DialogsItemPropsType) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Messages = (props: MessegesPropsType) => {
  return <div className={s.message}>{props.message}</div>;
};

export const Dialogs = () => {
  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          <DialogsItem name="Dimych" id="1" />
          <DialogsItem name="Sveta" id="2" />
          <DialogsItem name="Andrey" id="3" />
          <DialogsItem name="Sasha" id="4" />
          <DialogsItem name="Viktor" id="5" />
        </div>
        <div className={s.messages}>
          <Messages message="Hi" />
          <Messages message="How are you?" />
          <Messages message="Yo" />
        </div>
      </div>
    </>
  );
};
