import * as firebase from 'firebase/app';
import 'firebase/auth';

const Firebase = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
});

export default Firebase;

export const logout = () => Firebase.auth().signOut();

export const login = (email, password) =>
  Firebase.auth().signInWithEmailAndPassword(email, password);

export const signUp = (email, password) =>
  Firebase.auth().createUserWithEmailAndPassword(email, password);

export const verifyAuth = () =>
  new Promise((resolve, reject) => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not logged'));
      }
    });
  });
