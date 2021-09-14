import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../App";
import Button from "../Components/Button";
const Home = () => {
  const {setAuthentication } = useContext(AuthContext);
  const hanldeLogout = () => {
    setAuthentication(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };
  return (
    <div>
      <h1>Home</h1>
      <Navbar></Navbar>
      <Button
        size="btn-extralarge"
        variant="btn-primary"
        onClick={hanldeLogout}
        label="Logout"
      ></Button>
    </div>
  );
};

export default Home;
