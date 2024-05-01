require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";

console.log("Hello-3", element);

setTimeout(() => {
  const element = document.getElementById("my-section-root");
  ReactDOM.render(<App />, element);
}, 4000);

// const appElement = document.getElementById("my-root");

// ReactDOM.render(<App />, appElement);

// const sectionElement = document.getElementById("comp-jteejtfj");

// ReactDOM.render(<App />, sectionElement);
