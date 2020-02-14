// Link.react.test.js
import React from 'react';
import WelcomeScreen from './welcome-screen';
import renderer from 'react-test-renderer';

test(`Link changes the class when hovered`, () => {
  const component = renderer.create(
      <WelcomeScreen errorsCount={555} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
});
