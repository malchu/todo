import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYMoNvIBoQ-xBxEgWXDRm3KlEt4egVaiA",
    authDomain: "todo-bb936.firebaseapp.com",
    projectId: "todo-bb936",
    storageBucket: "todo-bb936.appspot.com",
    messagingSenderId: "1041832947785",
    appId: "1:1041832947785:web:9214cb4b9d031e3f9b0f98",
    measurementId: "G-0NJY5FL05L"
  };

    // Use this to initialize the firebase App
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    // Use these for db & auth
    const db = firebaseApp.firestore();
    const auth = firebase.auth();

    export { auth, db };