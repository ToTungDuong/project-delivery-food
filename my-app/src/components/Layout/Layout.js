import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
const Layout = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Routers></Routers>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
