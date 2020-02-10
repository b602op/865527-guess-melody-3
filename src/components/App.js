import React from "react";
import WelcomeScreen from "./WelcomeScreen";

// eslint-disable-next-line react/prop-types
const App = ({name}) => {
  return <WelcomeScreen name={name} />;
};

export default App;
