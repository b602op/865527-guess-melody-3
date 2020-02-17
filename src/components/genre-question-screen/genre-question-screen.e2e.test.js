import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

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


it(`Should welcome button be pressed`, () => {
  const getAnswer = jest.fn();
  const genreQuestionScreen = shallow(
      <GenreQuestionScreen
        questions={artistQuestions}
        getAnswer={getAnswer}
      />
  );

  const form = genreQuestionScreen.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(getAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});


it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const getAnswer = jest.fn((...args) => [...args]);
  const userAnswers = [false, true, false, false];

  const genreQuestion = shallow(
      <GenreQuestionScreen
        getAnswer={getAnswer}
        question={artistQuestions}
      />
  );

  const inputTwo = genreQuestion.find(`input`).at(1);
  inputTwo.simulate(`change`, {target: {checked: true}});

  const form = genreQuestion.find(`form`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(getAnswer).toHaveBeenCalledTimes(1);

  expect(getAnswer).toHaveBeenLastCalledWith(artistQuestions, userAnswers);

  expect(
      genreQuestion.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(userAnswers);
});

