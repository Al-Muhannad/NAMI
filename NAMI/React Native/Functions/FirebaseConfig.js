import { initializeApp} from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
 // apiKey: "KEY Remove for Security Purposes",
  //authDomain: "Domain Remove for Security Purposes",
 // projectId: "ID Remove for Security Purposes",
 //storageBucket: "ID Remove for Security Purposes",
 //messagingSenderId: "ID Remove for Security Purposes",
  //appId: "ID Remove for Security Purposes",
  //measurementId: "ID Remove for Security Purposes"
};

// initialize Firebase App
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);

export {auth,db};

