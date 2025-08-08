import { getApp, getApps, ReactNativeFirebase } from '@react-native-firebase/app';


type FirebaseApp = ReactNativeFirebase.FirebaseApp;
let firebaseApp: FirebaseApp | null = null;


export const initFirebaseApp = (): FirebaseApp => {
    if (!firebaseApp) {
        firebaseApp = getApps().length === 0 ? getApp() : getApps()[0];
    }
    return firebaseApp;
};
