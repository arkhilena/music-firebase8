import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCEXS1zz_5tm8-hH4c6JrYofynGuF6P85g",
  authDomain: "music-fb8.firebaseapp.com",
  projectId: "music-fb8",
  storageBucket: "music-fb8.appspot.com",
  messagingSenderId: "213160927969",
  appId: "1:213160927969:web:e2e979d7cebe907d0c4da0"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

