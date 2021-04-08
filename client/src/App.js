import React from "react";
import LoginForm from "./components/App/Auth/LoginForm";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <Layout>
      <h1>Welcome</h1>
      <p>Please sign in.</p>
      <LoginForm></LoginForm>
    </Layout>
  );
}

export default App;
