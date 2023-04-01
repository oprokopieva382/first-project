import { DialogPageType } from "./state";

export type ActionsType =
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof sendMessageAC>;

type InitialStateType = DialogPageType;
let initialState: InitialStateType = {
  dialogsData: [
    { name: "Darna", id: 1 },
    { name: "Alpha", id: 2 },
    { name: "Zeratul", id: 3 },
    { name: "Kirby", id: 4 },
    { name: "Kreng", id: 5 },
  ],
  messagesData: [
    { message: "Hey Alpha.", id: 1 },
    {
      message: "Hey. There is rain of comets on the way to Pandora?",
      id: 2,
    },
    { message: "Thanks for let me know.", id: 3 },
  ],
  newMessageBody: "",
};

export const dialogsPageReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
      state.newMessageBody = action.body;
      return state;

    case "SEND_MESSAGE":
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({ id: 4, message: body });
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
