import styles from "./reset-page.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fillPassword,
  fillToken,
} from "../services/reducers/setUserInfoReducer";
import { resetPwd } from "../services/actions/api";

export default function ResetPage() {
  const dispatch = useDispatch();
  const { password, token } = useSelector((state) => state.userInfo);
  const handlePasswordChange = (e) => {
    dispatch(fillPassword(e.target.value));
  };
  const handleTokenChange = (e) => {
    dispatch(fillToken(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPwd(password, token));
    dispatch(fillPassword(""));
    dispatch(fillToken(""));
  };
  return (
    <main className={styles.page}>
      <h1 className={`${styles.title} text text_type_main-medium`}>
        Восстановление пароля
      </h1>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <div className="mt-6">
          <PasswordInput
            name={"password"}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mt-6">
          <Input
            value={token}
            onChange={handleTokenChange}
            placeholder={"Введите код из письма"}
            type={"text"}
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
