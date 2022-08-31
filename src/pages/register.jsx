import styles from "./login.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../services/actions/auth";
import {
  fillEmail,
  fillName,
  fillPassword,
} from "../services/reducers/setUserInfoReducer";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const { name, email, password } = useSelector((state) => state.userInfo);
  const onChangeName = (e) => {
    dispatch(fillName(e.target.value));
  };
  const onChangeEmail = (e) => {
    dispatch(fillEmail(e.target.value));
  };
  const onChangePass = (e) => {
    dispatch(fillPassword(e.target.value));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password));
    dispatch(fillName(""));
    dispatch(fillEmail(""));
    dispatch(fillPassword(""));
  };
  return (
    <main className={styles.page}>
      <h1 className={`${styles.title} text text_type_main-medium`}>
        Регистрация
      </h1>
      <form className={`${styles.form}`} onSubmit={onSubmit}>
        <div className="mt-6">
          <Input
            value={name}
            placeholder={"Имя"}
            type={"text"}
            onChange={onChangeName}
          />
        </div>
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
            Зарегистрироваться
          </Button>
        </div>
      </form>
      <div className={`${styles.textBox} mb-4`}>
        <p
          className={`${styles.textComment} text text_type_main-small text_color_inactive`}
        >
          Уже зарегистрированы?
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
