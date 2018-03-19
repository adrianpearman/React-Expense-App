// database.ref('expenses').push({
//   description: 'Expense #1',
//   note: 'First Expense',
//   amount: '1',
//   createdAt: 1000
// })

// database.ref('expenses').push({
//   description: 'Expense #2',
//   note: 'Second Expense',
//   amount: '2',
//   createdAt: 1000
// })
//
// database.ref('expenses').push({
//   description: 'Expense #3',
//   note: 'Third Expense',
//   amount: '3',
//   createdAt: 1000
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//
//     console.log(expenses);
// })
//
// // displays the list of expense values
// database.ref('expenses').on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.log('An error has occured: ', err);
// })
//
// // displays the child element that was changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.log('An error has occured: ', err);
// })
//
// // displays the added child list item
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.log('An error has occured: ', err);
// })
//
// // displays the removed child list item
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.log('An error has occured: ', err);
// })



 // -------- FIREBASE 101 -------- //

 // Setting the initial values of the database
 // database.ref().set({
 //   name:'adrian',
 //   age: 26,
 //   isFat: true,
 //   stressLevel: '100',
 //   job:{
 //     title: 'Web Developer',
 //     company: 'Self Employed'
 //   },
 //   location: {
 //     city: 'Toronto',
 //     country: 'Canada'
 //   }
 // }).then((value) => {
 //   console.log('The data is saved');
 // }).catch((err) => {
 //   console.log('An error has occured: ', err);
 // })

// Updating information within the database
// database.ref('attributes').set({
//   IQ: 102,
//   speed: 'not slow',
//   endurance: 'subpar'
// }).then(()=> {
//   console.log('the data was saved')
// }).catch((err) => {
//   console.log('An error has occured: ', err);
// })

// database.ref().update({
//   stressLevel: '100000',
//   'job/company': 'THESE STREETS',
//   'location/city': 'Moncton'
// }).then(() => {
//   console.log('the data was successfully updated');
// }).catch((err) => {
//   console.log('An error has occured: ', err);
// })

// deleteing information from a database
// database.ref('isFat').remove()
// .then(() => {
//   console.log('the data was successfully removed');
// }).catch((err) => {
//   console.log('An error has occured: ', err);
// })

// reading information from the database
// database.ref().once('value')
// .then((snapshot) => {
//   const val = snapshot.val()
//   console.log(val);
// }).catch((err) => {
//   console.log(err);
// })


// this will read and show updates automatically from the database
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.log('An error has occured: ', err);
// })

// Watching for age change with setTimeout
// setTimeout(() => {
//   database.ref('age').set(27)
// }, 3000)
//
// Removes the console prompt with the change in data
// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 6000)
//
// setTimeout(() => {
//   database.ref('age').set(30)
// }, 9000)

// Watching for name changes using setTimeout
// setTimeout(() => {
//   database.ref('name').set('ADRIAN')
// }, 3000)
//
// Removes the console prompt with the change in data
// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 6000)
//
// setTimeout(() => {
//   database.ref('name').set('Adrian')
// }, 9000)

// Reads a value fro the database and prints to the console
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`Hello my name is ${val.name} and I currently work at ${val.job.company} as a ${val.job.title}`);
// })


// Utilizing firebase's version of arrays
// Adding a value to the list
// database.ref('notes').push({
//   title: 'To Do',
//   body: 'React'
// })

// Updating a value within the array
// database.ref('notes/-L7yatS7aojAOl_AKcj7').update({
//   body: 'Ruby, Javascript, HTML5'
// })

// Removing a list value
// database.ref('notes/-L7yaWB-GA74Zu4UITBQ').remove()
