import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
import Footer from "./Footer";
import "./main.scss";

ReactDom.render(
  <React.Fragment>
    <App />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);
