import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCY7Bffc184TmYsN9HtwFuNsNSoW0AYq6Y",
  authDomain: "idea-garden-6afa3.firebaseapp.com",
  projectId: "idea-garden-6afa3",
  storageBucket: "idea-garden-6afa3.appspot.com",
  messagingSenderId: "818923857206",
  appId: "1:818923857206:web:4b9dadd125d0eecd8a3f97",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;
export default fire;
