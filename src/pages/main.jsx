import styles from "./main.module.css";
import AppHeader from "../components/AppHeader/AppHeader";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import Modal from "../components/Modal/Modal";
import NotificationModal from "../components/NotificationModal/NotificationModal";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../services/actions/api";
import { useEffect } from "react";
import {
  closeErrorPopup,
  closeLoadingPopup,
} from "../services/reducers/notificationPopupReducer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function MainPage() {
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
    <DndProvider backend={HTML5Backend}>
      <main className={styles.main}>
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
  );
}
