import { useState, useEffect } from "react";
import { API } from "../../utils/constants";
import pageStyle from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import NotificationModal from "../NotificationModal/NotificationModal";
import { BurgersContext } from "../../services/appContext";
import { checkRespose } from "../../utils/utils";

export default function App() {
  const [availableIngredients, setAvailableIngredients] = useState({
    ingredients: [],
    isLoading: false,
    hasError: false,
    errorPopup: false,
    loadingPopup: false,
  });

  useEffect(() => {
    const getData = async () => {
      setAvailableIngredients((prevState) => ({
        ...prevState,
        isLoading: true,
        loadingPopup: true,
      }));

      try {
        const res = await fetch(`${API}ingredients`);
        if (!res.ok) {
          throw new Error(`response status:${res.status}`);
        }
        const data = await checkRespose(res);
        setAvailableIngredients((prevState) => ({
          ...prevState,
          ingredients: data.data,
          isLoading: false,
          loadingPopup: false,
          errorPopup: false,
        }));
      } catch (e) {
        setAvailableIngredients((prevState) => ({
          ...prevState,
          isLoading: false,
          hasError: true,
          loadingPopup: false,
          errorPopup: true,
        }));
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div className={pageStyle.page}>
      <AppHeader />
      <main className={pageStyle.main}>
        {availableIngredients.isLoading && (
          <Modal
            isOpened={availableIngredients.loadingPopup}
            onClose={() =>
              setAvailableIngredients({
                ...availableIngredients,
                loadingPopup: false,
              })
            }
          >
            <NotificationModal text="ЗАГРУЗКА..." />
          </Modal>
        )}
        {availableIngredients.hasError && (
          <Modal
            isOpened={availableIngredients.errorPopup}
            onClose={() =>
              setAvailableIngredients({
                ...availableIngredients,
                errorPopup: false,
              })
            }
          >
            <NotificationModal text="Ой, что-то пошло не так. Попробуйте позже" />
          </Modal>
        )}
        {!availableIngredients.isLoading &&
          !availableIngredients.hasError &&
          availableIngredients.ingredients.length && (
            <BurgersContext.Provider value={availableIngredients}>
              <BurgerIngredients />
              <BurgerConstructor />
            </BurgersContext.Provider>
          )}
      </main>
    </div>
  );
}
