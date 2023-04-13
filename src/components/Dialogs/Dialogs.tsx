import { ChangeEvent } from "react";
import { DialogsDataType, MessagesDataType } from "../../redux/state";
import { DialogsItem } from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import { Messages } from "./Message/Message";

type DialogsType = {
  dialogsData: DialogsDataType[];
  messagesData: MessagesDataType[];
  newMessageBody: string;
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
};

export const Dialogs = (props: DialogsType) => {
  let dialogs = props.dialogsData.map((d) => (
    <DialogsItem key={d.id} name={d.name} id={d.id} />
  ));
  let messages = props.messagesData.map((m) => (
    <Messages message={m} key={m.id} />
  ));

  let addMessage = () => {
    props.sendMessage();
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value;
    props.updateNewMessageBody(body);
  };

  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogs}</div>
        <div className={s.messages}>{messages}</div>
      </div>
      <textarea
        value={props.newMessageBody}
        onChange={onChangeHandler}
      ></textarea>
      <button onClick={addMessage}>Send</button>
    </>
  );
};
