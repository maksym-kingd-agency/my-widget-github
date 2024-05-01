require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";

const appElement = document.getElementById("SITE_HEADER");

ReactDOM.render(<App />, appElement);
