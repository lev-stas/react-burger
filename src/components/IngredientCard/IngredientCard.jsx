import styles from './IngredinetCard.module.css'
import {
  CurrencyIcon,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientCard = (props) => {

  return (
      <li className={`${styles.container} mt-6 ml-6 mr-2`}>
        <Counter count={props.ingredient._v} size='small' />
        <img className='ml-4 mr-4 mb-1' src={props.ingredient.image} alt={props.ingredient.name} />
        <div className={styles.price}>
          <p className={`${styles.priceAmount} text text_type_digits-default`}>{props.ingredient.price}</p>
          <CurrencyIcon type='primary'/>
        </div>
        <p className={`${styles.title} text text_type_main-default mt-1`}>{props.ingredient.name}</p>
      </li>
  )
}

export default IngredientCard
