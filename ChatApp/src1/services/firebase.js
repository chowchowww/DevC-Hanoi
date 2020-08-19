import * as Firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = require('../../config.json');

Firebase.initializeApp(firebaseConfig);

const database = Firebase.firestore();

export default database;