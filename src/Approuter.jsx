import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./Container/Home";
import Login from "./Container/Login";
import Portfolio from "./Container/Portfolio";
import Services from "./Container/Services";
import Contact from "./Container/Contact";
import { AuthContext } from "./App";
const Approuter = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const knowPaths = ["/Container/Login", "/Container/Home"];

  if (!knowPaths.includes(window.location.pathname)) {
    if (isAuthenticated) {
      window.location.replace("/Container/Home");
    } else {
      window.location.replace("/Container/Login");
    }
  }
  return (
    <Router>
      <Switch>
        <Route path="/Container/Login">
          <Login></Login>
        </Route>
        <PrivateRoute condition={isAuthenticated} path="/Container/Home">
          <Home></Home>
        </PrivateRoute>
        <Route path="/Container/Portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route path="/Container/Services">
          <Services></Services>
        </Route>
        <Route path="/Container/Contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
};

function PrivateRoute({ condition, children, ...rest }) {
  return (
    <Route {...rest}>
      {condition ? (children) : (
      <Redirect to={{ pathname: "/Container/Login" }}></Redirect>)}
    </Route>
  );
}

export default Approuter;
