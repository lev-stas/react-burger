import styles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import Modal from "../Modal/Modal";
import { useState, useMemo } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { makeOrder } from "../../services/actions/api";
import { useDrop } from "react-dnd";
import {
  addBurgerStuffingAction,
  addBurgerBunAction,
  cleanUpConstructorAction,
} from "../../services/reducers/constructorIngredientsReducer";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const orderId = useSelector((state) => state.orderDetails);
  const bun = useSelector((state) => state.constructorIngredients.bun);
  const burgerStuffing = useSelector(
    (state) => state.constructorIngredients.stuffing
  );
  const ingredientIds = useMemo(
    () => [...burgerStuffing.map((item) => item._id), bun._id, bun._id],
    [burgerStuffing, bun]
  );

  const totalPrice = useMemo(() => {
    return (
      (Object.keys(bun).length ? bun.price * 2 : 0) +
      burgerStuffing.reduce((total, item) => total + item.price, 0)
    );
  }, [bun, burgerStuffing]);

  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredients",
    drop(item) {
      item.type === "bun"
        ? dispatch(addBurgerBunAction(item))
        : dispatch(
            addBurgerStuffingAction({
              ...item,
              id: Math.random().toString(36).slice(2),
              order: burgerStuffing.length + 1,
            })
          );
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const cleanUpConstructor = () => {
    if (orderId.success) {
      dispatch(cleanUpConstructorAction());
    }
  };

  return (
    <section className={`mt-25 ml-10`}>
      <ul
        className={`${styles.ingredientList} mr-4 ml-4 mb-10, ${
          isHover ? styles.isHover : ""
        }`}
        ref={dropRef}
      >
        <li className={`${styles.lockedItem} ml-8`}>
          {Object.keys(bun).length > 0 && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </li>
        <ul className={`${styles.customIngredients} ml-4`}>
          {burgerStuffing.map((ingredient, index) => (
            <ConstructorItem
              data={ingredient}
              index={index}
              key={ingredient.id}
            />
          ))}
        </ul>
        <li className={`${styles.lockedItem} ml-8`}>
          {Object.keys(bun).length > 0 && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </li>
      </ul>
      <div className={`${styles.total} mt-10 mr-4`}>
        <div className={`${styles.sum} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="medium"
          onClick={() => {
            setIsOpened(true);
            dispatch(makeOrder(ingredientIds));
            cleanUpConstructor();
          }}
          disabled={
            (Object.keys(bun).length > 0) |
            (Object.keys(burgerStuffing).length > 0)
              ? false
              : true
          }
        >
          Оформить заказ
        </Button>
        <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
          {orderId.success ? (
            <OrderDetails
              orderId={orderId.order.number.toString()}
              statusInfo="Ваш заказ начали готовить"
              waitMessage="Дождитесь готовности на орбитальной станции"
            />
          ) : (
            <OrderDetails
              orderId=""
              statusInfo="Произошла какая-то ошибка"
              waitMessage="Упс... Что-то пошло не так. Попробуйте оформить заказ позже"
            />
          )}
        </Modal>
      </div>
    </section>
  );
};

export default BurgerConstructor;
