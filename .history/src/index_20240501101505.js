require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";

const appElement = document.getElementById("my-root");

ReactDOM.render(<App />, appElement);
