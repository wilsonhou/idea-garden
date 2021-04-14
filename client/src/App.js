import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/App/Auth/LoginForm";
import fire from "./fire";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  fire.auth().onAuthStateChanged(user => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  const signOut = () => {
    fire.auth().signOut();
  };
  console.log(`Logged in: ${isLoggedIn}`);
  return (
    <Router>
      {!isLoggedIn ? (
        <>
          <Switch>
            <Route path="/">
              <LoginForm></LoginForm>
            </Route>
          </Switch>
        </>
      ) : (
        <>
          <h1>Hello World! You're logged in.</h1>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </Router>
  );
}

export default App;
