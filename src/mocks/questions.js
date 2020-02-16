const AVATAR_URL = `https://via.placeholder.com/150/000000/FFFFFF/?text=`;

export default [
  {
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
  }, {
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
  }
];
