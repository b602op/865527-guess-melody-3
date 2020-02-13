import PropTypes from 'prop-types';
import React from 'react';

import WelcomeScreen from '../welcome-screen/WelcomeScreen';

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export const App = ({errorsCount}) => <WelcomeScreen errorsCount={errorsCount} />;

