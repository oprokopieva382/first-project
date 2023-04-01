import { ChangeEvent } from "react";
import {
  sendMessageAC,
  updateNewMessageBodyAC,
} from "../../redux/dialogsPageReducer";
import {
  ActionsType,
  DialogsDataType,
  MessagesDataType,
} from "../../redux/state";
import { DialogsItem } from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import { Messages } from "./Message/Message";

type DialogsType = {
  dialogsData: DialogsDataType[];
  messagesData: MessagesDataType[];
  newMessageBody: string;
  dispatch: (action: ActionsType) => void;
};

export const Dialogs = (props: DialogsType) => {
  let dialogs = props.dialogsData.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let messages = props.messagesData.map((m) => <Messages message={m} />);

  let addMessage = () => {
    props.dispatch(sendMessageAC());
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value;

    props.dispatch(updateNewMessageBodyAC(body));
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
