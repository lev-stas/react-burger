import {
  useState,
  useEffect
} from 'react';
import { API } from '../../utils/constants';
import pageStyle from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import NotificationModal from '../NotificationModal/NotificationModal';


export default function App () {
  const [state, setState] = useState({
    ingredients:[],
    isLoading: false,
    hasError: false,
    errorPopup: false,
    loadingPopup: false
  })

  useEffect(() => {

    const getData = async () => {
      setState((prevState) => ({...prevState, isLoading: true, loadingPopup: true}));

      try {
        const res = await fetch(API)
        if (!res.ok){
          throw new Error(`response status:${res.status}`)
          }
        const data = await res.json()
        setState((prevState) => ({
          ...prevState,
          ingredients:data.data,
          isLoading: false,
          loadingPopup: false,
          errorPopup: false
        }))
      }
      catch (e){
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          hasError: true,
          loadingPopup: false,
          errorPopup: true
        }))
        console.log(e)
      }
    }
    getData();
  },[]);

  return(
      <div className={pageStyle.page}>
        <AppHeader />
        <main className={pageStyle.main}>
        {
        state.isLoading &&
        <Modal isOpened={state.loadingPopup} onClose={() => setState({...state, loadingPopup: false})}>
          <NotificationModal text='ЗАГРУЗКА...' />
        </Modal>
        }
        {state.hasError &&
        <Modal isOpened={state.errorPopup} onClose={() => setState({...state, errorPopup: false})}>
          <NotificationModal text='Ой, что-то пошло не так. Попробуйте позже' />
        </Modal>}
        { !state.isLoading && !state.hasError && state.ingredients.length &&
          (<>
            <BurgerIngredients data={state.ingredients} />
            <BurgerConstructor data={state.ingredients} />
          </>)
        }
        </main>
      </div>
  )
}
