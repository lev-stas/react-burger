import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children, ...rest }) {
  const authenticationStatus = useSelector(
    (state) => state.authUser.isAuthenticated
  );

  return (
    <Route
      {...rest}
      render={() =>
        authenticationStatus ? children : <Redirect to="/login" />
      }
    />
  );
}
