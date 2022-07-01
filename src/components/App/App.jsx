import pageStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import ingredients  from '../../utils/data';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

export default function App () {
  

    return(
        <div className={pageStyle.page}>
          <AppHeader />
          <main className={pageStyle.main}>
            <BurgerIngredients data={ingredients} />
            <BurgerConstructor data={ingredients} />

          </main>
        </div>
    )
}
