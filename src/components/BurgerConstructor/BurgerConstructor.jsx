import styles from './BurgerConstructor.module.css'
import {
  ConstructorElement,
  Button,
  CurrencyIcon

} from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorItem from '../ConstructorItem/ConstructorItem'

const BurgerConstructor = (props) => {
  return (
    <section className={`${styles.container} mt-25 ml-10`}>
      <ul className={`${styles.ingredientList} mr-4 ml-4 mb-10`}>
        <li className={`${styles.lockedItem} ml-8`}>
          <ConstructorElement type='top' isLocked={true} text={props.data[0].name} price={props.data[0].price} thumbnail={props.data[0].image} />
        </li>
        <ul className={`${styles.customIngredients} ml-4`}>
        {props.data.slice(1,-1).map(ingredient => (<ConstructorItem data={ingredient} key={ingredient._id} />))}
        </ul>
        <li className={`${styles.lockedItem} ml-8`}>
          {props.data.slice(-1).map(ingredient => (<ConstructorElement type='bottom' isLocked={true} text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image} />))}
        </li>
      </ul>
      <div className={`${styles.total} mt-10 mr-4`}>
        <div className={`${styles.sum} mr-10`}>
          <p className='text text_type_digits-medium mr-2'>610</p>
          <CurrencyIcon type='primary' />
        </div>
        <Button type='primary' size='medium'>Оформить заказ</Button>
      </div>
    </section>
  )
}

export default BurgerConstructor

