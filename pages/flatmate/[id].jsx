import React from 'react'
import Listing from '../../components/Listing/Listing'
//Firebase
import { db } from '../../Firebase';
import { getDoc, doc } from 'firebase/firestore';
import { auth } from '../../Firebase';
//Contexts
import {ListingProvider} from "../../contexts/ListingContext";

const FlatmateListing = (props) => {
    return (
        <ListingProvider type="flatmate" ssrProps={{...props}}>
            <Listing type="flatmate"/>  
        </ListingProvider>
    )
}

export default FlatmateListing

export async function getServerSideProps(context) {
    const {id} = context.params;
    try{    
        const docRef = await getDoc(doc(db, "listings", id));
        const listingName = docRef.data().userInfo.username;
        const listingUsername = docRef.data().userInfo.username;
        const listingAge = docRef.data().userInfo.age;
        const listingGender = docRef.data().userInfo.gender;
        const listingBio = docRef.data().bio;
        const listingPersonBoxes = JSON.stringify(docRef.data().personBoxes);
        const listingFlatTags =  JSON.stringify(docRef.data().flatTags);
        const listingPersonTags = JSON.stringify(docRef.data().personTags);
        const listingPremium = docRef.data().userInfo.premium;
        let listingFans = [];
        if(docRef.data().likedBy){
            listingFans = docRef.data().likedBy;
        }
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
                listingBio,
                listingPersonBoxes,
                listingFlatTags,
                listingPersonTags,
                listingPremium,
                listingFans,
                status,
            },
        }
    }catch(error){
        const listingName = null;
        const listingUsername = null;
        const listingAge = null;
        const listingGender = null;
        const listingBio = null;
        const listingPersonBoxes = null;
        const listingFlatTags = null;
        const listingPersonTags = null;
        const listingPremium = null;
        const listingFans = null;
        const status = error.message;
        return {
            props: {
                listingName,
                listingUsername,
                listingAge,
                listingGender,
                listingBio,
                listingPersonBoxes,
                listingFlatTags,
                listingPersonTags,
                listingPremium,
                listingFans,
                status,
            },
        }
    }
}

