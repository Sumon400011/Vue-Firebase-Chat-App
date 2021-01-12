import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyDkt1T4nFXiioqIOZp4x7PuAPL4Z84DqHw",
    authDomain: "firevuechat-7c2a5.firebaseapp.com",
    projectId: "firevuechat-7c2a5",
    storageBucket: "firevuechat-7c2a5.appspot.com",
    messagingSenderId: "595676664858",
    appId: "1:595676664858:web:c6c9809c8026a5082feda3"
}

const db = firebase.initializeApp(config);

export default db;