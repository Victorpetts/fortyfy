import { combineReducers } from 'redux';

const initialState = {
  toursArr:[
    { name: "Victors Turnering", players: "10", wincon: "1", matches: "10" },
    { name: "Mirandas Turnering", players: "5", wincon: "2", matches: "2" },
    { name: "Pinars Turnering", players: "5", wincon: "3", matches: "5" },
  ],
  particArr:[
    { name: "Victor", matches: "2"},
    { name: "Miranda", matches: "5"},
    { name: "Jesper", matches: "1"},
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
