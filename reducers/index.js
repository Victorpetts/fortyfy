import { combineReducers } from 'redux';

//Create a class for matchStatistics maybe dont need to be a component
class match{
  constructor(tourId,playedMatches, points){
    this.tourId = tourId;
    this.matchesPlayed = playedMatches;
    this.points = points;
  }
}

const initialState = {
  toursArr:[
    {
      id: 1,
      name: "Miranda's Tournament",
      participants: ["1","3","4","5","10"],
      players: "5",
      wincon: "2",
      totalMatches: "3",
      fromDate: "5th of March 10:30",
      toDate: "5th of March 13:00",
      finished: true,
      owner: "3"
    },
    {
      id: 2,
      name: "Pinar's Tournament",
      participants: ["5","6","7","9"],
      players: "4",
      wincon: "3",
      totalMatches: "5",
      fromDate: "7th of March 17:30",
      toDate: "8th of March 17:30",
      finished: false,
      owner: "5"
    },
    {
      id: 3,
      name: "Victor's Tournament",
      participants: ["1","2","3","4","7","8","10"],
      players: "8",
      wincon: "1",
      totalMatches: "7",
      fromDate: "9th of March 07:00",
      toDate: "9th of March 21:00",
      finished: false,
      owner: "1"
    },
  ],
  usersArr:[
    {
      id: "1",
      name: "Vicky",
      lvl: "27",
      matchStatistics: [new match(1,3,10), new match(3,7,56)],
      checkBox: false,
      friends: ["3","5","6","8","9","10"],
      friend: true,
      status: "friend",
      card: "1"
    },
    {
      id: "2",
      name: "Antonius",
      lvl: "13",
      matchStatistics: [new match(3,6,43)],
      checkBox: false, friends: ["3","4","5","9"],
      friend: true,
      status: "friend",
      card: "2"
    },
    {
      id: "3",
      name: "Michirisu",
      lvl: "89",
      matchStatistics: [new match(1,3,40), new match(3,2,26)],
      checkBox: false,
      friends: ["1","2"],
      friend: true,
      status: "friend",
      card: "3"
    },
    {
      id: "4",
      name: "J-Dawg",
      lvl: "1",
      matchStatistics: [new match(1,3,55), new match(3,6,75)],
      checkBox: false,
      friends: ["2"],
      friend: true,
      status: "friend",
      card: "4"
     },
    {
      id: "5",
      name: "Petitepinita",
      lvl: "29",
      matchStatistics: [new match(1,3,0), new match(1,4,71)],
      checkBox: false,
      friends: ["1","2","7","8"],
      friend: true,
      status: "friend",
      card: "5"
    },
    {
      id: "6",
      name: "MrMister",
      lvl: "50",
      matchStatistics: [new match(2,1,2)],
      checkBox: false,
      friends: ["1","9","10"],
      friend: true,
      status: "friend",
      card: "6"
    },
    {
      id: "7",
      name: "Meagzter",
      lvl: "7",
      matchStatistics: [new match(2,2,11), new match(3,6,81)],
      checkBox: false,
      friends: ["5","9","10"],
      friend: true,
      status: "friend",
      card: "7"
    },
    {
      id: "8",
      name: "Viktorious",
      lvl: "96",
      matchStatistics: [new match(3,0,0)],
      checkBox: false,
      friends: ["1","5"],
      friend: false,
      status: "notfriend",
      card: "8"
    },
    {
      id: "9",
      name: "4ld3gr3n",
      lvl: "11",
      matchStatistics: [new match(2,2,8)],
      checkBox: false,
      friends: ["1","2","6","7"],
      friend: false,
      status: "notfriend",
      card: "9"
    },
    {
      id: "10",
      name: "The_Shoulder",
      lvl: "82",
      matchStatistics: [new match(1,3,5), new match(3,1,15)],
      checkBox: false,
      friends: ["1","6","7"],
      friend: false,
      status: "notfriend",
      card: "3"
    },
    {
      id: "11",
      name: "SirYonyfy",
      lvl: "99",
      matchStatistics: [],
      checkBox: false,
      friends: [],
      friend: false,
      status: "notfriend",
      card: "11"
    },
  ]
  // particArr:[
    // { id : 1, name: "Victor", playedMatches: "2", points: "27", checkBox: false },
    //   { id : 2, name: "Miranda", playedMatches: "5", points: "13", checkBox: false },
    //   { id : 3, name: "Jesper", playedMatches: "1", points: "2", checkBox: false },
    //   { id : 4, name: "Robert", playedMatches: "2", points: "7", checkBox: false },
    //   { id : 5, name: "Pinar", playedMatches: "5", points: "99", checkBox: false },
    //   { id : 6, name: "Viktor", playedMatches: "1", points: "4", checkBox: false },
    // ],
    // usersArr:[
      //   { name: "Axel", lvl: "27", friend: true, status: "friend" },
      //   { name: "Constantine", lvl: "13", friend: true, status: "friend" },
      //   { name: "Moa", lvl: "2", friend: true, status: "friend" },
      //   { name: "Jesper", lvl: "99", friend: true, status: "friend" },
      //   { name: "Pinar", lvl: "7", friend: true, status: "friend" },
      //   { name: "Bo", lvl: "61", friend: true, status: "friend" },
      //   { name: "Robert", lvl: "75", friend: false, status: "notFriend" },
      //   { name: "Fredrik", lvl: "23", friend: false, status: "notFriend" },
      // ],
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

    case 'PLAYERS_SELECTED':
      return oldArr.map((item, index) => {
        return {
          ...item,
          checkBox: true
        }
      });

    case 'PLAYERS_CONFIRMED':
      return oldArr.map((item, index) => {
        return {
          ...item,
          checkBox: false
        }
      });

    case 'PLAYERS_DELETED':
      let playersToKick = action.payload;
      let newArr = oldArr.filter(item => !playersToKick.includes(item.name));
      return newArr;

    default:
      return oldArr;

  }
};

export default combineReducers ({
  tours: toursReducer,
  // partic: particReducer,
  users: usersReducer
});
