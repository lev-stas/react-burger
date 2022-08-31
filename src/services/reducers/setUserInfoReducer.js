import {
  FILL_EMAIL,
  REQEST_RESET_PASSWORD,
  FILL_TOKEN,
  FILL_PASSWORD,
  RESET_PASSWORD,
  FILL_NAME,
} from "../actions/SET_USER_INFO";

const defaultState = {
  email: "",
  password: "",
  name: "",
  token: "",
  resetRequestStatus: false,
  resetStatus: false,
};

export const setUserInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILL_EMAIL:
      return { ...state, email: action.payload };
    case REQEST_RESET_PASSWORD:
      return { ...state, resetRequestStatus: action.payload.success };
    case FILL_PASSWORD:
      return { ...state, password: action.payload };
    case FILL_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case RESET_PASSWORD:
      return { ...state, resetStatus: action.payload.success };
    case FILL_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export const fillEmail = (payload) => ({
  type: FILL_EMAIL,
  payload,
});

export const requestResetPassword = (payload) => ({
  type: REQEST_RESET_PASSWORD,
  payload,
});

export const fillPassword = (payload) => ({
  type: FILL_PASSWORD,
  payload,
});

export const fillToken = (payload) => ({
  type: FILL_TOKEN,
  payload,
});

export const resetPassword = (payload) => ({
  type: RESET_PASSWORD,
  payload,
});

export const fillName = (payload) => ({
  type: FILL_NAME,
  payload,
});
