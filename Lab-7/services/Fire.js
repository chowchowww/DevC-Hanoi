import * as firebase from 'firebase';
import 'firebase/firestore';
import { YellowBox } from 'react-native';

const firebaseConfig = require('../config');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

YellowBox.ignoreWarnings(['Setting a timer for a long period of time']);

const database = firebase.firestore();

export default database;