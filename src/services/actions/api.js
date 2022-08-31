import { API } from "../../utils/constants";
import { checkRespose } from "../../utils/utils";
import {
  getAvailableIngredientsAction,
  ingredientsLoading,
  ingredientsError,
} from "../reducers/availableIngredientsReducer";
import { orderDetailsAction } from "../reducers/orderDetailsReducer";
import {
  requestResetPassword,
  resetPassword,
} from "../reducers/setUserInfoReducer";

export const getData = () => {
  return function (dispatch) {
    dispatch(ingredientsLoading());
    fetch(`${API}ingredients`)
      .then((res) => checkRespose(res))
      .then((data) => {
        dispatch(
          getAvailableIngredientsAction({
            ingredients: data.data,
          })
        );
      })
      .catch((e) => {
        dispatch(ingredientsError());
        console.log(e);
      });
  };
};
export const makeOrder = (ingredients) => {
  return function (dispatch) {
    fetch(`${API}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    })
      .then((res) => checkRespose(res))
      .then((data) => dispatch(orderDetailsAction(data)))
      .catch((err) => console.log(err));
  };
};

export const requestResetCode = (email) => {
  return function (dispatch) {
    fetch(`${API}password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => checkRespose(res))
      .then((data) => dispatch(requestResetPassword(data)))
      .catch((err) => console.log(err));
  };
};

export const resetPwd = (password, token) => {
  return function (dispatch) {
    fetch(`${API}password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })
      .then((res) => checkRespose(res))
      .then((data) => dispatch(resetPassword(data)))
      .catch((err) => console.log(err));
  };
};
