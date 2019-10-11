import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import smoothscroll from 'smoothscroll-polyfill';
 
smoothscroll.polyfill();

import styles from "./styles/main.scss";
import AvenirMedium from './fonts/avenir.ttf';

const appWrapper = document.getElementById("app-wrapper");
ReactDOM.render(<App />, appWrapper);
