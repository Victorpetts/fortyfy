import { combineReducers } from 'redux';

const initialState = {
  arr:[]
}

const songsReducer = () => {

  return [
    { title: "Master of Puppets", duration: "4:20" },
    { title: "Unforgiven", duration: "3:10" },
    { title: "Ride the Lightning", duration: "3:50" },
    { title: "Fade to Black", duration: "3:20" },
    { title: "For Whom the Bell Tolls", duration: "3:20" }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {

  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;

};


const toursReducer = (firstToursArr=initialState) => {

  return firstToursArr.arr;
};

const newTournamentReducer = (updatedToursArr=initialState, action) => {

  if (action.type === 'TOURNAMENT_CREATED') {
    return {
         ...updatedToursArr,
         updatedToursArr: [...updatedToursArr.arr, action.payload]
     }
  }

  return updatedToursArr;

};

export default combineReducers ({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  tours: toursReducer,
  updatedToursArr: newTournamentReducer
});
