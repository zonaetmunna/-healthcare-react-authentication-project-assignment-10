import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Componants/Pages/Login/Firebase/Firebase.init";
initializeAuthentication();



const useFirebase = () => {
     const [user, setUser] = useState({})
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     const signInWithGoogle = () => {
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    setUser(result.user)
               })

     }

     const logOut = () => {
          signOut(auth)
               .then(() => {
                    setUser('')

               })
     }

     return {
          signInWithGoogle,
          user,
          logOut
     }

}
export default useFirebase;