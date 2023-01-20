import {  MessagesDataType } from "../../../redux/state";
import s from "./../Dialogs.module.css";


export const Messages = (props: { message: MessagesDataType }) => {
  return <div className={s.message}>{props.message.message}</div>;
};
