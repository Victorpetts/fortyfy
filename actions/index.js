export const selectSong = song => {

  return {
    type: 'SONG_SELECTED',
    payload: song
  };

};

export const createTour = tour => {

  return {
    type: 'TOURNAMENT_CREATED',
    payload: tour
  };

};
