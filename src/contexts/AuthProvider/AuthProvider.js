import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

 const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup (auth, provider);
    }

    //creating user
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email,password);
    }

    //log out
    const logOut = () => {
        return signOut(auth);
    }

    //setting observer and unsubscribing
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
          console.log(currentUser);
          setUser(currentUser);  
        });
       return () => {
        unsubscribe();
       }
    },[])

    const authInfo = {user, providerLogin, logOut, createUser};


    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;