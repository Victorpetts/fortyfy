import { combineReducers } from 'redux';

const initialState = {
  toursArr:[
    { name: "Victors Turnering", players: "10", wincon: "1", totalMatches: "10", finished: false },
    { name: "Mirandas Turnering", players: "5", wincon: "2", totalMatches: "2", finished: true },
    { name: "Pinars Turnering", players: "5", wincon: "3", totalMatches: "5", finished: false },
  ],
  particArr:[
    { name: "Victor", playedMatches: "2", points: "27"},
    { name: "Miranda", playedMatches: "5", points: "13"},
    { name: "Jesper", playedMatches: "1", points: "2"},
    { name: "Robert", playedMatches: "2", points: "7"},
    { name: "Pinar", playedMatches: "5", points: "99"},
    { name: "Viktor", playedMatches: "1", points: "4"},
  ],
  usersArr:[
    { name: "Axel", level: "27"},
    { name: "Constantine", level: "13"},
    { name: "Moa", level: "2"},
    { name: "Jesper", level: "99"},
    { name: "Pinar", level: "7"},
    { name: "Bo", level: "61"},
  ]
}

const toursReducer = (oldArr = initialState.toursArr, action) => {

  switch (action.type) {
    case  'TOURNAMENT_CREATED':
      let newArr = [...oldArr, action.payload]
      return newArr;

    default:
      return oldArr;
  }
};

const particReducer = (oldArr = initialState.particArr, action) => {

  switch (action.type) {
    case  'PLAYER_ADDED':
      let newArr = [...oldArr, action.payload]
      return newArr;

    default:
      return oldArr;
  }
};

const usersReducer = (oldArr = initialState.usersArr) => {

  return oldArr;
};

export default combineReducers ({
  tours: toursReducer,
  partic: particReducer,
  users: usersReducer
});
