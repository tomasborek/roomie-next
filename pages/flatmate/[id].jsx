import React from 'react'
import Listing from '../../components/Listing/Listing'
//Firebase
import { db } from '../../Firebase';
import { getDoc, doc } from 'firebase/firestore';
import { auth } from '../../Firebase';

const FlatListing = (props) => {
    return (
        <Listing type="flatmate"
        listingName={props.listingName}
        listingBio={props.listingBio}
        listingPersonBoxes={JSON.parse(props.listingPersonBoxes)}
        listingFlatTags={JSON.parse(props.listingFlatTags)}
        listingPersonTags={JSON.parse(props.listingPersonTags)}
        statusCode={props.statusCode}
        />
    )
}

export default FlatListing

export async function getServerSideProps(context) {
    const {id} = context.params;
    try{    
        const docRef = await getDoc(doc(db, "listings", id));
        const listingName = docRef.data().userInfo.username;
        const listingBio = docRef.data().bio;
        const listingPersonBoxes = JSON.stringify(docRef.data().personBoxes);
        const listingFlatTags =  JSON.stringify(docRef.data().flatTags);
        const listingPersonTags = JSON.stringify(docRef.data().personTags);
        const statusCode = 200;
        return {
            props: {
                listingName,
                listingBio,
                listingPersonBoxes,
                listingFlatTags,
                listingPersonTags,
                statusCode,
            },
        }
    }catch(error){
        const listingName = null;
        const listingBio = null;
        const listingPersonBoxes = null;
        const listingFlatTags = null;
        const listingPersonTags = null;
        const statusCode = error.message
        return {
            props: {
                listingName,
                listingBio,
                listingPersonBoxes,
                listingFlatTags,
                listingPersonTags,
                statusCode,
            },
        }
    }
}

