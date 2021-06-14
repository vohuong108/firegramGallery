import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzacvUKMOHC3iZF0usd84h-O18JeltH5Q",
  authDomain: "firegram-5882d.firebaseapp.com",
  databaseURL: "https://firegram-5882d-default-rtdb.firebaseio.com",
  projectId: "firegram-5882d",
  storageBucket: "firegram-5882d.appspot.com",
  messagingSenderId: "242042206147",
  appId: "1:242042206147:web:2410dda6648e484f83af76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };