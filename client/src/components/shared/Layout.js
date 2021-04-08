import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

function Layout({ children }) {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Typography></Typography>
      {children}
    </>
  );
}

export default Layout;
