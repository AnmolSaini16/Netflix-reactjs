import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAZMJJojzKDeDzfjCHBDZVBVsUYBOPIWz0",
    authDomain: "netflix-clone-69898.firebaseapp.com",
    projectId: "netflix-clone-69898",
    storageBucket: "netflix-clone-69898.appspot.com",
    messagingSenderId: "570760042146",
    appId: "1:570760042146:web:f509c1d29eac865fc269fb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export { auth }
  export default db;