import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import styles from "./styles/main.scss";

const appWrapper = document.getElementById("app-wrapper");
ReactDOM.render(<App />, appWrapper);