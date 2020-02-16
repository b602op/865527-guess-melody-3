import React from 'react';
import GenreQuestionScreen from './genre-question-screen';
import renderer from 'react-test-renderer';

const artistQuestions = [{
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `url-1`,
    genre: `rock`,
  }, {
    src: `url-2`,
    genre: `blues`,
  }, {
    src: `url-3`,
    genre: `jazz`,
  }, {
    src: `url-4`,
    genre: `rock`,
  }],
}];
const handleAnswer = () => {};

test(`Link changes the class when hovered`, () => {
  const component = renderer.create(
      <GenreQuestionScreen questions={artistQuestions} getAnswer={handleAnswer} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
