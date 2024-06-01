// firebaseConfig.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAeWtkRf5IeolaA17SQd2c-AJ6TNIsrLVo',
  authDomain: 'mabportal-c890a.firebaseapp.com',
  projectId: 'mabportal-c890a',
  storageBucket: 'mabportal-c890a.appspot.com',
  messagingSenderId: '1087019305282',
  appId: '1:1087019305282:ios:ed9fa68c616330cdef20db',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
