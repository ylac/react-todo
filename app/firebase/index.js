import firebase from 'firebase';

try {
  var config = {
     apiKey: "AIzaSyD4eZ1tsNQi4zjiJwAp-sHONvQYKVkQxr0",
     authDomain: "reacttodo-26935.firebaseapp.com",
     databaseURL: "https://reacttodo-26935.firebaseio.com",
     storageBucket: "reacttodo-26935.appspot.com",
     messagingSenderId: "173922982559"
   };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
