import React, { useState } from "react";
import styled from "styled-components";
import fire from "../../../fire";

const LoginFormStyles = styled.div`
  h2 {
    text-align: center;
    margin: 0 auto;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Submitted form!\n Email: ${email}\n Password: ${password}`);
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.error("Incorrect Username or Password");
      });
  };
  return (
    <LoginFormStyles>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            onChange={({ target }) => setEmail(target.value)}
            type="text"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            name="password"
            id="password"
          />
        </label>
        <button>Submit</button>
      </form>
    </LoginFormStyles>
  );
}

export default LoginForm;
