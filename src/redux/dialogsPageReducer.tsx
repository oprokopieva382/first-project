import { ActionsType, RootStateType } from "./state";

export const dialogsPageReducer = (
  state: RootStateType,
  action: ActionsType
): RootStateType => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
      state.dialogsPage.newMessageBody = action.body;
      return state;

    case "SEND_MESSAGE":
      let body = state.dialogsPage.newMessageBody;
      state.dialogsPage.newMessageBody = "";
      state.dialogsPage.messagesData.push({ id: 4, message: body });
      return state;
    default:
      return state;
  }
};

export const updateNewMessageBodyAC = (body: string) => {
  return {
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: body,
  } as const;
};
export const sendMessageAC = () => {
  return {
    type: "SEND_MESSAGE",
  } as const;
};