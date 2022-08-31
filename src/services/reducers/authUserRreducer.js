import { LOGIN, REGISTER } from "../actions/AUTH_USER";

const defaultState = {
  user: {
    name: "",
    email: "",
  },
  accessToken: "",
  refreshToken: "",
  isAuthenticated: false,
};

export const authUserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.user.email,
          name: action.payload.user.name,
        },
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };

    case LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.user.email,
          name: action.payload.user.name,
        },
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
      };

    default:
      return state;
  }
};

export const registerUserAction = (payload) => ({
  type: REGISTER,
  payload,
});

export const loginUserAction = (payload) => ({
  type: LOGIN,
  payload,
});
