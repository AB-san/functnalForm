import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB1TMo_-qr5DS0Wji_2AA-WLeF4apnzuZA",
    authDomain: "potent-duality-295706.firebaseapp.com",
    projectId: "potent-duality-295706",
    storageBucket: "potent-duality-295706.appspot.com",
    messagingSenderId: "996297820065",
    appId: "1:996297820065:web:cc74a4ecfc4aba681eede0",
    measurementId: "G-V58N6KHE9C"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;