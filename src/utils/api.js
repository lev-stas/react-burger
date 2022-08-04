import { API } from "./constants";
import { checkRespose } from "./utils";
import {
  getAvailableIngredientsAction,
  ingredientsLoading,
  ingredientsError,
} from "../services/reducers/availableIngredientsReducer";

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
function makeOrder(ingredients) {
  return fetch(`${API}orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  }).then((res) => checkRespose(res));
}
export default makeOrder;
