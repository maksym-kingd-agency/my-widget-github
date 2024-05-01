require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";

const element = document.getElementById("my-section-root");

console.log("Hello-3", element);

ReactDOM.render(<App />, element);

// const appElement = document.getElementById("my-root");

// ReactDOM.render(<App />, appElement);

// const sectionElement = document.getElementById("comp-jteejtfj");

// ReactDOM.render(<App />, sectionElement);
