import { initializeApp } from "firebase/app";
import firebaseConfig from "./firesbase.config";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;