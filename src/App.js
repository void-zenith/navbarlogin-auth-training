import "./App.css";
import Approuter from "./Approuter";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setAuthentication(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthentication }}>
      <Approuter></Approuter>
    </AuthContext.Provider>
  );
}

export default App;
