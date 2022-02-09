import React, {useEffect, useState, useRef} from 'react'
import Listing from '../../../components/Listing/Listing';
//next
import Head from "next/head"
//Contexts
import {ListingProvider} from "../../../contexts/ListingContext";

const CreateFlatmateListing = () => {
        const listingName = null;
        const listingUsername = null;
        const listingAge = null;
        const listingGender = null;
        const listingPfp = null;
        const listingImgs = [];
        const listingBio = null;
        const listingPersonBoxes = null;
        const listingFlatTags = null;
        const listingPersonTags = null;
        const listingPremium = null;
        const listingFans = null;
        const listingFriends = null;
        const listingInfo = null;
        const uid = null;
        const status = "client-side";
        const ssrProps = {
            listingName,
            listingUsername,
            listingAge,
            listingGender,
            listingBio,
            listingPfp,
            listingImgs,
            listingPersonBoxes,
            listingFlatTags,
            listingPersonTags,
            listingPremium,
            listingFans,
            listingFriends,
            listingInfo,
            uid,
            status,
            }
    return (
        <>
        <Head>
            <title>Vytvořte svůj inzerát | Roomie</title>
        </Head>
        <ListingProvider type="flatmate" cr={true} ssrProps={ssrProps}>
            <Listing/>
        </ListingProvider>
    </>
    )
}

export default CreateFlatmateListing
