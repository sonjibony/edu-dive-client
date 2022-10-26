import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup (auth, provider);
    }

    //creating user
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }

    //sign in
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }

    //log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //setting observer and unsubscribing
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
          console.log(currentUser);
          setUser(currentUser); 
          setLoading(false);
        });
       return () => {
        unsubscribe();
       }
    },[])

    const authInfo = {
        user, 
        loading, 
        providerLogin, 
        logOut, 
        createUser, 
        signIn,
        updateUserProfile
    };


    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;