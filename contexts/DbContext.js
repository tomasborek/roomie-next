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
    const getListings = (type, page, listings, filter) => {
        const colRef = collection(db, "listings");
        if(!filter || !Object.keys(filter).length){
            if(page === "first"){
                const q = query(colRef, where("type", "==", type), where("visible", "==", true), orderBy("timeStamp", "desc"), limit(10));
                return getDocs(q);
            }
            if(page === "next"){
                const q = query(colRef, where("type", "==", type), where("visible", "==", true), orderBy("timeStamp", "desc"), limit(10), startAfter(listings[listings.length - 1]));
                return getDocs(q);
            }
            if(page === "prev"){
                const q = query(colRef, where("type", "==", type), where("visible", "==", true), orderBy("timeStamp", "desc"), limitToLast(10), endBefore(listings[0]));
                return getDocs(q);
            }
        }else{
            // Array of parameters that is then gonna get spread to query
            let parameters = [];
            if(type === "flatmate"){
                if(filter.location){
                    parameters.push(where("flatTags.location", "==", filter.location));
                }
                if(filter.gender){
                    let originalItems = ["Muž", "Žena", "Jiné"];
                    if(filter.gender.length === 2){
                        // The max length of a filter is 3, that means if 2 are selected one is not selecred, this variable stores it
                        let notSelectedItem;
                        // We get the not selected item by removing the two selected ones from the original items
                        filter.gender.forEach(item => {
                            originalItems.splice(originalItems.indexOf(item), 1);
                            notSelectedItem = originalItems[0];
                        })
                        // The filter names are in format that can be showed to user's, but in database it's not like that, so we have to convert it first
                        switch(notSelectedItem){
                            case "Muž":
                                notSelectedItem = "male";
                                break;
                            case "Žena":
                                notSelectedItem = "female";
                                break;
                            case "Jiné":
                                notSelectedItem = "other";
                                break;
                            default:
                                break;
                        }
                        parameters.push(where(`queryInfo.gender.${notSelectedItem}`, "==", false));
                    }else{
                        const selectedItem = filter.gender[0];
                        switch(selectedItem){
                            case "Muž":
                                selectedItem = "male";
                                break;
                            case "Žena":
                                selectedItem = "female";
                                break;
                            case "Jiné":
                                selectedItem = "other";
                                break;
                            default:
                                break;
                        }
                        parameters.push(where(`queryInfo.gender.${selectedItem}`, "==", true));
                    }
                }
                if(filter.age){
                    let originalItems = ["18-25", "26-34", "35+"];
                        if(filter.age.length === 2){
                            // The max length of a filter is 3, that means if 2 are selected one is not selecred, this variable stores it
                            let notSelectedItem;
                            // We get the not selected item by removing the two selected ones from the original items
                            filter.age.forEach(item => {
                                originalItems.splice(originalItems.indexOf(item), 1);
                                notSelectedItem = originalItems[0];
                            })
                            switch(notSelectedItem){
                                case "18-25":
                                    notSelectedItem = "firstRange";
                                    break;
                                case "26-34":
                                    notSelectedItem = "secondRange";
                                    break;
                                case "35+":
                                    notSelectedItem = "thirdRange";
                                    break;
                                default:
                                    break;
                            }
                            parameters.push(where(`queryInfo.age.${notSelectedItem}`, "==", false));
                        }else{
                            const selectedItem = filter.age[0];
                            switch(selectedItem){
                                case "18-25":
                                    selectedItem = "firstRange";
                                    break;
                                case "26-34":
                                    selectedItem = "secondRange";
                                    break;
                                case "35+":
                                    selectedItem = "thirdRange";
                                    break;
                                default:
                                    break;
                            }
                            parameters.push(where(`queryInfo.age.${selectedItem}`, "==", true));
                        }
                }
                if(filter.smoking){
                    parameters.push(where("personBoxes.smoking", "==", filter.smoking[0]));
                }
                if(filter.job){
                    let originalItems = ["Zaměstnaný", "Nezaměstnaný", "Student"];
                        if(filter.job.length === 2){
                            // The max length of a filter is 3, that means if 2 are selected one is not selecred, this variable stores it
                            let notSelectedItem;
                            // We get the not selected item by removing the two selected ones from the original items
                            filter.job.forEach(item => {
                                originalItems.splice(originalItems.indexOf(item), 1);
                                notSelectedItem = originalItems[0];
                            })
                            switch(notSelectedItem){
                                case "Zaměstnaný":
                                    notSelectedItem = "employed";
                                    break;
                                case "Nezaměstnaný":
                                    notSelectedItem = "unemployed";
                                    break;
                                case "Student":
                                    notSelectedItem = "student";
                                    break;
                                default:
                                    break;
                            }
                            parameters.push(where(`queryInfo.job.${notSelectedItem}`, "==", false));
                        }else{
                            const selectedItem = filter.job[0];
                            switch(selectedItem){
                                case "Zaměstnaný":
                                    selectedItem = "employed";
                                    break;
                                case "Nezaměstnaný":
                                    selectedItem = "unemployed";
                                    break;
                                case "Student":
                                    selectedItem = "student";
                                    break;
                                default:
                                    break;
                            }
                            parameters.push(where(`queryInfo.job.${selectedItem}`, "==", true));
                        }
                }

                if(page === "first"){
                    const q = query(colRef, ...parameters, where("type", "==", type), where("visible", "==", true), orderBy("timeStamp", "desc"), limit(10));
                    return getDocs(q);
                }
                if(page === "next"){
                    const q = query(colRef, ...parameters, where("type", "==", type), where("visible", "==", true),  orderBy("timeStamp", "desc"), limit(10), startAfter(listings[listings.length - 1]));
                    return getDocs(q);
                }
                if(page === "prev"){
                    const q = query(colRef, ...parameters, where("type", "==", type), where("visible", "==", true), orderBy("timeStamp", "desc"), limitToLast(10), endBefore(listings[0]));
                    return getDocs(q);
                }
            }
            if(type === "flat"){
                if(filter.location){
                    parameters.push(where("flatBoxes.location", "==", filter.location[0]));
                }
                if(filter.layout){
                    parameters.push(where("flatBoxes.layout", "==", filter.layout[0]));
                }
                if(filter.petAllowed){
                    let petAllowed = filter.petAllowed[0];
                    switch(petAllowed){
                        case "Mazlíčci povoleno":
                            petAllowed = "Povoleno";
                            break;
                        case "Mazlíčci nepovoleno":
                            petAllowed = "Nepovoleno";
                            break;
                        default:
                            break;
                    }
                    console.log(`where ${petAllowed}`);
                    parameters.push(where("flatBoxes.petAllowed", "==", petAllowed));
                }
                if(filter.smokingAllowed){
                    let smokingAllowed = filter.smokingAllowed[0];
                    switch(smokingAllowed){
                        case "Kouření povoleno":
                            smokingAllowed = "Povoleno";
                            break;
                        case "Kouření nepovoleno":
                            smokingAllowed = "Nepovoleno";
                            break;
                        default:
                            break;
                    }
                    parameters.push(where("flatBoxes.smokingAllowed", "==", smokingAllowed));
                }
                if(filter.internet){
                    let internet = filter.internet[0];
                    switch(internet){
                        case "Internet":
                            internet = "Ano";
                            break;
                        case "Bez internetu":
                            internet = "Ne";
                            break;
                        default: 
                            break;
                    }
                    parameters.push(where("flatBoxes.internet", "==", internet));
                }
                if(filter.elevator){
                    let elevator = filter.elevator[0];
                    switch(elevator){
                        case "Výtah":
                            elevator = "Ano";
                            break;
                        case "Bez výtahu":
                            elevator = "Ne";
                            break;
                        default: 
                            break;
                    }
                    parameters.push(where("flatBoxes.elevator", "==", elevator));
                }



                if(page === "first"){
                    const q = query(colRef, ...parameters, where("type", "==", type), where("visible", "==", true), orderBy("timeStamp", "desc"), limit(10));
                    return getDocs(q);
                }
                if(page === "next"){
                    const q = query(colRef, ...parameters, where("type", "==", type), where("visible", "==", true),  orderBy("timeStamp", "desc"), limit(10), startAfter(listings[listings.length - 1]));
                    return getDocs(q);
                }
                if(page === "prev"){
                    const q = query(colRef, ...parameters, where("type", "==", type), where("visible", "==", true), orderBy("timeStamp", "desc"), limitToLast(10), endBefore(listings[0]));
                    return getDocs(q);
                }
            }
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

    const getRequests = (type, uid, page, requests) => {
        const colRef = collection(db, "users", uid, type);
        if(page === "first"){
            const q = query(colRef, orderBy("timeStamp", "desc"), limit(5));
            return getDocs(q);
        }
        if(page === "next"){
            const q = query(colRef, orderBy("timeStamp", "desc"), limit(5), startAfter(requests[requests.length - 1]));
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
    
    const getFriends = (uid, page, friends) => {
        const colRef = collection(db, "users", uid, "friends");
        if(page === "first"){
            const q = query(colRef, orderBy("timeStamp", "desc"), limit(10));
            return getDocs(q);
        }
        if(page === "next"){
            const q = query(colRef, orderBy("timeStamp", "desc"), limit(10), startAfter(friends[friends.length - 1]));
            return getDocs(q);
        }
        if(page === "prev"){
            const q = query(colRef, orderBy("timeStamp", "desc"), endBefore(friends[0]), limitToLast(10));
            return getDocs(q);
        }
    }

   
    

    //Value
    const value = {
        getUser,
        updateUser,
        getListings,
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