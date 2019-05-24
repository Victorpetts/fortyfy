import { combineReducers } from 'redux';

class match {
  constructor(matchId, playedMatches, points) {
    this.matchId = matchId;
    this.playedMatches = playedMatches;
    this.points = points;
  }
}

const initialState = {
  toursArrNew:[],
  toursArr: [
    {
      id: 1,
      name: require("../assets/images/redbullcom-logo.png"),
      participants: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      players: 400,
      wincon: "2",
      totalMatches: 10,
      fromDate: "1st of May 14:00",
      toDate: "8th of May 21:00",
      finished: false,
      owner: "Red Bull",
      sponsor: true,
      reward: false,
      joined: false
    },
    {
      id: 2,
      name: require("../assets/images/corsair-logo.png"),
      participants: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      players: 500,
      wincon: "1",
      totalMatches: 8,
      fromDate: "29th of April 06:00",
      toDate: "30th of April 23:59",
      finished: false,
      owner: "Corsair",
      sponsor: true,
      reward: false,
      joined: true
    },
    {
      id: 3,
      name: require("../assets/images/logitech-logo.png"),
      participants: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      players: 200,
      wincon: "2",
      totalMatches: 2,
      fromDate: "23th of April 06:00",
      toDate: "23th of April 23:59",
      finished: true,
      owner: "Logitech",
      sponsor: true,
      reward: true,
      joined: true
    },
    {
      id: 4,
      name: require("../assets/images/steelseries-logo.png"),
      participants: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      players: 150,
      wincon: "1",
      totalMatches: 5,
      fromDate: "28th of April 07:00",
      toDate: "29th of April 07:00",
      finished: false,
      owner: "Steelseries",
      sponsor: true,
      reward: false,
      joined: false
    },
    {
      id: 5,
      name: require("../assets/images/razer-logo.png"),
      participants: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      players: 50,
      wincon: "2",
      totalMatches: 3,
      fromDate: "28th of April 07:00",
      toDate: "29th of April 07:00",
      finished: true,
      owner: "Razer",
      sponsor: true,
      reward: false,
      joined: true
    },
  ],
  usersArr: [
    {
      id: 1,
      name: "Vicky",
      lvl: 27,
      matchStatistics: [new match(1, 10, 17), new match(2, 8, 5), new match(3, 2, 26), new match(4, 5, 5), new match(5, 3, 5)],
      checkBox: false,
      friend: true,
      status: "friend",
      card: require("../assets/images/playercards/cardUnicorn.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardUnicorn.png"),
      currentPoints: 0,
      ingameName: "VanDeVoo"
    },
    {
      id: "2",
      name: "Antonius",
      lvl: "13",
      matchStatistics: [new match(1, 9, 27), new match(2, 8, 1), new match(3, 2, 2), new match(4, 1, 1), new match(5, 3, 15)],
      checkBox: false,
      friend: true,
      status: "friend",
      card: require("../assets/images/playercards/cardGems.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardGems.png"),
      currentPoints: 0,
      ingameName: "Ninja"
    },
    {
      id: "3",
      name: "Michirisu",
      lvl: "89",
      matchStatistics: [new match(1, 2, 0), new match(2, 2, 2), new match(3, 2, 6), new match(4, 2, 0), new match(5, 3, 5)],
      checkBox: false,
      friend: true,
      status: "friend",
      card: require("../assets/images/playercards/cardMagic.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardMagic.png"),
      currentPoints: 0,
      ingameName: "ScreeFN"
    },
    {
      id: "4",
      name: "J-Dawg",
      lvl: "15",
      matchStatistics: [new match(1, 8, 15), new match(2, 2, 0), new match(3, 2, 0), new match(4, 5, 5), new match(5, 3, 1)],
      checkBox: false,
      friend: true,
      status: "friend",
      card: require("../assets/images/playercards/cardPirate.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardPirate.png"),
      currentPoints: 0,
      ingameName: "vRxthless"
    },
    {
      id: "5",
      name: "Petitepinita",
      lvl: "29",
      matchStatistics: [new match(1, 0, 0), new match(2, 8, 0), new match(3, 2, 0), new match(4, 4, 2), new match(5, 3, 12)],
      checkBox: false,
      friend: true,
      status: "friend",
      card: require("../assets/images/playercards/cardCheetah.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardCheetah.png"),
      currentPoints: 0,
      ingameName: "cRaBBLe%20McShiet"
    },
    {
      id: "6",
      name: "MrMister",
      lvl: "3",
      matchStatistics: [new match(1, 1, 7), new match(2, 3, 2), new match(3, 2, 1), new match(4, 1, 1), new match(5, 3, 19)],
      checkBox: false,
      friend: true,
      status: "friend",
      card: require("../assets/images/playercards/cardSimplePurple.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardSimplePurple.png"),
      currentPoints: 0,
      ingameName: "iigle"
    },
    {
      id: "7",
      name: "Meagzter",
      lvl: "7",
      matchStatistics: [new match(1, 10, 38), new match(2, 0, 0), new match(3, 2, 11), new match(4, 0, 0), new match(5, 3, 2)],
      checkBox: false,
      friend: true,
      status: "friend",
      card: require("../assets/images/playercards/cardSpider.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardSpider.png"),
      currentPoints: 0,
      ingameName: "Nuzucki"
    },
    {
      id: "8",
      name: "Viktorious",
      lvl: "96",
      matchStatistics: [new match(1, 1, 3), new match(2, 8, 6), new match(3, 2, 3), new match(4, 0, 0), new match(5, 3, 9)],
      checkBox: false,
      friend: false,
      status: "notFriend",
      card: require("../assets/images/playercards/cardSimpleGold.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardSimpleGold.png"),
      currentPoints: 0,
      ingameName: "KamoLRF"
    },
    {
      id: "9",
      name: "4ld3gr3n",
      lvl: "11",
      matchStatistics: [new match(1, 9, 17), new match(2, 1, 1), new match(3, 2, 12), new match(4, 5, 4), new match(5, 3, 11)],
      checkBox: false,
      friend: false,
      status: "notFriend",
      card: require("../assets/images/playercards/cardUfo.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardUfo.png"),
      currentPoints: 0,
      ingameName: "E11%20BlooTea"
    },
    {
      id: "10",
      name: "The_Shoulder",
      lvl: "82",
      matchStatistics: [new match(1, 5, 6), new match(2, 2, 0), new match(3, 2, 6), new match(4, 3, 2), new match(5, 3, 13)],
      checkBox: false,
      friend: false,
      status: "notFriend",
      card: require("../assets/images/playercards/cardRobot.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardRobot.png"),
      currentPoints: 0,
      ingameName: "WBG%20Ranger"
    },
    {
      id: "11",
      name: "SirYonyfy",
      lvl: "99",
      matchStatistics: [new match(1, 0, 0), new match(2, 6, 6), new match(3, 2, 27), new match(4, 0, 0), new match(5, 3, 7)],
      checkBox: false,
      friends: [],
      friend: '',
      status: '',
      card: require("../assets/images/playercards/cardSirYonyfy.png"),
      cardFull: require("../assets/images/playercards/fullsize/cardSirYonyfy.png"),
      currentPoints: 0,
      ingameName: "TTV.Uwatakashi",
      coins: 4000
    }
  ]
}


