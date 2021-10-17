import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Componants/Pages/Login/Firebase/Firebase.init";
initializeAuthentication();



const useFirebase = () => {
     const [user, setUser] = useState({})
     const [isLoading, setIsLoading] = useState(true);

     const [email, setEmail] = useState('')
     const [password, setpassword] = useState('')
     const [error, setError] = useState('')

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     // google sign in
     const signInWithGoogle = () => {
          setIsLoading(true)
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    setUser(result.user)
               })
               .finally(() => setIsLoading(false))

     }
     // logout
     const logOut = () => {
          signOut(auth)
               .then(() => {
                    setUser('')

               })
               .finally(() => setIsLoading(false))
     }

     useEffect(() => {
          setIsLoading(true)
          const unsubscribed = onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user)
               }
               else {
                    setUser({})
               }
               setIsLoading(false)
          })
          return () => unsubscribed;
     }, [])

     const getEmail = (e) => {
          setEmail(e.target.value);
     }
     const getPassword = (e) => {
          setpassword(e.target.value)
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          if (password.length < 6) {
               setError("at lest 6 digit");
               return;
          }
          signInUserAccount(email, password);
          createUserAccount(email, password)
     }

     const signInUserAccount = (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
               .then(result => {
                    setUser(result.user)
               })
     }

     const createUserAccount = (email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then(result => {
                    setUser(result.user)
               })
     }

     return {
          signInWithGoogle,
          user,
          logOut,
          isLoading,

          handleSubmit,
          getEmail,
          getPassword,
          createUserAccount


     }

}
export default useFirebase;