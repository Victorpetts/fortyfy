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

export const deletePlayers = participant => {
  return {
    type: 'PLAYERS_DELETED',
    payload: participant
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

export const inviteFriend = user => {
  return {
    type: 'FRIEND_INVITED',
    payload: user
  };
};
