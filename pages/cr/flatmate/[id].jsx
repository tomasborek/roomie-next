import React, {useEffect, useState, useRef} from 'react'
//next
import Head from "next/head"
import CrListing from "../../../components/Listing/CrListing";

const CreateFlatmateListing = () => {
    return (
        <>
        <Head>
            <title>Vytvořte svůj inzerát | Roomie</title>
        </Head>
        <CrListing type="flatmate"/>
    </>
    )
}

export default CreateFlatmateListing
