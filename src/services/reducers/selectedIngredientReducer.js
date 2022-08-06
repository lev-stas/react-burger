import {
  SET_INGREDIENT_DETAILS,
  DEL_INGREDIENT_DETAILS,
} from "../actions/INGREDIENT_DETAILS";

const defaultState = {
  ingredient: {},
  isOpened: false,
};

export const selectedIngredientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS:
      return { ...state, ingredient: action.payload, isOpened: true };
    case DEL_INGREDIENT_DETAILS:
      return { ...state, ingredient: {}, isOpened: false };
    default:
      return state;
  }
};

export const setIngredientAction = (payload) => ({
  type: SET_INGREDIENT_DETAILS,
  payload,
});

export const delIngredientAction = () => ({
  type: DEL_INGREDIENT_DETAILS,
});
