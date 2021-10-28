import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD9G1qmChsTexL4qUziDFa_jEW5bFM0NP8",
  authDomain: "expensetracker-32072.firebaseapp.com",
  projectId: "expensetracker-32072",
  storageBucket: "expensetracker-32072.appspot.com",
  messagingSenderId: "100519375219",
  appId: "1:100519375219:web:45d73c9986b66511dbd506"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }