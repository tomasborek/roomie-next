import React, {useEffect, useState, useRef} from 'react'
import Listing from '../../../components/Listing/Listing';
//next
import Head from "next/head"
//Contexts
import {ListingProvider} from "../../../contexts/ListingContext";

const CreateFlatListing = () => {
    const listingName = null;
    const listingUsername = null;
    const listingAge = null;
    const listingGender = null;
    const listingPersonBoxes = null;
    const listingFlatBoxes = null;
    const listingPersonBio = null;
    const listingFlatBio = null;
    const listingPersonTags = null;
    const listingPremium = null;
    const listingFans = null;
    const status = "client-side";
    const ssrProps = {
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
        }
    return (
        <>
         <Head>
            <title>Vytvořte svůj inzerát | Roomie</title>
        </Head>
        <ListingProvider type="flat" cr={true} ssrProps={ssrProps}>
           <Listing/>
        </ListingProvider>
    </>
    )
}

export default CreateFlatListing
