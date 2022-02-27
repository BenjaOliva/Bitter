// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB96RDHsUHn0e7pdub_RCBiomf8BfrtuGc",
  authDomain: "bitter-d143f.firebaseapp.com",
  projectId: "bitter-d143f",
  storageBucket: "bitter-d143f.appspot.com",
  messagingSenderId: "473235686512",
  appId: "1:473235686512:web:4e890201104aaf657f60b5",
  measurementId: "G-DWYENM3MSE",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const mapUserData = (userLogged) => {
  const { displayName } = userLogged;
  const avatar_url = userLogged.photoURL;
  const userID = userLogged.reloadUserInfo.screenName;
  return {
    avatar: avatar_url,
    userName: displayName,
    userID,
  };
};

export const onAuthStateChanged = (onChange) => {
  return auth.onAuthStateChanged((user) => {
    const normalizeUser = user ? mapUserData(user) : null
    console.log(normalizeUser);
    onChange(normalizeUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, githubProvider).then(mapUserData)
};
