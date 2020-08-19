import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

// apiKey: "AIzaSyBJDHNqiNLNontXbzA35lVDPJMsqZxDxvs",
//   authDomain: "firesbasedemo-b52a7.firebaseapp.com",
//   projectId: "firesbasedemo-b52a7",
//   databaseURL: "https://firesbasedemo-b52a7.firebaseio.com",
//   storageBucket: "firesbasedemo-b52a7.appspot.com",
//   messagingSenderId: "1007483111762",
//   appId: "1:1007483111762:web:c8400c6a9a0cb23a9b928b",
//   measurementId: "G-PQGWCXJJSS"
const firebaseConfig = {
  apiKey: "AIzaSyDahr9tPwzI8Y8k1OpVDWuqmHWyhh9V_qQ",
  authDomain: "devctourial.firebaseapp.com",
  databaseURL: "https://devctourial.firebaseio.com",
  projectId: "devctourial",
  storageBucket: "devctourial.appspot.com",
  messagingSenderId: "791776621744",
  appId: "1:791776621744:web:6f8d97f3e262fa73be7775",
  measurementId: "G-M6GYJTB05F"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
//export const database = firebase.database();

export default firebase;

//TODO: COPY THIS TO IGNORE WARNING LOG
//import { LogBox } from 'react-native';
//LogBox.ignoreLogs([''])
