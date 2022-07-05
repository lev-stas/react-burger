import styles from './BurgerConstructor.module.css'
import {
  ConstructorElement,
  Button,
  CurrencyIcon

} from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorItem from '../ConstructorItem/ConstructorItem'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';

const BurgerConstructor = (props) => {
  const [isOpened, SetIsOpened] = useState(false)
  return (
    <section className={`${styles.container} mt-25 ml-10`}>
      <ul className={`${styles.ingredientList} mr-4 ml-4 mb-10`}>
        <li className={`${styles.lockedItem} ml-8`}>
          <ConstructorElement type='top' isLocked={true} text="Краторная булка N-200i (верх)" price={20} thumbnail={props.data[0].image} />
        </li>
        <ul className={`${styles.customIngredients} ml-4`}>
        {props.data.slice(1,-1).map(ingredient => (<ConstructorItem data={ingredient} key={ingredient._id} />))}
        </ul>
        <li className={`${styles.lockedItem} ml-8`}>
        <ConstructorElement type='bottom' isLocked={true} text="Краторная булка N-200i (низ)" price={20} thumbnail={props.data[0].image} />
        </li>
      </ul>
      <div className={`${styles.total} mt-10 mr-4`}>
        <div className={`${styles.sum} mr-10`}>
          <p className='text text_type_digits-medium mr-2'>610</p>
          <CurrencyIcon type='primary' />
        </div>
        <Button type='primary' size='medium' onClick={() => SetIsOpened(true)}>Оформить заказ</Button>
        <Modal isOpened={isOpened} onClose={() => SetIsOpened(false)}>
          <OrderDetails totalSum='034536' id='индентификатор заказа' statusInfo='Ваш заказ начали готовить' waitMessage='Дождитесь готовности на орбитальной станции'/>
        </Modal>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
  ).isRequired
}



export default BurgerConstructor

