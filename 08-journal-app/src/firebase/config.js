import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDxh3RcA5LNbF2jNViSM7JvxZ6oXigsYik',
    authDomain: 'react-curso-1c7ad.firebaseapp.com',
    projectId: 'react-curso-1c7ad',
    storageBucket: 'react-curso-1c7ad.appspot.com',
    messagingSenderId: '569527417206',
    appId: '1:569527417206:web:5685fdb7b1516410f8e257'
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
