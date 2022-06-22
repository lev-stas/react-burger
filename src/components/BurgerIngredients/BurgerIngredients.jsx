import styles from './BurgerIngredients.module.css';
import React from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCard from '../IngredientCard/IngredientCard';
import ingredients from '../../utils/data';


const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState('one')
  return(
    <section className='styles.container'>
      <h1 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h1>
      <nav style={{ display: 'flex' }}>
        <a href="#">
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a href="#">
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
          </Tab>
        </a>
        <a href="#">
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </nav>
      <ul className={styles.container}>
        <li className='mt-10'>
          <h2 className={`${styles.title} text text_type_main-medium`}>Булки</h2>
          <ul className={styles.groupList}>
            {props.data.filter(ingredient => ingredient.type === 'bun').map(ingredient => (<IngredientCard ingredient={ingredient}  key={ingredient._id}/>))}
        </ul>
        </li>
        <li className='mt-10'>
          <h2 className={`${styles.title} text text_type_main-medium`}>Соусы</h2>
          <ul className={styles.groupList}>
            {props.data.filter(ingredient => ingredient.type === 'sauce').map(ingredient => (<IngredientCard ingredient={ingredient}  key={ingredient._id}/>))}
          </ul>
        </li>
        <li className='mt-10'>
          <h2 className={`${styles.title} text text_type_main-medium`}>Начинки</h2>
          <ul className={styles.groupList}>
            {props.data.filter(ingredient => ingredient.type === 'main').map(ingredient => (<IngredientCard ingredient={ingredient}  key={ingredient._id}/>))}
          </ul>
        </li>

      </ul>
      </section>


  )
}

export default BurgerIngredients
