import React from 'react'
//COmponents
import Listing from '../../components/Listing/Listing'
//Firebase
import { db } from '../../Firebase';
import { getDoc, doc } from 'firebase/firestore';

const FlatListing = (props) => {
    return (
        <Listing type="flat"
            listingName={props.listingName}
            listingFlatBio={props.listingFlatBio}
            listingpersonBio={props.listingPersonBio}
            listingPersonBoxes={JSON.parse(props.listingPersonBoxes)}
            listingFlatBoxes={JSON.parse(props.listingFlatBoxes)}
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
        const listingLayout = docRef.data().flatBoxes.layout;
        const listingLocation = docRef.data().flatBoxes.location;
        const listingName = `${listingLayout}${listingLayout ? " " : ""}${listingLocation}`;
        const listingPersonBio = docRef.data().personBio;
        const listingFlatBio = docRef.data().flatBio;
        const listingPersonBoxes = JSON.stringify(docRef.data().personBoxes);
        const listingPersonTags = JSON.stringify(docRef.data().personTags);
        const listingFlatBoxes = JSON.stringify(docRef.data().flatBoxes);
        const statusCode = 200;
        return {
            props: {
                listingName,
                listingPersonBio,
                listingFlatBio,
                listingPersonBoxes,
                listingPersonTags,
                listingFlatBoxes,
                statusCode,
            },
        }
    }catch(error){
        const listingName = null;
        const listingPersonBio = null;
        const listingFlatBio = null;
        const listingPersonBoxes = null;
        const listingPersonTags = null;
        const listingFlatBoxes = null;
        const statusCode = 200;
        return {
            props: {
                listingName,
                listingPersonBio,
                listingFlatBio,
                listingPersonBoxes,
                listingPersonTags,
                listingFlatBoxes,
                statusCode,
            },
        }
    }
}


