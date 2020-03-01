import React from "react";
import renderer from "react-test-renderer";

import App from "./app";


const questions = [
  {
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
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: null,
    },
    answers: [{
      picture: null,
      artist: `John Snow`,
    }, {
      picture: null,
      artist: `Jack Daniels`,
    }, {
      picture: null,
      artist: `Jim Beam`,
    }],
  },
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
      questions={questions}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
