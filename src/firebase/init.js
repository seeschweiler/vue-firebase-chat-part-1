var config = {
    apiKey: "AIzaSyBBHnR9gQG8Te7UZ0LPD05eaN2peLRydSo",
    authDomain: "vuejs-firebase-01.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-01.firebaseio.com",
    projectId: "vuejs-firebase-01",
    storageBucket: "vuejs-firebase-01.appspot.com",
    messagingSenderId: "726812619425"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true});

  export default firebaseApp.firestore();