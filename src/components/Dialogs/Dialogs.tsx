import {
  DialogsDataType,
  MessagesDataType,
} from "../../redux/state";
import { DialogsItem } from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import { Messages } from "./Message/Message";

type DialogsType = {
  dialogsData: DialogsDataType[];
  messagesData: MessagesDataType[];
};

export const Dialogs = (props: DialogsType) => {
  let dialogs = props.dialogsData.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messages = props.messagesData.map((m) => <Messages message={m} />);
  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogs}</div>
        <div className={s.messages}>{messages}</div>
      </div>
    </>
  );
};
