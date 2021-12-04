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
                phone: phoneNumber,
                socials: {
                    fb: "",
                    tt: "",
                    ig: ""
                }
            },
            listing: {
                id: listingId
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

    const createListing = (type, name, uid, gender, age, money, location, contact, id) => {
        let docRef;
        if(type == "flatmate"){
            docRef= doc(db, "listings", id);
            return setDoc(docRef, {
                userInfo: {
                    name: name,
                    gender: gender,
                    age: age,
                    contact: contact,
                    uid: uid
                },
                mainInfo: {
                    budget: money,
                    startTime: "",
                    stayTime: ""
                },
                personTags: {},
                flatTags: {
                    location: [location]
                },
                personBoxes: {},
                bio: "",
                type: "flatmate",
                friends: [],
                requests: [],
                sentRequests: [],
                timeStamp: serverTimestamp()

            })
        }else if(type == "offerer"){
            docRef = doc(db, "listings", id);
            return setDoc(docRef, {
                userInfo: {
                    name: name,
                    gender: gender,
                    age: age,
                    contact: contact,
                    uid: uid
                },
                mainInfo: {
                    price: money,
                    startTime: "",
                    stayTime: ""
                },
                personTags: {},
                flatBoxes: {
                    location: location
                },
                personBoxes: {},
                flatBio: "",
                personBio: "",
                type: "flat",
                friends: [],
                requests: [],
                sentRequests: [],
                timeStamp: serverTimestamp()
            });
        }
    }
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

    const createRequest = (type, recieverUid, senderUid, params) => {
        if(type === "recieved"){
            const docRef = doc(db, "users", recieverUid, "recievedRequests", senderUid);
            return setDoc(docRef, {...params, timeStamp: serverTimestamp()});
        }else if(type === "sent"){
            const docRef = doc(db, "users", senderUid, "sentRequests", recieverUid);
            return setDoc(docRef, {...params, timeStamp: serverTimestamp()});
        }
    }

    const getRequests = (type, uid) => {
        const colRef = collection(db, "users", uid, type);
        const startAfterDoc = doc(db, "users", uid, type, "NdTKcjX8zHZmfeJnktCrB65Ulw03");
        const q = query(colRef, orderBy("timeStamp", "desc"), limit(5));
        return getDocs(q);
    }

    const getRequestsPage = (type, uid, page, requests) => {
        const colRef = collection(db, "users", uid, type);
        if(page === "next"){
            const q = query(colRef, orderBy("timeStamp", "desc"), limit(25), startAfter(requests[requests.length - 1]));
            return getDocs(q);
        }
        if(page === "prev"){
            const q = query(colRef, orderBy("timeStamp", "desc"), endBefore(requests[0]), limitToLast(5))
            return getDocs(q);
        }
        
    }

    const getPaginationRequests = (type, uid, page, lastDoc) => {
        const colRef = collection(db, "users", uid, type);
        const q = query(colRef, orderBy("timeStamp", "desc"), limit(15), startAfter(lastDoc));
        return getDocs(q);
    }

    const resolveRequest = (type, recieverUid, senderUid, params) => {
        if(type === "recieved"){
            let docRef = doc(db, "users", recieverUid, "recievedRequests", senderUid);
            return deleteDoc(docRef);
        }else if (type === "sent"){
            let docRef = doc(db, "users", senderUid, "sentRequests", recieverUid);
            return deleteDoc(docRef);
        }
        
    }

    const addFriend = (recieverUid, senderUid, params) => {
        const docRef = doc(db, "users", recieverUid, "friends",senderUid);
        return setDoc(docRef, params);
    }

    //Notifications

    const addNotification = (type, recieverUid, secondUserUid, secondUserName) => {
        let params;
        if(type === "acceptedRequest"){
            params = {
                message: `Uživatel ${secondUserName} přijal vaší žádost. Kontaktujte ho.`,
                type: type
            }
        }else if(type === "recievedRequest"){
            params = {
                message: `Uživatel ${secondUserName} vás žádá o kontaktní údaje.`,
                type: type
            }
        }
        const docRef = doc(db, "users", recieverUid, "notifications", secondUserUid);
        return setDoc(docRef, params);
    }

    const getNotifications = (uid) => {
        const colRef = collection(db, "users", uid, "notifications");
        return getDocs(colRef);
    }

    const deleteNotification = (uid, secondUserUid) => {
        return new Promise((resolve, reject) => {
            const docRef = doc(db, "users", uid, "notifications", secondUserUid);
            getDoc(docRef)
            .then(document => {
                deleteDoc(doc(db, "users", uid, "notifications", document.id));
                resolve(null);
            })
            // .catch(error => {
            //     reject(error);
            // })
        })
       
    }

    //Friends

    const getFriends = (uid) => {
        const colRef = collection(db, "users", uid, "friends");
        const q = query(colRef, orderBy("timeStamp", "desc"));
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
        getListingsPage,
        getListing,
        getListingByUser,
        delListing,
        createRequest,
        getRequests,
        getRequestsPage,
        resolveRequest,
        addFriend,
        addNotification,
        getNotifications,
        deleteNotification,
        getFriends
    }
    return (
        <DbContext.Provider value={value}>
            {props.children}
        </DbContext.Provider>
    )
}