import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./Container/Home";
import Login from "./Container/Login";
import { AuthContext } from "./App";

const Approuter = () => {
  const { isAuthenticated } = useContext(AuthContext);
  // // const knowPaths = ["/Container/Login", "/Container/Home"];

  // if (!knowPaths.includes(window.location.pathname)) {
  //   if (isAuthenticated) {
  //     window.location.replace("/Container/Home");
  //   } else {
  //     window.location.replace("/Container/Login");
  //   }
  // }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <PrivateRoute condition={isAuthenticated} path="/Home">
          <Home></Home>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

function PrivateRoute({ condition, children, ...rest }) {
  return (
    <Route {...rest}>
      {condition ? (children) : (
      <Redirect to={{ pathname: "/" }}></Redirect>)}
    </Route>
  );
}

export default Approuter;
