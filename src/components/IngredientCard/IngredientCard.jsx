import styles from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const IngredientCard = (props) => {
  const [isOpened, SetIsOpened] = useState(false);
  return (
    <>
      <li
        className={`${styles.container} mt-6 ml-6 mr-2`}
        onClick={() => SetIsOpened(true)}
      >
        <Counter count={props.ingredient._v} size="small" />
        <img
          className="ml-4 mr-4 mb-1"
          src={props.ingredient.image}
          alt={props.ingredient.name}
        />
        <div className={styles.price}>
          <p className={`${styles.priceAmount} text text_type_digits-default`}>
            {props.ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.title} text text_type_main-default mt-1`}>
          {props.ingredient.name}
        </p>
      </li>
      <Modal isOpened={isOpened} onClose={() => SetIsOpened(false)}>
        <IngredientDetails
          title="Детали ингредиента"
          img={props.ingredient.image_large}
          name={props.ingredient.name}
          calories={props.ingredient.calories}
          prot={props.ingredient.proteins}
          fat={props.ingredient.fat}
          carb={props.ingredient.carbohydrates}
        />
      </Modal>
    </>
  );
};

IngredientCard.propTypes = {
  ingredient: PropTypes.shape({
    price: PropTypes.number.isRequired,
    image_large: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired,
};

export default IngredientCard;
