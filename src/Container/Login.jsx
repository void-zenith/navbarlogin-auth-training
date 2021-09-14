import React, { useState, useContext } from "react";
import Form from "../Components/Form";
import { AuthContext } from "../App";
import { login } from "../Api";
import { Redirect } from "react-router";
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
    return <Redirect to={{ pathname: "/Container/Home" }}></Redirect>;
  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        credentials={credentials}
      ></Form>
    </div>
  );
};

export default Login;
