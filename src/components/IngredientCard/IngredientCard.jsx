import styles from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setIngredientAction } from "../../services/reducers/selectedIngredientReducer";
import { ingredientType } from "../../utils/types";

const IngredientCard = (props) => {
  const dispatch = useDispatch();
  const { ingredient } = useSelector((state) => state.selectedIngredients);
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

  return (
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
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
};

export default IngredientCard;
