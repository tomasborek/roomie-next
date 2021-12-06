import React, {createContext, useContext, useState, useEffect} from 'react';
import { db } from '../Firebase';
//Firestore imports
import { setDoc, doc, query, where, collection, getDoc, getDocs, deleteDoc, updateDoc, serverTimestamp, orderBy, limit, startAfter, addDoc, startAt, endBefore, limitToLast } from '@firebase/firestore';

const DbContext = createContext();

export const useDb = () => {
    return useContext(DbContext);
}

export function DbProvider(props) {

    //Functions
    //User

    const updateUser = (uid, params) => {
        return updateDoc(doc(db, "users", uid), params);
    }

    const getUser = (uid) => {
       return getDoc(doc(db, "users", uid));
    }

    //Listings

    const updateListing = (id, params) => {
       const docRef = doc(db, "listings", id);
       return updateDoc(docRef, params);       
    }

    const getListings = (type) => {
        const q = query(collection(db, "listings"), where("type", "==", type), orderBy("timeStamp", "desc"), limit(10));
        return getDocs(q);
    }

    const getListingsPage = (type, page, listings) => {
        const colRef = collection(db, "listings");
        if(page === "next"){
            const q = query(colRef, where("type", "==", type), orderBy("timeStamp", "desc"), limit(10), startAfter(listings[listings.length - 1]))
            return getDocs(q);
        }
        if(page === "prev"){
            const q = query(colRef, where("type", "==", type), orderBy("timeStamp", "desc"), limitToLast(10), endBefore(listings[0]))
            return getDocs(q);
        }
    }

    const getListing = (id) => {
        return getDoc(doc(db, "listings", id));
    }

    const getListingByUser = (uid) => {
        const q = query(collection(db, "listings"), where("userInfo.uid", "==", uid));
        return getDocs(q);
    }

    //Requests and friends

    const getRequests = (type, uid, page) => {
        const colRef = collection(db, "users", uid, type);
        if(page === "first"){
            const q = query(colRef, orderBy("timeStamp", "desc"), limit(5));
            return getDocs(q);
        }
        if(page === "next"){
            const q = query(colRef, orderBy("timeStamp", "desc"), limit(25), startAfter(requests[requests.length - 1]));
            return getDocs(q);
        }
        if(page === "prev"){
            const q = query(colRef, orderBy("timeStamp", "desc"), endBefore(requests[0]), limitToLast(5))
            return getDocs(q);
        }
    }

    //Notifications

    const getNotifications = (uid) => {
        const colRef = collection(db, "users", uid, "notifications");
        return getDocs(colRef);
    }

    //Friends
    
    const getFriends = (uid) => {
        const colRef = collection(db, "users", uid, "friends");
        const q = query(colRef, orderBy("timeStamp", "desc"));
        return getDocs(q);
    }

   
    

    //Value
    const value = {
        getUser,
        updateUser,
        updateListing,
        getListings,
        getListingsPage,
        getListing,
        getListingByUser,
        getRequests,
        getNotifications,
        getFriends
    }
    return (
        <DbContext.Provider value={value}>
            {props.children}
        </DbContext.Provider>
    )
}