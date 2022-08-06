import {
  CLOSE_LOADING_POPUP,
  CLOSE_ERROR_POPUP,
} from "../actions/NOTIFICATION_POPUP";

const defaultState = {
  errorPopup: false,
  loadingPopup: false,
};

export const notificationPopupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CLOSE_ERROR_POPUP:
      return {
        errorPopup: false,
        loadingPopup: false,
      };
    case CLOSE_LOADING_POPUP:
      return {
        errorPopup: false,
        loadingPopup: false,
      };
    default:
      return state;
  }
};

export const closeErrorPopup = () => ({
  type: CLOSE_ERROR_POPUP,
});
export const closeLoadingPopup = () => ({
  type: CLOSE_LOADING_POPUP,
});
