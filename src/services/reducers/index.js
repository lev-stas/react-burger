import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { availableIngredientsReducer } from "./availableIngredientsReducer";
import { notificationPopupReducer } from "./notificationPopupReducer";
import { orderDetailsReducer } from "./orderDetailsReducer";
import { constructorIngredientsReducer } from "./constructorIngredientsReducer";
import { selectedIngredientReducer } from "./selectedIngredientReducer";
import { setUserInfoReducer } from "./setUserInfoReducer";
import { authUserReducer } from "./authUserRreducer";

const rootReducer = combineReducers({
  availableIngredients: availableIngredientsReducer,
  notificationPopup: notificationPopupReducer,
  orderDetails: orderDetailsReducer,
  constructorIngredients: constructorIngredientsReducer,
  selectedIngredients: selectedIngredientReducer,
  userInfo: setUserInfoReducer,
  authUser: authUserReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
