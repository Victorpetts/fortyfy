import firebase from 'firebase';

let config = {
    databaseURL: 'https://fortyfy-1337.firebaseio.com',
    projectId: 'fortyfy-1337',
  };
  let app = firebase.initializeApp(config);
  export const db = app.database();