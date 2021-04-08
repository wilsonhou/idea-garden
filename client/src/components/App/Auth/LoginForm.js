import React from "react";
import styled from "styled-components";

const LoginFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function LoginForm() {
  // TODO: take ontrol of form values
  return (
    <LoginFormStyles>
      <label htmlFor="username">
        Username:
        <input type="text" name="username" id="username" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" />
      </label>
      <button>Submit</button>
    </LoginFormStyles>
  );
}

export default LoginForm;
