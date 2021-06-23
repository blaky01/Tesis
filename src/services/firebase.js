import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPdtb-_Lqaqh_lLQb088M9YxWTi808Rk4',
  authDomain: 'tesis-login-8fe2a.firebaseapp.com',
  projectId: 'tesis-login-8fe2a',
  storageBucket: 'tesis-login-8fe2a.appspot.com',
  messagingSenderId: '751702807812',
  appId: '1:751702807812:web:380e8f23cee791fc36ac51',
};
// Initialize Firebase
const firebaseInstance = firebase.initializeApp(firebaseConfig);

export default firebaseInstance;
