import React, { useEffect, useState } from "react";
import { authService } from "../fBase";
import AppRouter from "./Routes";

const App = () => {
  const [init, setInit] = useState(false);
  const [userAuth, setUserAuth] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserAuth(user.uid)
        setIsLoggedIn(true)
      } else {
        setUserAuth("")
        setIsLoggedIn(false)
      }
      setInit(true);
    })
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} userAuth={userAuth} /> : "Loading..."}
    </>
  );
}

export default App;

