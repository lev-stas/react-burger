import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./AppHeader.module.css";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.content}>
        <nav className="mt-4 mb-4">
          <ul className={headerStyles.menu}>
            <li>
              <a href="#" className={`${headerStyles.link} pr-5 pl-5 mr-2`}>
                <BurgerIcon type="primary" />
                <p
                  className={`${headerStyles.linkItem} ml-2 text text_type_main-default`}
                >
                  Конструктор
                </p>
              </a>
            </li>
            <li>
              <a href="#" className={`${headerStyles.link} pr-5 pl-5`}>
                <ListIcon type="secondary" />
                <p
                  className={`${headerStyles.linkItem} ml-2 text text_type_main-default text_color_inactive`}
                >
                  Лента заказов
                </p>
              </a>
            </li>
          </ul>
        </nav>
        <div className={headerStyles.logo}>
          <Logo />
        </div>
        <div>
          <nav className="mt-4 mb-4">
            <Link to="/profile" className={`${headerStyles.link} pr-5 pl-5`}>
              <ProfileIcon type="secondary" />
              <p
                className={`${headerStyles.linkItem} ml-2 text text_type_main-default text_color_inactive`}
              >
                Личный кабинет
              </p>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
