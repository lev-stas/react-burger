import pageStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import ingredients  from '../../utils/data';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';



export default function App () {
    return(
        <div className={pageStyle.page}>
          <AppHeader />
          <main className={pageStyle.main}>
            <BurgerIngredients data={ingredients}/>

          </main>
        </div>
    )
}
