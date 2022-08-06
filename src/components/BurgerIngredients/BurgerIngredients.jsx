import styles from "./BurgerIngredients.module.css";
import React, { useEffect } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { delIngredientAction } from "../../services/reducers/selectedIngredientReducer";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = React.useState("one");
  const data = useSelector((state) => state.availableIngredients);
  const { ingredient, isOpened } = useSelector(
    (state) => state.selectedIngredients
  );

  const [bunRef, bunInView] = useInView({
    threshold: 0.05,
  });

  const [sauceRef, sauceInView] = useInView({
    threshold: 0.05,
  });

  const [stuffingRef, stuffingInView] = useInView({
    threshold: 0.05,
  });

  const handleScroll = () => {
    switch (true) {
      case bunInView:
        setCurrent("bun");
        break;
      case sauceInView:
        setCurrent("sauce");
        break;
      case stuffingInView:
        setCurrent("stuffing");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleScroll();
  }, [bunInView, sauceInView, stuffingInView]);
  const handleClose = () => {
    dispatch(delIngredientAction());
  };

  return (
    <>
      <section className="styles.container">
        <h1 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h1>
        <div className={styles.navPannel}>
          <a className={styles.navItem} href="#bun">
            <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
              Булки
            </Tab>
          </a>
          <a className={styles.navItem} href="#sauce">
            <Tab
              value="sauce"
              active={current === "sauce"}
              onClick={setCurrent}
            >
              Соусы
            </Tab>
          </a>
          <a className={styles.navItem} href="#stuffing">
            <Tab
              value="stuffing"
              active={current === "stuffing"}
              onClick={setCurrent}
            >
              Начинки
            </Tab>
          </a>
        </div>
        <ul className={styles.container}>
          <li className="mt-10" ref={bunRef} id="bun">
            <h2 className={`${styles.title} text text_type_main-medium`}>
              Булки
            </h2>
            <ul className={styles.groupList}>
              {data.ingredients
                .filter((ingredient) => ingredient.type === "bun")
                .map((ingredient) => (
                  <IngredientCard
                    ingredient={ingredient}
                    key={ingredient._id}
                  />
                ))}
            </ul>
          </li>
          <li className="mt-10" ref={sauceRef} id="sauce">
            <h2 className={`${styles.title} text text_type_main-medium`}>
              Соусы
            </h2>
            <ul className={styles.groupList}>
              {data.ingredients
                .filter((ingredient) => ingredient.type === "sauce")
                .map((ingredient) => (
                  <IngredientCard
                    ingredient={ingredient}
                    key={ingredient._id}
                  />
                ))}
            </ul>
          </li>
          <li className="mt-10" ref={stuffingRef} id="stuffing">
            <h2 className={`${styles.title} text text_type_main-medium`}>
              Начинки
            </h2>
            <ul className={styles.groupList}>
              {data.ingredients
                .filter((ingredient) => ingredient.type === "main")
                .map((ingredient) => (
                  <IngredientCard
                    ingredient={ingredient}
                    key={ingredient._id}
                  />
                ))}
            </ul>
          </li>
        </ul>
      </section>
      {isOpened && (
        <Modal isOpened={isOpened} onClose={() => handleClose()}>
          <IngredientDetails
            title="Детали ингредиента"
            ingredient={ingredient}
          />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
