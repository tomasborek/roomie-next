import React, {createContext, useContext, useState, useEffect} from 'react';
import { db } from '../Firebase';
//Firestore imports
import { setDoc, doc, query, where, collection, getDoc, getDocs, deleteDoc, updateDoc } from '@firebase/firestore';

const DbContext = createContext();

export const useDb = () => {
    return useContext(DbContext);
}

export function DbProvider(props) {

    //Functions
    //User
    const addUser = (username, gender, type, age, birthday, location, email, phoneNumber, listingId, uid) => {
        return setDoc(doc(db, "users", uid), {
            mainInfo: {
                username: username,
                gender: gender,
                type: type,
                age: age,
                birthday: birthday,
                location: location
            },
            contact: {
                email: email,
                phoneNumber: phoneNumber,
                socials: {
                    fb: "",
                    tt: "",
                    ig: ""
                }
            },
            listing: {
                id: listingId
            },
            requests: {
                recieved: {},
                sent: {}
            },
            visible: true,
        })
    }

    const updateUser = (uid, params) => {
        return updateDoc(doc(db, "users", uid), params);
    }

    const getUser = (uid) => {
       return getDoc(doc(db, "users", uid));
    }

    const delUserDb = (user) => {
      return deleteDoc((doc(db, "users", user.uid)))
    }


    //Listings

    const delListing = (type, id) => {
        if(type === "flatmate"){
            type = "flatmateListings";
        }else if(type === "offerer"){
            type = "flatListings";
        }
        const docRef = doc(db, type, id)
        return deleteDoc(docRef);
    }

    const createListing = (type, name, uid, gender, age, money, location, id) => {
        let docRef;
        if(type == "flatmate"){
            docRef= doc(db, "listings", id);
            return setDoc(docRef, {
                userInfo: {
                    name: name,
                    gender: gender,
                    age: age,
                    uid: uid
                },
                mainInfo: {
                    budget: money,
                    startTime: "",
                    stayTime: ""
                },
                personTags: {},
                flatTags: {},
                personBoxes: {},
                bio: "",
                type: "flatmate",
                friends: []

            })
        }else if(type == "offerer"){
            docRef = doc(db, "listings", id);
            return setDoc(docRef, {
                userInfo: {
                    name: name,
                    gender: gender,
                    age: age,
                    uid: uid
                },
                mainInfo: {
                    price: money,
                    startTime: "",
                    stayTime: ""
                },
                personTags: {},
                flatBoxes: {},
                personBoxes: {},
                flatBio: "",
                personBio: "",
                type: "flat",
                friends: []
            });
        }
    }
    const updateListing = (id, params) => {
       const docRef = doc(db, "listings", id);
       return updateDoc(docRef, params);       
    }

    const getListings = (type) => {
        const q = query(collection(db, "listings"), where("type", "==", type));
        return getDocs(q);
    }

    const getListing = (id) => {
        return getDoc(doc(db, "listings", id));
    }

    const getListingByUser = (uid) => {
        const q = query(collection(db, "listings"), where("userInfo.uid", "==", uid));
        return getDocs(q);
    }

    const addFriend = (id, uid, params) => {
        const docRef = doc(db, "listings", id, "friends",uid);
        return setDoc(docRef, params);
    }

   
    

    //Value
    const value = {
        addUser,
        getUser,
        updateUser,
        delUserDb,
        updateListing,
        createListing,
        getListings,
        getListing,
        getListingByUser,
        delListing,
        addFriend
    }
    return (
        <DbContext.Provider value={value}>
            {props.children}
        </DbContext.Provider>
    )
}