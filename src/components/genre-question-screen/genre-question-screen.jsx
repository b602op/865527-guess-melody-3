import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const GenreQuestionScreen = ({questions}) => {
  const history = useHistory();
  const question = questions[0];

  const handleBackGeneralMenu = () => {
    history.push(`/`);
  };


  return (<main className="app">
    <svg xmlns="http://www.w3.org/2000/svg" style={{position: `absolute`, left: `-1200em`}}>
      <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur>
        <feOffset dx="0" dy="0"></feOffset>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </svg>
    <section className="main" id="root">
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#" onClick={handleBackGeneralMenu}>
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите инди-рок треки</h2>
          <form className="game__tracks">

            {question.answers.map((answer, index) => {

              return (
                <div key={answer.src} className="track">
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id={`answer-${index + 1}`} />
                    <label className="game__check" htmlFor={`answer-${index + 1}`}>Отметить</label>
                  </div>
                </div>
              );
            })}


            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    </section>
  </main>
  );
};

GenreQuestionScreen.propTypes = {
  questions: PropTypes.array,
  getAnswer: PropTypes.func,
};


export default GenreQuestionScreen;
