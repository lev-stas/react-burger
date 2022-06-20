import styles from './BurgerIngredients.module.css';
import React from 'react';
import {
  Tab,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState('one')
  return(
    <div className='styles.container'>
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
      <h2 className='mt-10 mb-6 text text_type_main-medium'>
        Булки
      </h2>
      <div className={styles.cards}>
        {props.data.filter(ingredient => ingredient.type === 'bun').map(ingredient => (
          <div>
            <img src={ingredient.image}></img>
            <p>{ingredient.price}</p>
            <p>{ingredient.name}</p>
          </div>
        ))

        }
      </div>

    </div>


  )
}

export default BurgerIngredients
