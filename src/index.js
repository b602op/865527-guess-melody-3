import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const errorsCount = 999;

ReactDOM.render(
    <App errorsCount={errorsCount} />,
    document.getElementById(`root`)
);
