import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const WelcomeScreen = ({errorsCount}) => {
  const [isWelcomeSection, setWelcomeSection] = useState(true);

  const handleClick = () => {
    setWelcomeSection(false);
  };

  let result = isWelcomeSection ? (<section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
    </div>
    <button className="welcome__button" onClick={handleClick}>
      <span className="visually-hidden">Начать игру</span>
    </button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>Нужно ответить на все вопросы.</li>
      <li>Можно допустить {errorsCount} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>) :
    (<>
      <div><Link to="/dev-genre">угадать жанр</Link></div>
      <div><Link to="/dev-artist">угадать артиста</Link></div>
    </>);

  return result;
};

WelcomeScreen.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default WelcomeScreen;
