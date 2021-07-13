import React, { useEffect, useState } from "react";
import { authService } from "../fBase";
import AppRouter from "./Routes";

const App = () => {
  const [init, setInit] = useState(false);
  const [userAuth, setUserAuth] = useState("anonymous");
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserAuth(user.uid)
      }
      setInit(true);
      console.log(userAuth)
    })

  });
  return (
    <>
      {init ? <AppRouter isLoggedIn={Boolean(userAuth)} userAuth={userAuth} /> : "Loading..."}
    </>
  );
}

export default App;

