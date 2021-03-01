import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC_j7Rm3d1xTVQBq511r5VVZFP09mb8sdY",
  authDomain: "ninja-firegram-dad8b.firebaseapp.com",
  projectId: "ninja-firegram-dad8b",
  storageBucket: "ninja-firegram-dad8b.appspot.com",
  messagingSenderId: "590769354321",
  appId: "1:590769354321:web:50484ad5cca36dbd102a70"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };