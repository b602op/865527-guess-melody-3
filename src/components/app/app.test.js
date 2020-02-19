import React from 'react';
import renderer from 'react-test-renderer';

import App from '../app/app';

test(`Link changes the class when hovered`, () => {
  const component = renderer.create(
      <App errorsCount={999} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
