import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import {
  MainPage,
  LoginPage,
  RegisterPage,
  ForgotPage,
  ProfilePage,
  ResetPage,
} from "../../pages";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

export default function App() {
  return (
    <div className={styles.page}>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPage />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPage />
          </Route>
          <Route path="/profile" exact={true}>
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
