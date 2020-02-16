import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import questions from "../../mocks/questions";


export const App = ({errorsCount}) => {

  const handleAnswer = (answer) => answer;

  const getQuestions = (typeQuestions) => questions.filter((question) => question.type === typeQuestions);

  return (<BrowserRouter>
    <Switch>
      <Route exact path="/">
        <WelcomeScreen errorsCount={errorsCount} />
      </Route>
      <Route exact path="/dev-artist">
        <ArtistQuestionScreen questions={getQuestions(`artist`)} getAnswer={handleAnswer} />
      </Route>
      <Route exact path="/dev-genre">
        <GenreQuestionScreen questions={getQuestions(`genre`)} getAnswer={handleAnswer} />
      </Route>
    </Switch>
  </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};
