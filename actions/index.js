export const selectSong = song => {

  return {
    type: 'SONG_SELECTED',
    payload: song
  };

};

export const createTour = newTour => {

  return {
    type: 'TOURNAMENT_CREATED',
    payload: newTour
  };

};
