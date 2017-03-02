import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyD4eZ1tsNQi4zjiJwAp-sHONvQYKVkQxr0",
   authDomain: "reacttodo-26935.firebaseapp.com",
   databaseURL: "https://reacttodo-26935.firebaseio.com",
   storageBucket: "reacttodo-26935.appspot.com",
   messagingSenderId: "173922982559"
 };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Caly',
    age: 25
  }
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the cat!'
// });
//
// console.log('Todo id', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Eat lunch'
});

todosRef.push({
  text: 'Rest'
});
