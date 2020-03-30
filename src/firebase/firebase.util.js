import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDm_SVJaNh_gakIXcSnohAeYzQ3AhHCRGg",
  authDomain: "e-commerce-3a946.firebaseapp.com",
  databaseURL: "https://e-commerce-3a946.firebaseio.com",
  projectId: "e-commerce-3a946",
  storageBucket: "e-commerce-3a946.appspot.com",
  messagingSenderId: "646010386397",
  appId: "1:646010386397:web:999b2eb82f9e0b2e6e6834"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const userProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData
      });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }

  return userRef;
};
export default firebase;
