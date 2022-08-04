import {
  GET_INGREDIENTS,
  INGREDIENTS_LOADING,
  INGREDIENTS_ERROR,
} from "../actions/GET_INGREDIENTS";

const defaultState = {
  ingredients: [],
  isLoading: false,
  hasError: false,
};

export const availableIngredientsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INGREDIENTS_LOADING: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload.ingredients,
        isLoading: false,
        hasError: false,
      };

    case INGREDIENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };

    default:
      return state;
  }
};

export const getAvailableIngredientsAction = (payload) => ({
  type: GET_INGREDIENTS,
  payload,
});

export const ingredientsLoading = () => ({
  type: INGREDIENTS_LOADING,
});

export const ingredientsError = () => ({
  type: INGREDIENTS_ERROR,
});
