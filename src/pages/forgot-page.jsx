import styles from "./forgot-page.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fillEmail } from "../services/reducers/setUserInfoReducer";
import { requestResetCode } from "../services/actions/api";
export default function ForgotPage() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.userInfo.email);
  const handleChange = (e) => {
    dispatch(fillEmail(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestResetCode(email));
    dispatch(fillEmail(""));
  };
  return (
    <main className={styles.page}>
      <h1 className={`${styles.title} text text_type_main-medium`}>
        Восстановление пароля
      </h1>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <div className="mt-6">
          <Input
            value={email}
            onChange={handleChange}
            placeholder={"Укажите e-mail"}
            type={"email"}
          />
        </div>
        <div>
          <Button type="primary" size="large">
            Восстановить
          </Button>
        </div>
      </form>
      <div className={`${styles.textBox} mb-4`}>
        <p
          className={`${styles.textComment} text text_type_main-small text_color_inactive`}
        >
          Вспомнили пароль?
        </p>
        <Link
          to="/login"
          className={`${styles.navlink} text text_type_main-small`}
        >
          Войти
        </Link>
      </div>
    </main>
  );
}
