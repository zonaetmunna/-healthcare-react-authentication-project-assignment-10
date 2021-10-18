import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Componants/Pages/Login/Firebase/Firebase.init";
initializeAuthentication();



const useFirebase = () => {
     const [user, setUser] = useState({})
     const [isLoading, setIsLoading] = useState(true);

     const [email, setEmail] = useState('')
     const [password, setpassword] = useState('')
     const [error, setError] = useState('')
     const [isLogin, setIsLogin] = useState(false);

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

     // google sign in
     const signInWithGoogle = () => {
          setIsLoading(true)
          return signInWithPopup(auth, googleProvider)

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

     // Github sign in
     const signInWithGithub = () => {
          return signInWithPopup(auth, githubProvider)

     }
     // login email and password based
     const toggleLogin = (e) => {
          setIsLogin(e.target.checked);
          console.log(e.target.checked);
     }
     // email
     const getEmail = (e) => {
          setEmail(e.target.value);
          console.log(e.target.value);
     }
     // password
     const getPassword = (e) => {
          setpassword(e.target.value);
          console.log(e.target.value);
     }
     // submit
     const handleSubmit = (e) => {
          e.preventDefault();
          if (password.length < 6) {
               setError("at lest 6 digit");
               return;
          }
          isLogin ? signInUserAccount(email, password) : createUserAccount(email, password);


     }

     const signInUserAccount = (email, password) => {
          signInWithEmailAndPassword(auth, email, password)
               .then(result => {
                    setUser(result.user)
                    console.log(result.user);
               })
     }

     const createUserAccount = (email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then(result => {
                    setUser(result.user)
                    console.log(result.user);
               })
     }

     return {
          signInWithGoogle,
          user,
          logOut,
          isLoading,
          signInWithGithub,

          toggleLogin,
          isLogin,
          handleSubmit,
          getEmail,
          getPassword,
          createUserAccount


     }

}
export default useFirebase;