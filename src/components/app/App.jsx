import PropTypes from 'prop-types';
import React from 'react';

import WelcomeScreen from '../welcome-screen/welcome-screen';

export const App = ({errorsCount}) => <WelcomeScreen errorsCount={errorsCount} />;

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};
