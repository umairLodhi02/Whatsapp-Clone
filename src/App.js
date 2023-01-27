import Dashboard from "./Screens/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Login from "./Screens/Login/Login";
import userContext from "./context/userContext";
import { useEffect, useState } from "react";
export default function App() {
  const [session, setSession] = useState({ username: "" });
  const username = localStorage.getItem("username");
  const clearSession = () => {
    setSession({ username: "" });
  };

  const handleSession = (session) => {
    setSession((prev) =>
      setSession({
        ...prev,
        session,
      })
    );
  };

  useEffect(() => {
    if (username) {
      handleSession({ username });
    }
  }, []);

  return (
    <userContext.Provider
      value={{ session, setSession: handleSession, clearSession }}
    >
      <div className="App">
        {username ? (
          <div className="wrapper">
            <Dashboard />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </userContext.Provider>
  );
}
