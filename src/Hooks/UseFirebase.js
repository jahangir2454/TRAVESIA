import FirebaseInit from "../Firebase/firebase.init";
import {getAuth, GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";

FirebaseInit();
const UseFirebase = () => {
    const [user,setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading,setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google sign in function
    const googleSignIn = () => {
       
       return signInWithPopup(auth,googleProvider)
    }

    // create email and pass 
    const signUp = (email, password) => {
        
       return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // Sign In part 
    const signIn = (email, password) => {
       
       return signInWithEmailAndPassword(auth,email,password)
   }
   // sign Out part 
    const signout = () => {
      signOut(auth)
          .then(() => {
             setIsLoading(true);
         setUser({})
          }).catch(error => {
             setError(error.message)
          }).finally(() => {
             setIsLoading(false);
         })
   }
   // 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
               setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe();
   },[])
    return {
        googleSignIn,
        user,
        setUser,
        error,
        setError,
        signUp,
       signIn,
        signout,
        setIsLoading,
      isLoading,
    }
}
export default UseFirebase;