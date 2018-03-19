import * as firebase from 'firebase'

const config = {
   apiKey: "AIzaSyCKeEkxbuucu7stv6SOqyY1oDtlGUMFjeo",
   authDomain: "expenseapp-274c3.firebaseapp.com",
   databaseURL: "https://expenseapp-274c3.firebaseio.com",
   projectId: "expenseapp-274c3",
   storageBucket: "expenseapp-274c3.appspot.com",
   messagingSenderId: "114851322896"
 };

 firebase.initializeApp(config);

 const database = firebase.database()

export { firebase, database as default }
