// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBA75K92yIzYZ15bJl-9Qu_Ym9AAxu07Do',
  authDomain: 'clothin-app-6b6a3.firebaseapp.com',
  projectId: 'clothin-app-6b6a3',
  storageBucket: 'clothin-app-6b6a3.firebasestorage.app',
  messagingSenderId: '158222984848',
  appId: '1:158222984848:web:3962c58d74817d4b505a15',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

// auth
export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnaphot = await getDoc(userDocRef);
  console.log(userSnaphot.exists());
  if (!userSnaphot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userDocRef;
};
