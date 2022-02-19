import React from "react";
import Listing from "../../components/Listing/Listing";
//Firebase
import { db } from "../../Firebase";
import { getDoc, doc } from "firebase/firestore";
import { auth } from "../../Firebase";
//Contexts
import { ListingProvider } from "../../contexts/ListingContext";
//Componetns

const FlatmateListing = (props) => {
  return (
    <ListingProvider cr={false} type="flatmate" ssrProps={{ ...props }}>
      <Listing />
    </ListingProvider>
  );
};

export default FlatmateListing;

export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    //If not client side
    //Ref
    const docRef = await getDoc(doc(db, "listings", id));
    //Name
    const listingName = docRef.data().userInfo.username;
    //Basic user info
    const listingUsername = docRef.data().userInfo.username;
    const listingAge = docRef.data().userInfo.age;
    const listingGender = docRef.data().userInfo.gender;
    let listingPfp = null;
    if (docRef.data().userInfo.images.pfp)
      listingPfp = docRef.data().userInfo.images.pfp;
    let listingImgs = [];
    if (docRef.data().userInfo.images.listingImgs)
      listingImgs = docRef.data().userInfo.images.listingImgs;
    //bio(s)
    const listingBio = docRef.data().bio;
    //Boxes
    const listingPersonBoxes = JSON.stringify(docRef.data().personBoxes);
    //Tags
    const listingFlatTags = JSON.stringify(docRef.data().flatTags);
    const listingPersonTags = JSON.stringify(docRef.data().personTags);
    //Listing info
    const listingPremium = docRef.data().userInfo.premium;
    let listingFans = [];
    if (docRef.data().likedBy) {
      listingFans = docRef.data().likedBy;
    }
    const listingFriends = docRef.data().friends;
    const uid = docRef.data().userInfo.uid;

    //Render client side
    if (
      !docRef.data().visible ||
      !docRef.data().userInfo.emailVerified ||
      docRef.data().hiddenByUser
    ) {
      throw { message: "client-side", uid };
    }

    const listingInfo = JSON.stringify(docRef.data());

    const status = "success";
    return {
      props: {
        listingName,
        listingUsername,
        listingAge,
        listingGender,
        listingPfp,
        listingImgs,
        listingBio,
        listingPersonBoxes,
        listingFlatTags,
        listingPersonTags,
        listingPremium,
        listingFans,
        listingFriends,
        uid,
        listingInfo,
        status,
      },
    };
  } catch (error) {
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
    const status = error.message;
    return {
      props: {
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
      },
    };
  }
}
