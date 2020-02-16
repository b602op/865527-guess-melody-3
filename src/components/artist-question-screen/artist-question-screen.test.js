import React from 'react';
import ArtistQuestionScreen from './artist-question-screen';
import renderer from 'react-test-renderer';

const AVATAR_URL = `https://via.placeholder.com/150/000000/FFFFFF/?text=`;
const artistQuestions = [{
  type: `artist`,
  song: {
    artist: `Пелагея`,
    src: `музыка`,
  },
  answers: [{
    picture: `${AVATAR_URL}Пелагея`,
    artist: `Пелагея`,
  }, {
    picture: `${AVATAR_URL}КДИМБ`,
    artist: `Краснознаменная дивизия имени моей бабушки`,
  }, {
    picture: `${AVATAR_URL}Lorde`,
    artist: `Lorde`,
  }]
}];
const handleAnswer = () => {};

test(`Link changes the class when hovered`, () => {
  const component = renderer.create(
      <ArtistQuestionScreen questions={artistQuestions} getAnswer={handleAnswer} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
