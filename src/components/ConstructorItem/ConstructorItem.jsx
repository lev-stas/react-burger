import styles from './ConstructorItem.module.css'
import  {
  DragIcon,
  ConstructorElement
  }  from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

const ConstructorItem = (props) => {
  return(
    <li className={styles.element}>
      <DragIcon type='primary' />
      <ConstructorElement text={props.data.name} price={props.data.price} thumbnail={props.data.image} />
    </li>
  )
}

ConstructorItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired
}

export default ConstructorItem
