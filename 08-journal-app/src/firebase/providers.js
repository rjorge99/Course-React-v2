import { FirebaseAuth } from './config';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        };
    }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = result.user;

        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        };
    }
};

export const loginWithEmailPassword = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        return {
            ok: true,
            uid: user.uid,
            photoURL: user.photoURL,
            email,
            displayName: user.displayName
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        };
    }
};

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
};
