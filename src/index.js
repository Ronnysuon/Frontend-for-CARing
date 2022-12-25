import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import axios from "axios";
import {BrowserRouter} from 'react-router-dom'


axios.defaults.baseURL = 'http://localhost:3000';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);