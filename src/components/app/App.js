import React from 'react';
import WelcomeScreen from './welcome-screen.jsx';

// eslint-disable-next-line react/prop-types
export const App = ({errorsCount}) => <WelcomeScreen errorsCount={errorsCount} />;
