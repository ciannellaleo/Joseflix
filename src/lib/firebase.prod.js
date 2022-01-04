import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Aqui precisamos fazer o "seeding" do database

// Configuração do Firebase

const config = {
    apiKey: "AIzaSyDXbcoCi6x-tdiq0SyXavpeeKqFS3Mh7Bg",
    authDomain: "netflix-copy-240c0.firebaseapp.com",
    projectId: "netflix-copy-240c0",
    storageBucket: "netflix-copy-240c0.appspot.com",
    messagingSenderId: "1002465582957",
    appId: "1:1002465582957:web:beab84fb65069f90650464"
};

const app = firebase.initializeApp(config);


export { app };