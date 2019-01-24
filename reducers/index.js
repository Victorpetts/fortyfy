import { combineReducers } from 'redux';

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


const toursReducer = () => {

  return [
    { name: "Mirandas Turnering", players: "5" },
    { name: "Victors Turnering", players: "10" },
  ];
};

const newTournamentReducer = (newTour=null, action) => {

  if (action.type === 'TOURNAMENT_CREATED') {
    return action.payload;
  }

  return newTour;

};

export default combineReducers ({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  tours: toursReducer,
  newTour: newTournamentReducer
});
