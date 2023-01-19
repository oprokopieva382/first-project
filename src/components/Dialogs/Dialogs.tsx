import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

type DialogsDataType = {
  name: string;
  id: number;
};

type MessegesDataType = {
  message: string;
  id: number;
};

const DialogsItem = (props: DialogsDataType) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Messages = (props: MessegesDataType) => {
  return <div className={s.message}>{props.message}</div>;
};

export const Dialogs: React.FC<DialogsDataType> = (props) => {
  let dialogsData = [
    { name: "Darna", id: 1 },
    { name: "Alpha", id: 2 },
    { name: "Zeratul", id: 3 },
    { name: "Kirby", id: 4 },
    { name: "Kreng", id: 5 },
  ];

  let messagesData = [
    { message: "Hey", id: 1 },
    { message: "There is rain of comets on the way to Pandora?", id: 2 },
    { message: "Thanks for let me know", id: 3 },
  ];

  let dialogs = dialogsData.map((d) => <DialogsItem name={d.name} id={d.id} />);
  let messages = messagesData.map((m) => (
    <Messages message={m.message} id={m.id} />
  ));
  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogs}</div>
        <div className={s.messages}>{messages}</div>
      </div>
    </>
  );
};
