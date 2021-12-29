import React, {createContext, useContext, useState, useEffect} from 'react';
//Firebase
import {auth} from "../Firebase";
import { db } from '../Firebase';
//Context
import { useDb } from './DbContext';
//Auth imports
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, onAuthStateChanged, signOut, deleteUser, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from '@firebase/auth';

const AuthContext = createContext();
//UseAuth()
export const useAuth = () => {
    return useContext(AuthContext);
}





export  function AuthProvider(props) {
    //Auth states
        const [currentUser, setCurrentUser] = useState(null);
        const [userLoaded, setUserLoaded] = useState(false);
        const [currentUserInfo, setCurrentUserInfo] = useState(null);
        const {getUser} = useDb();

        useEffect(() => {
            if(currentUser){
                if(!currentUserInfo){
                    getUser(currentUser.uid).then((doc) => {
                        setCurrentUserInfo(doc.data());
                    }).catch(() => {
                        //
                    })
                }
            }else{
                setCurrentUserInfo(null);
            }
        }, [currentUser])

    //Auth function
    //Create new user
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const delUser = (user) => {
        return deleteUser(user);
    }

    const changePassword = (user, newPassword) => {
        return updatePassword(user, newPassword);
    }

    const reAuth = (user, password) => {
        const credentials = EmailAuthProvider.credential(
            user.email,
            password
        )
        return reauthenticateWithCredential(user, credentials);
    }


    //Use Effect
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setUserLoaded(true);
        })
    }, [])
    const value = {
        register,
        signIn,
        logOut,
        logIn,
        delUser,
        changePassword,
        currentUser,
        currentUserInfo,
        userLoaded,
        reAuth
    }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
