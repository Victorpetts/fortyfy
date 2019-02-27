import { combineReducers } from 'redux';

const initialState = {
  toursArr:[
    { name: "Miranda's Tournament", players: "5", wincon: "2", totalMatches: "2", fromDate: "January 15th 2019, 19:00", toDate: "January 18th 2019, 18:30", finished: true },
    { name: "Pinar's Tournament", players: "5", wincon: "3", totalMatches: "5", fromDate: "February 21st 2019, 09:30", toDate: "February 24th 2019, 11:30", finished: false },
    { name: "Victor's Tournament", players: "8", wincon: "1", totalMatches: "7", fromDate: "February 13th 2019, 18:00", toDate: "February 22nd 2019, 12:00", finished: false },
  ],
  particArr:[
    { name: "Victor", playedMatches: "2", points: "27", checkBox: false },
    { name: "Miranda", playedMatches: "5", points: "13", checkBox: false },
    { name: "Jesper", playedMatches: "1", points: "2", checkBox: false },
    { name: "Robert", playedMatches: "2", points: "7", checkBox: false },
    { name: "Pinar", playedMatches: "5", points: "99", checkBox: false },
    { name: "Viktor", playedMatches: "1", points: "4", checkBox: false },
  ],
  usersArr:[
    { name: "Axel", level: "27", friend: true, status: "friend" },
    { name: "Constantine", level: "13", friend: true, status: "friend" },
    { name: "Moa", level: "2", friend: true, status: "friend" },
    { name: "Jesper", level: "99", friend: true, status: "friend" },
    { name: "Pinar", level: "7", friend: true, status: "friend" },
    { name: "Bo", level: "61", friend: true, status: "friend" },
    { name: "Robert", level: "75", friend: false, status: "notFriend" },
    { name: "Fredrik", level: "23", friend: false, status: "notFriend" },
  ]
}

const toursReducer = (oldArr = initialState.toursArr, action) => {
  switch (action.type) {
    case'TOURNAMENT_CREATED':
      let newToursArr = [...oldArr, action.payload]
      return newToursArr;

    case 'TOURNAMENT_ENDED':
      return oldArr.map((item, index) => {
        if(item.name === action.payload) {
          return {
            ...item,
            finished: true
          }
        }
        return item;
      });

    default:
      return oldArr;
  }
};

const particReducer = (oldArr = initialState.particArr, action) => {
  switch (action.type) {
    case 'PLAYER_ADDED':
      let newArr = [...oldArr, action.payload]
      return newArr;

    case 'PLAYER_SELECTED':
      return oldArr.map((item, index) => {
          return {
            ...item,
            checkBox: true
          }
      });

    case 'PLAYER_CONFIRMED':
      return oldArr.map((item, index) => {
        return {
          ...item,
          checkBox: false
        }
      });

    case 'PLAYER_DELETED':
      let newParticArr = oldArr.filter(item => item.name !== action.payload)
      return newParticArr;

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

      case 'FRIEND_REQUEST_SENT':
      return oldArr.map((item, index) => {
        if(item.name === action.payload) {
          return {
            ...item,
            status: 'pending'
          }
        }
        return item;
      });

      case 'FRIEND_INVITED':
          let newUsersArr = oldArr.filter(item => item.name !== action.payload)
          return newUsersArr;

  default:
    return oldArr;
  }

};


export default combineReducers ({
  tours: toursReducer,
  partic: particReducer,
  users: usersReducer
});
