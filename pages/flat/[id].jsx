import React from 'react'
//COmponents
import Listing from '../../components/Listing/Listing'
//Context
import {ListingProvider} from "../../contexts/ListingContext";
//Firebase
import { db } from '../../Firebase';
import { getDoc, doc } from 'firebase/firestore';

const FlatListing = (props) => {
    return (
        <ListingProvider cr={false} type="flat" ssrProps={{...props}}>
            <Listing/>
        </ListingProvider>
    )
}

export default FlatListing

export async function getServerSideProps(context) {
    const {id} = context.params;
    try{    
        const docRef = await getDoc(doc(db, "listings", id));
        const listingLayout = docRef.data().flatBoxes.layout;
        const listingLocation = docRef.data().flatBoxes.location;
        //Name
        const listingName = `${listingLayout ? listingLayout : ""}${listingLayout ? " " : ""}${listingLocation}`;
        //Basic user info
        const listingUsername = docRef.data().userInfo.username;
        const listingAge = docRef.data().userInfo.age;
        const listingGender = docRef.data().userInfo.gender;
        let listingPfp = null;
        if(docRef.data().userInfo.images.pfp) listingPfp = docRef.data().userInfo.images.pfp; 
        let listingImgs = [];
        if(docRef.data().userInfo.images.listingImgs) listingImgs = docRef.data().userInfo.images.listingImgs; 
        //Bio(s)
        const listingPersonBio = docRef.data().personBio;
        const listingFlatBio = docRef.data().flatBio;
        //Boxes
        const listingPersonBoxes = JSON.stringify(docRef.data().personBoxes);
        const listingFlatBoxes = JSON.stringify(docRef.data().flatBoxes);
        //Tags
        const listingPersonTags = JSON.stringify(docRef.data().personTags);
        //Listing info
        const listingPremium = docRef.data().userInfo.premium;
        let listingFans = [];
        if(docRef.data().likedBy){
            listingFans = docRef.data().likedBy;
        }
        const listingFriends = docRef.data().friends;
        const uid = docRef.data().userInfo.uid;

        const listingInfo = JSON.stringify(docRef.data());

        if(!docRef.data().visible || !docRef.data().userInfo.emailVerified || docRef.data().hiddenByUser){
            throw {message: "client-side"};
        }
        const status = "success";
        return {
            props: {
                listingName,
                listingUsername,
                listingAge,
                listingGender,
                listingPfp,
                listingImgs,
                listingPersonBio,
                listingFlatBio,
                listingPersonBoxes,
                listingPersonTags,
                listingFlatBoxes,
                listingPremium,
                listingFans,
                listingFriends,
                uid,
                listingInfo,
                status,
            },
        }
    }catch(error){
        const listingName = null;
        const listingUsername = null;
        const listingAge = null;
        const listingGender = null;
        const listingPfp = null;
        const listingImgs = [];
        const listingPersonBio = null;
        const listingFlatBio = null;
        const listingPersonBoxes = null;
        const listingPersonTags = null;
        const listingFlatBoxes = null;
        const listingPremium = null;
        const listingFans = null;
        const listingFriends = null;
        const listingInfo = null;
        const uid = null;
        const status = error.message;
        return {
            props: {
                listingName,
                listingUsername,
                listingAge,
                listingGender,
                listingPfp,
                listingImgs,
                listingPersonBio,
                listingFlatBio,
                listingPersonBoxes,
                listingPersonTags,
                listingFlatBoxes,
                listingPremium,
                listingFans,
                listingFriends,
                uid,
                listingInfo,
                status,
            },
        }
    }
}


