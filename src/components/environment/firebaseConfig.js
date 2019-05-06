import firebase from '@firebase/app';
import '@firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyBxt0ML5vtoUk_9k1h4ZT6mF2ZAWLdRAgY",
    authDomain: "rn-login-dd3ca.firebaseapp.com",
    databaseURL: "https://rn-login-dd3ca.firebaseio.com",
    projectId: "rn-login-dd3ca",
    storageBucket: "rn-login-dd3ca.appspot.com",
    messagingSenderId: "867465722315"
};

let instance = null;

class FirebaseService {
    constructor(){
        if (!instance){
            this.app = firebase.initializeApp(config);
            instance = this;
        }
        return instance
    }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
