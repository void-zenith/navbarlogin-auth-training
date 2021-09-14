import React from "react";

import Navbar from "../Components/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

import Portfolio from "../Container/Portfolio";
import Services from "../Container/Services";
import Contact from "../Container/Contact";

const Home = () => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <Navbar url={url}></Navbar>
      <Switch>
        <Route exact path={path}>
          <Portfolio></Portfolio>
        </Route>
        <Route exact path={`${path}/Services`}>
          <Services></Services>
        </Route>
        <Route exact path={`${path}/Contact`}>
          <Contact></Contact>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default Home;
