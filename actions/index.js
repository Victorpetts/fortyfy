
export const createTour = newTour => {

  return {
    type: 'TOURNAMENT_CREATED',
    payload: newTour
  };

};

export const addPlayer = partic => {

  return {
    type: 'PLAYER_ADDED',
    payload: partic
  };

};
