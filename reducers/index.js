import { combineReducers } from 'redux';

const initialState = {
  toursArr:[
    { name: "Mirandas Turnering", players: "5", wincon: "2", totalMatches: "2", finished: true },
    { name: "Pinars Turnering", players: "5", wincon: "3", totalMatches: "5", finished: false },
    { name: "Victors Turnering", players: "8", wincon: "1", totalMatches: "7", finished: false },
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
    { name: "Axel", level: "27", friend: true},
    { name: "Constantine", level: "13", friend: true},
    { name: "Moa", level: "2", friend: true},
    { name: "Jesper", level: "99", friend: true},
    { name: "Pinar", level: "7", friend: true},
    { name: "Bo", level: "61", friend: true},
    { name: "Robert", level: "75", friend: false},
    { name: "Fredrik", level: "23", friend: false},
  ]
}

const toursReducer = (oldArr = initialState.toursArr, action) => {
  switch (action.type) {
    case'TOURNAMENT_CREATED':
      let newToursArr = [...oldArr, action.payload]
      return newToursArr;

    default:
      return oldArr;
  }
};

const particReducer = (oldArr = initialState.particArr, action) => {

  switch (action.type) {
    case 'PLAYER_ADDED':
      let newArr = [...oldArr, action.payload]
      return newArr;

    default:
      return oldArr;
  }
};

const usersReducer = (oldArr = initialState.usersArr, action) => {

  switch (action.type) {
    case 'FRIEND_ACCEPTED':
      return oldArr.map((item, index) => {
        if(item.name === action.payload) {
          return {
            ...item,
            friend: true
          }
        }
        return item;
      });

    case 'FRIEND_DENIED':
      return oldArr.map((item, index) => {
        if(item.name === action.payload) {
          return {
            ...item,
            friend: ''
          }
        }
        return item;
      });

  default:
    return oldArr;
  }
};


export default combineReducers ({
  tours: toursReducer,
  partic: particReducer,
  users: usersReducer
});
