import React, {useState, useEffect} from 'react'
//Next
import Head from "next/head";
import { useRouter } from 'next/dist/client/router';
//Contexts
import {useDb} from "../../contexts/DbContext";

//Components
import ExploreFlatmate from '../ExploreListings/ExploreFlatmate/ExploreFlatmate';
import ExploreFlat from "../ExploreListings/ExploreFlat/ExploreFlat";
import Pagination from "../Pagination/Pagination";
//MUI
import { CircularProgress } from '@mui/material';
//Img

const ExploreFeed = ({variant}) => {
    //Variables
    //Contexts
    const {getListings} = useDb();
    const router = useRouter();
    //State
    // Is user connected to internet
    const [connectionDown, setConnectionDown] = useState(false);
    //Flatmate listings
    const [flatmateListings, setFlatmateListings] = useState(null);
    //Flatmate listing snapshots (for pagination)
    const [flatmateSnaps, setFlatmateSnaps] = useState(null);
    //Flat listings
    const [flatListings, setFlatListings] = useState(null);
    //Flat listing snapshots (for pagination)
    const [flatSnaps, setFlatSnaps] = useState(null);
    //Current page
    const [page, setPage] = useState(1);
    //Pagination disabled?
    const [isPaginationDisabled, setIsPaginationDisabled] = useState(false);

    // Initial first page fetch
    useEffect(() => {
        if(variant === "flatmate"){
        // Empty array that we can insert all the data in and then insert it into flatmateListings state
        let flatmateListingsArray = [];
        //Check if we already have listings
            if(flatmateListings && flatmateListings.length > 0){
                return;
            }
            //Gettem
            getListings("flatmate", "first").then(docs => {
                //Checks if we are connected to internet
                if (docs.empty && docs.metadata.fromCache) {
                    throw new Error('network-failed');
                 }
                 //Set snapshots for paginations
                setFlatmateSnaps(docs.docs);
                docs.forEach(doc => {
                    //Insert all the listings into empty array
                    flatmateListingsArray = [...flatmateListingsArray, doc];
                })
                // Insert the array into state
                setFlatmateListings(flatmateListingsArray);
            }).catch(error => {
                if(error.message === "network-failed"){
                    setConnectionDown(true);
                }
            })
        }

        if(variant === "flat"){
            // Empty array that we can insert all the data in and then insert it into flatmateListings state
            let flatListingsArray = [];
            //Check if we already have listings
            if(flatListings && flatListings.length > 0){
                return;
            }
            //Getttttttem
            getListings("flat", "first").then(docs => {
                //Checks if we are connected to internet
                if (docs.empty && docs.metadata.fromCache) {
                    throw new Error('network-failed');
                 }
                 //Set snapshots for pagination
                setFlatSnaps(docs.docs);
                docs.forEach(doc => {
                     //Insert all the listings into empty array
                     flatListingsArray = [...flatListingsArray, doc];
                })
                // Insert the array into state
                setFlatListings(flatListingsArray);
            }).catch(error => {
                if(error.message === "network-failed"){
                    setConnectionDown(true);
                }
            })
        }
       
    }, [])

    //Functions
    // Hadnles pagination (next or prev)
    const handlePagination = (page) => {
        if(variant === "flatmate"){
            if(page === "next"){
                let flatmateListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flatmate", "next", flatmateSnaps)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setPage(prevState => prevState + 1);
                        setFlatmateSnaps(docs.docs);
                        docs.forEach(req => {
                            flatmateListingsArray = [...flatmateListingsArray, req];
                        })
                        setFlatmateListings(flatmateListingsArray);
                    }
                    setIsPaginationDisabled(false);
                })
            }
            if(page === "prev"){
                let flatmateListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flatmate", "prev", flatmateSnaps)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setPage(prevState => prevState - 1);
                        setFlatmateSnaps(docs.docs);
                        docs.forEach(req => {
                            flatmateListingsArray = [...flatmateListingsArray, req];
                        })
                        setFlatmateListings(flatmateListingsArray);
                    }
                    setIsPaginationDisabled(false);
                })
            }
        }
        if(variant === "flat"){
            if(page === "next"){
                let flatListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flat", "next", flatSnaps)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setFlatSnaps(docs.docs);
                        setPage(prevState => prevState + 1);
                        setFlatSnaps(docs.docs);
                        docs.forEach(req => {
                           flatListingsArray =  [...flatListingsArray, req];
                        })
                        setFlatListings(flatListingsArray);
                    }
                    setIsPaginationDisabled(false);
                })
            }
            if(page === "prev"){
                let flatListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flat", "prev", flatSnaps)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setFlatSnaps(docs.docs);
                        setPage(prevState => prevState - 1);
                        setFlatSnaps(docs.docs);
                        docs.forEach(req => {
                            flatListingsArray =  [...flatListingsArray, req];
                        })
                        setFlatListings(flatListingsArray);
                    }
                    setIsPaginationDisabled(false);
                })
            }
        }
    }
    return (
        <>
        <Head>
            <title>Prohlížet {variant === "flatmate" ? "Prohlížet byty" : "Prohlížet spolubydlící"} | Roomie</title>
        </Head>
        <div className="explore-feed">
            <div className="feed-header">
                <h3 className="header-title">{variant === "flatmate" ? "Prohlížet spolubydlící" : "Prohlížet byty"}</h3>
            </div>
            {(variant === "flatmate" && !connectionDown) &&
            <>
                {flatmateListings ? 
                    <>
                        {(flatmateListings && flatmateListings.length) ?
                        <>
                            {flatmateListings.map((listing, id) => (
                                <ExploreFlatmate name={listing.data().userInfo.username} age={listing.data().userInfo.age} gender={listing.data().userInfo.gender} location={listing.data().flatTags.location} money={listing.data().mainInfo.budget} available={listing.data().mainInfo.startTime} bio={listing.data().bio} id={listing.id} key={id}/>
                            ))}
                            {(flatmateListings.length > 9 || page != 1) ?
                                <Pagination page={page} setPage={setPage} handlePagination={handlePagination} isDisabled={isPaginationDisabled} />
                                :
                                ""
                            }
                        </>
                        :
                        <div className="feed-not-found">
                            <img src="/img/bad-results/notfound.png" width={184} height={208} />
                            <div className="not-found-description">Omlouváme se, ale vaším požadavkům neodpovídají žádné inzeráty. Zkuste upravit své filtry.</div>
                        </div>
                     
                        }
                        
                    </>
                :
                <div className="loading">
                    <CircularProgress/>
                </div>
                }
            </>
            }
            {(variant === "flat" && !connectionDown) &&
            <>
            {flatListings ? 
                <>
                    {flatListings.length ?
                        <>
                            {flatListings.map((listing, id) => (
                                <ExploreFlat name={`Byt ${listing.data().flatBoxes.layout != null ? listing.data().flatBoxes.layout : ""} ${listing.data().flatBoxes.location}`} bio={listing.data().flatBio} price={listing.data().mainInfo.price} startTime={listing.data().mainInfo.startTime} stayTime={listing.data().mainInfo.stayTime} id={listing.id} key={id} />
                            )) }
                            {(flatListings.length > 9 || page != 1) &&
                                <Pagination page={page} setPage={setPage} handlePagination={handlePagination} isDisabled={isPaginationDisabled} />
                            }
                        </>
                        :
                        <div className="feed-not-found">
                            <img src="/img/bad-results/notfound.png" width={184} height={208} />
                            <div className="not-found-description">Omlouváme se, ale vaším požadavkům neodpovídají žádné inzeráty. Zkuste upravit své filtry.</div>
                        </div>
                    
                    }
                </>
                :
                <div className="loading">
                    <CircularProgress/>
                </div>
            }
            </>
            }
            {connectionDown &&
                <div className="feed-connection-lost">
                    {/* <img src={require("/img/bad-results/crash.png")} width={361} height={189}/> */}
                    <p className="lost-description">Vaše připojení bylo ztraceno.</p>
                    <button onClick={() => router.reload(`explore/${variant}`)} className="acc-btn">Opakovat</button>
                </div>
            }
        </div>

        
        </>
    )
}

export default ExploreFeed
