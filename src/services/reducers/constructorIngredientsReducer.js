import {
  ADD_BURGER_STUFFING,
  ADD_BURGER_BUN,
  DELETE_BURGER_STUFFING,
  REPLACE_BURGER_STUFFING,
  CLEAN_UP_CONSTRUCTOR,
} from "../actions/CONSTRUCT_BURGER";

const defaultState = {
  bun: {},
  stuffing: [],
};

export const constructorIngredientsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BURGER_STUFFING:
      return { ...state, stuffing: [...state.stuffing, action.payload] };
    case ADD_BURGER_BUN:
      return { ...state, bun: action.payload };
    case DELETE_BURGER_STUFFING:
      return {
        ...state,
        stuffing: [...state.stuffing].filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case REPLACE_BURGER_STUFFING:
      const dragStuffing = [...state.stuffing];
      dragStuffing.splice(
        action.payload.dragIndex,
        0,
        dragStuffing.splice(action.payload.dropIndex, 1)[0]
      );

      return {
        ...state,
        stuffing: dragStuffing,
      };
    case CLEAN_UP_CONSTRUCTOR:
      return {
        ...state,
        stuffing: [],
        bun: {},
      };
    default:
      return state;
  }
};

export const addBurgerStuffingAction = (payload) => ({
  type: ADD_BURGER_STUFFING,
  payload,
});
export const addBurgerBunAction = (payload) => ({
  type: ADD_BURGER_BUN,
  payload,
});
export const deleteBurgerStuffing = (payload) => ({
  type: DELETE_BURGER_STUFFING,
  payload,
});

export const replaceBurgerStuffing = (payload) => ({
  type: REPLACE_BURGER_STUFFING,
  payload,
});

export const cleanUpConstructorAction = () => ({
  type: CLEAN_UP_CONSTRUCTOR,
});
