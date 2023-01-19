import s from "./../Dialogs.module.css";


type MessagesDataType = {
  message: string;
  id: number;
};

export const Messages = (props: MessagesDataType) => {
  return <div className={s.message}>{props.message}</div>;
};


