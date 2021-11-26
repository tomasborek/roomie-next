import React,{useEffect, useRef, useState} from 'react'
//next
import Head from "next/head"
// Components
import CrListing from "../../../components/Listing/CrListing";

const CreateFlatListing = () => {
    return (
        <>
         <Head>
            <title>Vytvořte svůj inzerát | Roomie</title>
        </Head>
        <CrListing type="flat"/>
    </>
    )
}

export default CreateFlatListing
