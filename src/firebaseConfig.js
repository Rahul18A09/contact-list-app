import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// IMPORTANT: Replace these with your actual Firebase config keys!
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY_HERE",
//   authDomain: "contact-list-app-5360b.firebaseapp.com",
//   projectId: "contact-list-app-5360b",
//   storageBucket: "contact-list-app-5360b.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDIRuKjfsFsBN9aC-vL9QpMx9b0-1ofq_w",
  authDomain: "contact-list-app-5360b.firebaseapp.com",
  databaseURL: "https://contact-list-app-5360b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contact-list-app-5360b",
  storageBucket: "contact-list-app-5360b.firebasestorage.app",
  messagingSenderId: "31055718023",
  appId: "1:31055718023:web:3044fff9dcf9997f8afa22"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
