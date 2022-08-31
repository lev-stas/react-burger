import styles from "./profile.module.css";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fillEmail,
  fillName,
  fillPassword,
} from "../services/reducers/setUserInfoReducer";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { name, email, password } = useSelector((state) => state.userInfo);
  const handleNameChange = (e) => {
    dispatch(fillName(e.target.value));
  };
  const handleEmailChange = (e) => {
    dispatch(fillEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(fillPassword(e.target.value));
  };
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <nav className={`${styles.menu} mr-15`}>
          <Link
            className={`${styles.link} ${styles.activeLink} text text_type_main-medium`}
            to="/login"
          >
            Профиль
          </Link>
          <Link
            className={`${styles.link} text text_type_main-medium text_color_inactive`}
            to="/login"
          >
            История заказов
          </Link>
          <Link
            className={`${styles.link} text text_type_main-medium text_color_inactive mb-20`}
            to="/login"
          >
            Выход
          </Link>
          <p
            className={`${styles.navDescription} text text_type_main-small text_color_inactive`}
          >
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </nav>
        <form className={`${styles.form}`}>
          <div>
            <Input
              value={name}
              placeholder={"Имя"}
              type={"text"}
              icon={"EditIcon"}
              onChange={handleNameChange}
            />
          </div>
          <div className="mt-6">
            <Input
              value={email}
              placeholder={"Логин"}
              type={"text"}
              icon={"EditIcon"}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mt-6">
            <Input
              value={password}
              placeholder={"Пароль"}
              type={"password"}
              icon={"EditIcon"}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={styles.formActions}>
            <button className={styles.cancelButton}>Отмена</button>
            <Button>Сохранить</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
