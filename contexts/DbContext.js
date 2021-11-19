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
    const addUser = (username, gender, type, age, birthday, budget, location, email, phoneNumber, listingId, uid) => {
        return setDoc(doc(db, "users", uid), {
            mainInfo: {
                username: username,
                gender: gender,
                type: type,
                age: age,
                birthday: birthday,
                budget: budget,
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
                recieved: [],
                sent: []
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
            docRef= doc(db, "flatmateListings", id);
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
                bio: ""

            })
        }else if(type == "offerer"){
            docRef = doc(db, "flatListings", id);
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
                personBio: ""
            });
        }
    }

    //Listings
    const updateListing = (type, id, param) => {
       const docRef = doc(db, type, id);
       return updateDoc(docRef, param);       
    }

    const getListings = (type) => {
        if(type === "fm"){
            return getDocs(collection(db, "flatmateListings"));
        }else if(type === "f"){
            return getDocs(collection(db, "flatListings"));
        }else{
            return null;
        }
    }

    const getListing = (id,type) => {
        return getDoc(doc(db, type, id));
    }

    const getListingByUser = (uid, type) => {
        if(type === "flatmate"){
            type = "flatmateListings";
        }else if(type === "offerer"){
            type = "flatListings";
        }
        const colRef = collection(db, type);
        const q = query(colRef, where("userInfo.uid", "==", uid));
        return getDocs(q);
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
        delListing
    }
    return (
        <DbContext.Provider value={value}>
            {props.children}
        </DbContext.Provider>
    )
}