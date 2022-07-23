import styles from './BurgerConstructor.module.css'
import {
  ConstructorElement,
  Button,
  CurrencyIcon

} from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorItem from '../ConstructorItem/ConstructorItem'
import Modal from '../Modal/Modal';
import {useContext, useState, useEffect} from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import {BurgersContext} from "../../services/appContext";
import makeOrder from "../../utils/api";

const BurgerConstructor = () => {
  const [isOpened, SetIsOpened] = useState(false);
  const [sum, setSum] = useState(0);
  const [orderId, setOrderId] = useState({
    "name": "",
    "order": {
      "number": null
    },
    "success": false
  })


  const data = useContext(BurgersContext);
  const bun = data.ingredients.find((item) => item.type === 'bun');
  const burgerStuffing = data.ingredients.filter((item) => item.type !== 'bun');
  const ingredientIds = [ ...burgerStuffing.map(item => item._id), bun._id, bun._id];

  useEffect(() => {
    const totalPrice = burgerStuffing.reduce((total, item) => {
      return total + item.price
    }, bun
      ? (bun.price * 2)
      : 0 );
    setSum(totalPrice)
  },[burgerStuffing, bun]);


  return (
    <section className={`${styles.container} mt-25 ml-10`}>
      <ul className={`${styles.ingredientList} mr-4 ml-4 mb-10`}>
        <li className={`${styles.lockedItem} ml-8`}>
          <ConstructorElement type='top' isLocked={true} text="Краторная булка N-200i (верх)" price={20} thumbnail={bun.image} />
        </li>
        <ul className={`${styles.customIngredients} ml-4`}>
        {burgerStuffing.map(ingredient => (<ConstructorItem data={ingredient} key={ingredient._id} />))}
        </ul>
        <li className={`${styles.lockedItem} ml-8`}>
        <ConstructorElement type='bottom' isLocked={true} text="Краторная булка N-200i (низ)" price={20} thumbnail={bun.image} />
        </li>
      </ul>
      <div className={`${styles.total} mt-10 mr-4`}>
        <div className={`${styles.sum} mr-10`}>
          <p className='text text_type_digits-medium mr-2'>{sum}</p>
          <CurrencyIcon type='primary' />
        </div>
        <Button type='primary' size='medium' onClick={() => {
          SetIsOpened(true);
          makeOrder(ingredientIds)
            .then(data => setOrderId(data))
            .catch(err => console.log(err))
        }}>Оформить заказ</Button>
        <Modal isOpened={isOpened} onClose={() => SetIsOpened(false)}>
          { orderId.success
            ? (<OrderDetails totalSum={sum} id={ `Ваш заказ № ${orderId.order.number}`} statusInfo='Ваш заказ начали готовить' waitMessage='Дождитесь готовности на орбитальной станции'/>)
            : (
              <OrderDetails totalSum='' id='' statusInfo='Произошла какая-то ошибка' waitMessage='Упс... Что-то пошло не так. Попробуйте оформить заказ позже'/>
            )

          }
        </Modal>
      </div>
    </section>
  )
};

export default BurgerConstructor

