export type ActionsType = ReturnType<typeof setAuthMe>;

export type DataType = {
  id: string | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};
export type AuthMeInitialStateType = {
  data: DataType;
};

let initialState: AuthMeInitialStateType = {
  data: {
    id: null,
    login: null,
    email: null,
    isAuth: false,
  },
};

export const authReducer = (
  state: AuthMeInitialStateType = initialState,
  action: ActionsType
): AuthMeInitialStateType => {
  switch (action.type) {
    case "AUTH-ME":
      return {
        ...state,
        data: { ...action.data, isAuth :true},
      };
    default:
      return state;
  }
};

export const setAuthMe = (id: string, login: string, email: string) => {
  return {
    type: "AUTH-ME",
    data: { id, login, email },
  } as const;
};
