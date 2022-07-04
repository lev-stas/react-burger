import styles from './NotificationModal.module.css'
import PropTypes from 'prop-types';
export default function NotificationModal({text}) {
  return (
    <h1 className={`${styles.text} text text_type_main-large`}>{text}</h1>
  )
}

NotificationModal.propTypes ={
  text: PropTypes.string.isRequired
}
