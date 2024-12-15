/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "@/firebase/firebase.auth";
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorState, setErrorState] = useState(false);
    const provider = new GoogleAuthProvider();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              setLoggedInUser(user);
            } else {
              // User is signed out
              // ...
              setLoading(false);
              console.log("User Logged out!")
            }
          });

          return(() => unsubscribe());
    },[]);

    function signInUser(email, password){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
        const user = userCredential.user;
        setLoggedInUser(user);
        console.log(user);
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorState(true);
        console.log(errorCode);
        console.log(errorMessage);
        });

    }

    function signUpNewUser(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(user);
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode)
        console.log(errorMessage)
        });
    }

    function signUpWithGoogle(){
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(token)
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
            console.log(errorMessage)
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(email)
            console.log(credential)
          // ...
        });
    }

    function SignOutHandler(){
      signOut(auth).then(() => {
        // Sign-out successful.
        setLoggedInUser(null);
        console.log("User Signed Out");
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }

    const contextValue={
        loggedInUser,
        loading,
        signInUser,
        errorState,
        signUpNewUser,
        signUpWithGoogle,
        SignOutHandler

    }
    
    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}