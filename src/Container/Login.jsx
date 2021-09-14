import React, { useState, useContext } from "react";
import Form from "../Components/Form";
import { AuthContext } from "../App";
import { login } from "../Api";
import { Redirect } from "react-router";

import logo from "../Images/logo.png";
import MediaSign from "../Components/MediaSign";
import "../Styles/Login.css";
const Login = () => {
  const { isAuthenticated, setAuthentication } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await login(credentials);
    if (
      response.hasOwnProperty("access_token") &&
      response.hasOwnProperty("refresh_token")
    ) {
      console.log(response);
      setAuthentication(true);
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);
    }
  };
  if (isAuthenticated)
    return <Redirect to={{ pathname: "/Home" }}></Redirect>;
  return (
    <div className="main-container">
      <div className="form-container">
        <img src={logo} alt="logo" />

        <p className="description">
          Enter your credentials and Log in to your dashboard
        </p>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          credentials={credentials}
        ></Form>
        <p className="description">
          Don't have an account?{" "}
          <a className="link" href="/">
            Create your account
          </a>
        </p>
        <MediaSign></MediaSign>
      </div>
    </div>
  );
};

export default Login;
