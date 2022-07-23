import styles from './BurgerIngredients.module.css';
import React, {useContext} from 'react';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCard from '../IngredientCard/IngredientCard';
import {BurgersContext} from "../../services/appContext";


const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('one')
  const data = useContext(BurgersContext)
  return(
    <section className='styles.container'>
      <h1 className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </h1>
      <div className={styles.navPannel}>
        <a className= {styles.navItem} href="#">
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a className= {styles.navItem} href="#">
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
          </Tab>
        </a>
        <a className= {styles.navItem} href="#">
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </div>
      <ul className={styles.container}>
        <li className='mt-10'>
          <h2 className={`${styles.title} text text_type_main-medium`}>Булки</h2>
          <ul className={styles.groupList}>
            {data.ingredients.filter(ingredient => ingredient.type === 'bun').map(ingredient => (<IngredientCard ingredient={ingredient}  key={ingredient._id}/>))}
        </ul>
        </li>
        <li className='mt-10'>
          <h2 className={`${styles.title} text text_type_main-medium`}>Соусы</h2>
          <ul className={styles.groupList}>
            {data.ingredients.filter(ingredient => ingredient.type === 'sauce').map(ingredient => (<IngredientCard ingredient={ingredient}  key={ingredient._id}/>))}
          </ul>
        </li>
        <li className='mt-10'>
          <h2 className={`${styles.title} text text_type_main-medium`}>Начинки</h2>
          <ul className={styles.groupList}>
            {data.ingredients.filter(ingredient => ingredient.type === 'main').map(ingredient => (<IngredientCard ingredient={ingredient}  key={ingredient._id}/>))}
          </ul>
        </li>

      </ul>
      </section>


  )
}



export default BurgerIngredients
