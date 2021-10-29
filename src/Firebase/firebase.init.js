import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const FirebaseInit = () => {
    return initializeApp(firebaseConfig);
}
export default FirebaseInit;