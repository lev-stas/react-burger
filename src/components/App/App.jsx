import {
  useState,
  useEffect
} from 'react';
import { API } from '../../utils/constants';
import pageStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import ingredients from '../../utils/data';


export default function App () {
  const [state, setState] = useState({
    ingredients:[],
    isloading: false,
    hasError: false
  })

  useEffect(() => {

    const getData = async () => {
      setState({...state, isloading: true});
      const res = await fetch(API)
      const data = await res.json()
      setState({...state, ingredients:data.data, isLoading: false})
    }
    getData();
  },[]);

  return(
      <div className={pageStyle.page}>
        <AppHeader />
        <main className={pageStyle.main}>
          <BurgerIngredients data={state.ingredients} />
          <BurgerConstructor data={ingredients} />
        </main>
      </div>
  )
}