const toursReducer = (oldArr = initialState.toursArr, action) => {
  switch (action.type) {

    case 'TOURNAMENT_CREATED':
      let newToursArr = [...oldArr, action.payload]
      return newToursArr;

    case 'TOUR_JOINED':
      return oldArr.map((item, index) => {
        if (item.id === action.payload) {
          return {
            ...item,
            joined: true,
            participants: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
          }
        }
        return item;
      });

    case 'TOURNAMENT_ENDED':
      return oldArr.map((item, index) => {
        if (item.name === action.payload) {
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
        if (item.id === action.payload) {
          return {
            ...item,
            friend: true
          }
        }
        return item;
      });

    case 'FRIEND_DENIED':
      return oldArr.map((item, index) => {
        if (item.id === action.payload) {
          return {
            ...item,
            friend: ''
          }
        }
        return item;
      });

    case 'FRIEND_REQUEST_SENT':
      return oldArr.map((item, index) => {
        if (item.id === action.payload) {
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

    case 'SCORE_RETRIEVED':
      return oldArr.map((item, index) => {
        if (item.id === action.payload.userId) {
          return {
            ...item,
            currentPoints: action.payload.points
          }
        }
        return item;
      });

    case 'COINS_WITHDRAWN':
    return oldArr.map((item) => {
      if (item.id === "11") {
        return {
          ...item,
          coins: item.coins - action.payload
        }
      }
      return item;
    });

    case 'COINS_OBTAINED':
    return oldArr.map((item) => {
      if (item.id === "11") {
        return {
          ...item,
          coins: item.coins + action.payload
        }
      }
      return item;
    });

    default:
      return oldArr;

  }
};

export default combineReducers({
  tours: toursReducer,
  users: usersReducer
});
