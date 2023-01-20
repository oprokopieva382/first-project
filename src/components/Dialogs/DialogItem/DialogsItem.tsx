import { NavLink } from "react-router-dom";
import { DialogsDataType } from "../../../redux/state";

import s from "./../Dialogs.module.css";


export const DialogsItem = (props: DialogsDataType) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
