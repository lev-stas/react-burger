import pageStyle from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import NotificationModal from "../NotificationModal/NotificationModal";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/actions/api";
import { useEffect } from "react";
import {
  closeErrorPopup,
  closeLoadingPopup,
} from "../../services/reducers/notificationPopupReducer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const availableIngredients = useSelector(
    (state) => state.availableIngredients
  );
  const notificationPopupState = useSelector(
    (state) => state.notificationPopup
  );

  return (
    <div className={pageStyle.page}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={pageStyle.main}>
          {availableIngredients.isLoading && (
            <Modal
              isOpened={notificationPopupState.loadingPopup}
              onClose={() => dispatch(closeLoadingPopup())}
            >
              <NotificationModal text="ЗАГРУЗКА..." />
            </Modal>
          )}
          {availableIngredients.hasError && (
            <Modal
              isOpened={notificationPopupState.errorPopup}
              onClose={() => dispatch(closeErrorPopup())}
            >
              <NotificationModal text="Ой, что-то пошло не так. Попробуйте позже" />
            </Modal>
          )}
          {!availableIngredients.isLoading &&
            !availableIngredients.hasError &&
            availableIngredients.ingredients.length && (
              <>
                <BurgerIngredients />
                <BurgerConstructor />
              </>
            )}
        </main>
      </DndProvider>
    </div>
  );
}
