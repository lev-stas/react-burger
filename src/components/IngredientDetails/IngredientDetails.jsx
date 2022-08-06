import styles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

export default function IngredientDetails({ ingredient, title }) {
  return (
    <div className={styles.popup}>
      <h2 className="mt-10 mr-10 ml-10 text text_type_main-large"> {title}</h2>
      <img src={ingredient.image} alt={ingredient.name} />
      <h3 className={`${styles.name} text text_type_main-medium mt-4 mb-8`}>
        {ingredient.name}
      </h3>
      <ul className={`${styles.details} mb-15`}>
        <li>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive`}
          >
            Каллории,ккал
          </p>
          <p
            className={`${styles.detail} text text_type_digits-default text_color_inactive`}
          >
            {ingredient.calories}
          </p>
        </li>
        <li>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive`}
          >
            Белки, г
          </p>
          <p
            className={`${styles.detail} text text_type_digits-default text_color_inactive`}
          >
            {ingredient.proteins}
          </p>
        </li>
        <li>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive`}
          >
            Жиры, г
          </p>
          <p
            className={`${styles.detail} text text_type_digits-default text_color_inactive`}
          >
            {ingredient.fat}
          </p>
        </li>
        <li>
          <p
            className={`${styles.detail} text text_type_main-default text_color_inactive`}
          >
            Углеводы, г
          </p>
          <p
            className={`${styles.detail} text text_type_digits-default text_color_inactive`}
          >
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient: ingredientType,
  tytle: PropTypes.string,
};
