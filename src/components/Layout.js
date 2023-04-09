import React from "react";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
