import React from "react";
import "../Styles/Form.css";
import Button from "./Button";
const Form = ({ handleChange, handleSubmit, credentials }) => {
  return (
    <form>
      <input
        className="input-field input-field_username"
        type="text"
        placeholder="username"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      ></input>
      <br />
      <input
        className="input-field input-field_password"
        type="password"
        placeholder="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      ></input>
      <br />
      <div className="checkbox-container">
        <input type="checkbox" value="RememberMe" className="checkbox"></input>
        <span className="checkbox-text">Remember Me</span>
      </div>
      <br />
      <Button
        label="Sign in"
        size="btn-extralarge"
        variant="btn-primary"
        onClick={handleSubmit}
      ></Button>
    </form>
  );
};

export default Form;
