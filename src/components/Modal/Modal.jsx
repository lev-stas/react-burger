import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

export default function Modal({children, isOpened, onClose}) {

  const  closeByEsc = (e) => {
    if (e.key === 'Escape'){
      onClose()
    }
  }

  useEffect (() =>{
    document.addEventListener("keydown", closeByEsc);
    return () => {
      document.removeEventListener("keydown", closeByEsc)
    }
  })

  if(!isOpened){
    return null
  }

  return ReactDOM.createPortal (
   ( <>
    <div className={styles.modal}>
      <button className={`${styles.closeButton} mt-15 mr-10`} onClick={onClose}>
        <CloseIcon />
      </button>
      {children}
    </div>
    <ModalOverlay onClose={onClose}/>
    </>), document.getElementById("portal")
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
