export const createTour = newTour => {
  return {
    type: 'TOURNAMENT_CREATED',
    payload: newTour
  };
};

export const endTournament = tour => {
  return {
    type: 'TOURNAMENT_ENDED',
    payload: tour
  };
};

export const selectPlayer = users => {
  return {
    type: 'PLAYERS_SELECTED',
    payload: users
  };
};

export const confirmPlayer = users => {
  return {
    type: 'PLAYERS_CONFIRMED',
    payload: users
  };
};

export const deletePlayers = users => {
  return {
    type: 'PLAYERS_DELETED',
    payload: users
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

export const sendRequest = user => {
  return {
    type: 'FRIEND_REQUEST_SENT',
    payload: user
  };
};
