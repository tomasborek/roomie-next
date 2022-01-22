import React,{useEffect, useRef, useState} from 'react'
//next
import Head from "next/head"
// Components
import Listing from "../../../components/Listing/Listing";
//Contexts
import ListingProvider from "../../../contexts/ListingContext";

const CreateFlatListing = () => {
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
    const status = "client-side";
    const ssrProps = {
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
