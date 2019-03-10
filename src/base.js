import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvPitcnLqqcB-WKU7Rg5gVOcRAF1pt4TU",
  authDomain: "agh-catch-of-the-day.firebaseapp.com",
  databaseURL: "https://agh-catch-of-the-day.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;