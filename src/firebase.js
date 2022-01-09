import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCPpRtk2A8dHSCJrS5QCRsgqeVBZl_vWL4",
  authDomain: "netflix-clone-1b36e.firebaseapp.com",
  projectId: "netflix-clone-1b36e",
  storageBucket: "netflix-clone-1b36e.appspot.com",
  messagingSenderId: "436009712064",
  appId: "1:436009712064:web:84b743e6378d3523d1b025",
});

export const auth = app.auth();
export default app;
