import React from 'react';
import {App} from './app';
import renderer from 'react-test-renderer';

test(`Link changes the class when hovered`, () => {
  const component = renderer.create(
      <App errorsCount={999} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
