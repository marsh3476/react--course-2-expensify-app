import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses);
//   })


// database.ref('expenses')
//   .on('value', (dataSnapshot) => {
//     const expenses = [];
//     dataSnapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     })
//     console.log(expenses);
//   })
  

// database.ref('expenses').push({
//   description: 'new expense',
//   note: '',
//   amount: 3,
//   createdAt: 53454
// });

// database.ref('expenses').push({
//   description: 'HELLo',
//   note: '',
//   amount: 3,
//   createdAt: 53454
// });





// database.ref('notes').push({
//   title: 'New stuff',
//   body: 'react-native, angular'
// });


// database.ref('notes').set(firebaseNotes);





// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val().newName
//               + ' is a '
//               + snapshot.val().job.title
//               + ' at ' + snapshot.val().job.company);
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//  console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching: ', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500)
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000)
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500)

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {

//   });

// database.ref().set({
//   newName: 'Andrew',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   },

// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'

// });

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('succesfully removed');
//   })
//   .catch((e) => {
//     console.log('error: ' + e);
//   });



