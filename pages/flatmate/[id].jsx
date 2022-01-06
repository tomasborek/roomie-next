import React from 'react'
import Listing from '../../components/Listing/Listing'
//Firebase
import { db } from '../../Firebase';
import { getDoc, doc } from 'firebase/firestore';
import { auth } from '../../Firebase';

const FlatListing = (props) => {
    return (
        <Listing type="flatmate" ssrProps={{...props}}/>  
    )
}

export default FlatListing

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
        if(!docRef.data().visible || !docRef.data().userInfo.emailVerified){
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
                status,
            },
        }
    }
}

