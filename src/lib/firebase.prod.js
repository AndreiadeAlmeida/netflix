import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// we need to somehow seed the database 


//we need a config here
const config = {
    apiKey: "AIzaSyCrwVBoJoxYZqdGG2ueSb5TZ8ResXOl1lU",
    authDomain: "netflix-de805.firebaseapp.com",
    projectId: "netflix-de805",
    storageBucket: "netflix-de805.appspot.com",
    messagingSenderId: "299526076177",
    appId: "1:299526076177:web:9c4f38fdd068847f983eb0",
    measurementId: "G-996YXY9GFR"
};

const firebase = Firebase.initializeApp(config);

// Ignorethis-seedDatabase(firebase); //

export { firebase };
