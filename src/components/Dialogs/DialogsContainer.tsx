import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  sendMessageAC,
  updateNewMessageBodyAC,
} from "../../redux/dialogsPageReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Dialogs } from "./Dialogs";

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    newMessageBody: state.dialogsPage.newMessageBody,
    messagesData: state.dialogsPage.messagesData,
    isAuth: state.auth.data.isAuth
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyAC(body));
    },
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
