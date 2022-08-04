import styles from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useMemo } from "react";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  setIngredientAction,
  delIngredientAction,
} from "../../services/reducers/selectedIngredientReducer";

const IngredientCard = (props) => {
  const dispatch = useDispatch();
  const { ingredient, isOpened } = useSelector(
    (state) => state.selectedIngredients
  );
  const { bun, stuffing } = useSelector(
    (state) => state.constructorIngredients
  );
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredients",
    item: props.ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const counter = useMemo(
    () =>
      (count = 0) => {
        for (let { _id } of stuffing) if (_id === props.ingredient._id) count++;
        if (bun && bun._id === props.ingredient._id) return 2;
        return count;
      },
    [bun, stuffing, props.ingredient._id]
  );

  const handleClick = (ingredient) => {
    dispatch(setIngredientAction(props.ingredient));
  };
  const handleClose = () => {
    dispatch(delIngredientAction());
  };

  return (
    <>
      <li
        className={`${styles.container} mt-6 ml-6 mr-2`}
        onClick={() => handleClick(ingredient)}
        ref={dragRef}
      >
        <Counter count={counter()} size="small" />
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
      <Modal isOpened={isOpened} onClose={() => handleClose()}>
        <IngredientDetails
          title="Детали ингредиента"
          img={ingredient.image_large}
          name={ingredient.name}
          calories={ingredient.calories}
          prot={ingredient.proteins}
          fat={ingredient.fat}
          carb={ingredient.carbohydrates}
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
  }).isRequired,
};

export default IngredientCard;
