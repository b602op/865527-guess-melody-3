import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import GenreQuestionScreen from './genre-question-screen';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: null,
    genre: `rock`,
  }, {
    src: null,
    genre: `blues`,
  }, {
    src: null,
    genre: `jazz`,
  }, {
    src: null,
    genre: `rock`,
  }],
};

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <Router>
      <GenreQuestionScreen
        question={question}
        onAnswer={() => {}}
      />
    </Router>
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
