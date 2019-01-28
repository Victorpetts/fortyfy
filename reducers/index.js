import { combineReducers } from 'redux';

const initialState = {
  toursArr:[
    { name: "Victors Turnering", players: "10", wincon: "1", totalMatches: "10" },
    { name: "Mirandas Turnering", players: "5", wincon: "2", totalMatches: "2" },
    { name: "Pinars Turnering", players: "5", wincon: "3", totalMatches: "5" },
  ],
  particArr:[
    { name: "Victor", playedMatches: "2"},
    { name: "Miranda", playedMatches: "5"},
    { name: "Jesper", playedMatches: "1"},
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

export default combineReducers ({
  tours: toursReducer,
  partic: particReducer
});
