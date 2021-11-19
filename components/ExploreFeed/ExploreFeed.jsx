import React, {useState, useEffect} from 'react'
//Contexts
import {useDb} from "../../contexts/DbContext";

//Components
import FmListing from '../FmListing/FmListing';
import FListing from '../FListing/FListing';
//MUI
import { CircularProgress } from '@mui/material';

const ExploreFeed = ({variant}) => {
    //Variables
    //Contexts
    const {getListings} = useDb();
    //State
    const [flatmateListings, setFlatmateListings] = useState([]);
    const [flatListings, setFlatListings] = useState([]);

    useEffect(() => {
        if(variant === "flatmate"){
            if(flatmateListings.length > 0){
                return;
            }
            getListings("fm")
            .then(docs => {
                docs.forEach(doc => {
                    setFlatmateListings(prevState => [...prevState, doc]);
                })
            }).catch(error =>{
                console.log("Error: " + error.code);
            })
        }

        if(variant === "flat"){
            if(flatListings.length > 0){
                return;
            }
            getListings("f")
            .then(docs => {
                docs.forEach(doc => {
                    setFlatListings(prevState => [...prevState, doc]);
                })
            }).catch(error =>{
                console.log("Error: " + error.code);
            })
        }
       
    }, [])
    return (
        <div className="explore-feed">
            <div className="feed-header">
                <h3 className="header-title">{variant === "flatmate" ? "Prohlížet spolubydlící" : "Prohlížet byty"}</h3>
            </div>
            {variant === "flatmate" &&
            <>
                {flatmateListings.length ? flatmateListings.map((listing) => (
                    <FmListing name={listing.data().userInfo.name} age={listing.data().userInfo.age} gender={listing.data().userInfo.gender} location={"Lokace"} money={listing.data().mainInfo.budget} available={listing.data().mainInfo.startTime} bio={listing.data().bio} id={listing.id}/>
                ))
            :
            <div className="loading">
                <CircularProgress/>
            </div>
            }
            </>
            }
            {variant === "flat" &&
            <>
            {flatListings.length ? flatListings.map((listing) => (
                    <FListing name={`Byt ${listing.data().flatBoxes.layout}`} bio={listing.data().flatBio} price={listing.data().mainInfo.price} startTime={listing.data().mainInfo.startTime} stayTime={listing.data().mainInfo.stayTime} id={listing.id} />
                )) 
            :
            <div className="loading">
                <CircularProgress/>
            </div>
            }
            </>
            }
            
        </div>
    )
}

export default ExploreFeed
