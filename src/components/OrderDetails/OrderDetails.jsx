import styles from "./OrderDetails.module.css";
import PropTypes from "prop-types";
export default function OrderDetails({ orderId, statusInfo, waitMessage }) {
  return (
    <div className={styles.popup}>
      <p
        className={`${styles.typography} ${styles.orderId} mt-30 mb-8 text text_type_digits-large`}
      >
        {orderId}
      </p>
      <h2 className={`${styles.typography} text text_type_main-medium`}>
        идентификотор заказа
      </h2>
      <div className={`${styles.status} mt-15 mb-15`}></div>
      <p className={`${styles.typography} text text_type_main-default`}>
        {statusInfo}
      </p>
      <p
        className={`${styles.typography} text text_type_main-default text_color_inactive mt-2 mb-30`}
      >
        {waitMessage}
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  orderId: PropTypes.string.isRequired,
  statusInfo: PropTypes.string.isRequired,
  waitMessage: PropTypes.string.isRequired,
};
