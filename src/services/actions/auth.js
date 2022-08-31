import { API } from "../../utils/constants";
import { checkRespose, setCookie } from "../../utils/utils";
import {
  loginUserAction,
  registerUserAction,
} from "../reducers/authUserRreducer";

export const registerUser = (name, email, password) => {
  return function (dispatch) {
    fetch(`${API}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((res) => checkRespose(res))
      .then((data) => dispatch(registerUserAction(data)))
      .catch((err) => console.log(err));
  };
};

export const loginUser = (email, passpword) => {
  return function (dispatch) {
    fetch(`${API}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: passpword,
      }),
    })
      .then((red) => checkRespose(red))
      .then((data) => {
        if (data.success) {
          dispatch(loginUserAction(data));
          setCookie("token", data.refreshToken, 24000);
        }
      })
      .catch((err) => console.log(err));
  };
};
