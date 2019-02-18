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

export const selectPlayer = partic => {
  return {
    type: 'PLAYER_SELECTED',
    payload: partic
  };
};

export const confirmPlayer = partic => {
  return {
    type: 'PLAYER_CONFIRMED',
    payload: partic
  };
};

export const acceptFriend = user => {
  return {
    type: 'FRIEND_ACCEPTED',
    payload: user
  };
};

export const denyFriend = user => {
  return {
    type: 'FRIEND_DENIED',
    payload: user
  };
};
