import React from 'react';
import PropTypes from 'prop-types';

const ArtistQuestionScreen = ({questions, getAnswer}) => {
  const question = questions[0];

  const handleBackGeneralMenu = () => {
    location.pathname = `/`;
  };

  return (
    <main className="app">
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
        <section className="game game--artist">
          <header className="game__header">
            <a className="game__back" href="#" onClick={handleBackGeneralMenu}>
              <span className="visually-hidden">Сыграть ещё раз</span>
              <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
            </a>

            <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
              <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
            </svg>

            <div className="game__mistakes">
              <div className="wrong"></div>
              <div className="wrong"></div>
              <div className="wrong"></div>
            </div>
          </header>

          <section className="game__screen">
            <h2 className="game__title">Кто исполняет эту песню?</h2>
            <div className="game__track">
              <div className="track">
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio>{question.src}</audio>
                </div>
              </div>
            </div>


            <form className="game__artist">
              {question.answers.map((answer, index) => (
                <div key={answer.artist} className="artist">
                  <input onClick={()=>getAnswer(answer.artist)} className="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id={`answer-${index + 1}`} />
                  <label className="artist__name" htmlFor={`answer-${index + 1}`}>
                    <img className="artist__picture" src={`${answer.picture}`} alt={`${answer.artist}`} />
                    {answer.artist}
                  </label>
                </div>
              )
              )}
            </form>
          </section>
        </section>
      </section>
    </main>
  );
};

ArtistQuestionScreen.propTypes = {
  questions: PropTypes.array,
  getAnswer: PropTypes.func,
};

export default ArtistQuestionScreen;
