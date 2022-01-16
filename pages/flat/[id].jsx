import React from 'react'
//COmponents
import Listing from '../../components/Listing/Listing'
//Firebase
import { db } from '../../Firebase';
import { getDoc, doc } from 'firebase/firestore';

const FlatListing = (props) => {
    return (
        <Listing type="flat" ssrProps={{...props}}/>
    )
}

export default FlatListing

export async function getServerSideProps(context) {
    const {id} = context.params;
    try{    
        const docRef = await getDoc(doc(db, "listings", id));
        const listingLayout = docRef.data().flatBoxes.layout;
        const listingLocation = docRef.data().flatBoxes.location;
        const listingName = `${listingLayout}${listingLayout ? " " : ""}${listingLocation}`;
        const listingUsername = docRef.data().userInfo.username;
        const listingAge = docRef.data().userInfo.age;
        const listingGender = docRef.data().userInfo.gender;
        const listingPersonBio = docRef.data().personBio;
        const listingFlatBio = docRef.data().flatBio;
        const listingPersonBoxes = JSON.stringify(docRef.data().personBoxes);
        const listingPersonTags = JSON.stringify(docRef.data().personTags);
        const listingFlatBoxes = JSON.stringify(docRef.data().flatBoxes);
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
                listingPersonBio,
                listingFlatBio,
                listingPersonBoxes,
                listingPersonTags,
                listingFlatBoxes,
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
        const listingPersonBio = null;
        const listingFlatBio = null;
        const listingPersonBoxes = null;
        const listingPersonTags = null;
        const listingFlatBoxes = null;
        const listingPremium = null;
        const listingFans = null;
        const status = error.message;
        return {
            props: {
                listingName,
                listingUsername,
                listingAge,
                listingGender,
                listingPersonBio,
                listingFlatBio,
                listingPersonBoxes,
                listingPersonTags,
                listingFlatBoxes,
                listingPremium,
                listingFans,
                status,
            },
        }
    }
}


