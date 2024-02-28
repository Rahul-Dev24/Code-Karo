import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7zmswn-Cm4iD1QUXMmiZUIa79cWsYBEU",
  authDomain: "code-karo-9abe1.firebaseapp.com",
  projectId: "code-karo-9abe1",
  storageBucket: "code-karo-9abe1.appspot.com",
  messagingSenderId: "392059025267",
  appId: "1:392059025267:web:5095040cfe808c12707706",
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGESENDERID,
  // appId: process.env.REACT_APP_APPID,
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };
