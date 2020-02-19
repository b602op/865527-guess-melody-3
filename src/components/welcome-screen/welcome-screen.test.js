import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen';

test(`Link changes the class when hovered`, () => {
  const component = renderer.create(
      <WelcomeScreen errorsCount={555} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
