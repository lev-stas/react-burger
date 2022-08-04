import styles from "./ConstructorItem.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  deleteBurgerStuffing,
  replaceBurgerStuffing,
} from "../../services/reducers/constructorIngredientsReducer";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ConstructorItem = ({ data, index }) => {
  const { name, price, image, id } = data;
  const dispatch = useDispatch();
  const handleClose = (id) => {
    dispatch(deleteBurgerStuffing({ id }));
  };
  const myRef = useRef(null);
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: { id, index },
    collect: (monitor) => {
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
    },
  });
  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredient",
    hover(data) {
      if (!myRef.current) {
        return;
      }
      const dragIndex = data.index;
      const dropIndex = index;
      dispatch(replaceBurgerStuffing({ dropIndex, dragIndex }));
      data.index = dropIndex;
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  dragRef(dropRef(myRef));

  return (
    <li
      className={`${styles.element} ${isHover ? styles.isHover : ""}`}
      ref={myRef}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => handleClose(id)}
      />
    </li>
  );
};

ConstructorItem.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ConstructorItem;
