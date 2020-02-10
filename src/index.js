import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const name = `кабаны`;

ReactDOM.render(
    <App name={name} />,
    document.getElementById(`root`)
);
