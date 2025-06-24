import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "b2-lesen-quest-german.firebaseapp.com",
  projectId: "b2-lesen-quest-german",
  storageBucket: "b2-lesen-quest-german.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "YOUR_APP_ID"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
