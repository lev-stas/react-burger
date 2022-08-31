import styles from "./login.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fillEmail,
  fillPassword,
} from "../services/reducers/setUserInfoReducer";
import { loginUser } from "../services/actions/auth";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.userInfo);
  const { accessToken, refreshToken, isAuthenticated } = useSelector(
    (state) => state.authUser
  );
  const onChangeEmail = (e) => {
    dispatch(fillEmail(e.target.value));
  };
  const onChangePass = (e) => {
    dispatch(fillPassword(e.target.value));
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    dispatch(fillPassword(""));
    dispatch(fillEmail(""));
  };
  if (isAuthenticated) {
    return <Redirect to={{ pathname: "/" }} />;
  }
  return (
    <main className={styles.page}>
      <h1 className={`${styles.title} text text_type_main-medium`}>Вход</h1>
      <form className={`${styles.form}`} onSubmit={onSubmitLogin}>
        <div className="mt-6">
          <Input
            value={email}
            placeholder={"E-mail"}
            type={"email"}
            onChange={onChangeEmail}
          />
        </div>
        <div className="mt-6">
          <PasswordInput
            name={"password"}
            value={password}
            onChange={onChangePass}
          />
        </div>
        <div>
          <Button type="primary" size="large">
            Войти
          </Button>
        </div>
      </form>
      <div className={`${styles.textBox} mb-4`}>
        <p
          className={`${styles.textComment} text text_type_main-small text_color_inactive`}
        >
          Вы — новый пользователь?
        </p>
        <Link
          to="/register"
          className={`${styles.navlink} text text_type_main-small`}
        >
          Зарегистрироваться
        </Link>
      </div>
      <div className={`${styles.textBox} mb-4`}>
        <p
          className={`${styles.textComment} text text_type_main-small text_color_inactive`}
        >
          Забыли пароль?
        </p>
        <Link
          to="/forgot-password"
          className={`${styles.navlink} text text_type_main-small`}
        >
          Восстановить пароль
        </Link>
      </div>
    </main>
  );
}
