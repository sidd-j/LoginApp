//firebase config key

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQAOvQigNG8JAsI_DLsBx4HJ_43I-SHr0",
  authDomain: "test-98e70.firebaseapp.com",
  projectId: "test-98e70",
  storageBucket: "test-98e70.appspot.com",
  messagingSenderId: "419295570088",
  appId: "1:419295570088:web:866d02ce20c719818cba9d"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
