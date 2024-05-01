require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";

const appElement = document.getElementById("my-root");

ReactDOM.render(<App />, appElement);

const headerElement = document.getElementById("SITE_HEADER");

ReactDOM.render(<App />, headerElement);

const sectionElement = document.getElementById("comp-jteejtfj");

ReactDOM.render(<App />, sectionElement);
