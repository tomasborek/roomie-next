import React, {useState, useEffect} from 'react'
//Next
import Head from "next/head";
//Contexts
import {useDb} from "../../contexts/DbContext";

//Components
import FmListing from '../FmListing/FmListing';
import FListing from '../FListing/FListing';
import Pagination from "../Pagination/Pagination";
//MUI
import { CircularProgress } from '@mui/material';

const ExploreFeed = ({variant}) => {
    //Variables
    //Contexts
    const {getListings, getListingsPage} = useDb();
    //State
    //Flatmate listings
    const [flatmateListings, setFlatmateListings] = useState([]);
    //Flatmate listing snapshots (for pagination)
    const [flatmateSnaps, setFlatmateSnaps] = useState(null);
    //Flat listings
    const [flatListings, setFlatListings] = useState([]);
    //Flat listing snapshots (for pagination)
    const [flatSnaps, setFlatSnaps] = useState(null);
    //Current page
    const [page, setPage] = useState(1);
    //Pagination disabled?
    const [isPaginationDisabled, setIsPaginationDisabled] = useState(false);

    useEffect(() => {
        if(variant === "flatmate"){
            if(flatmateListings.length > 0){
                return;
            }
            getListings("flatmate")
            .then(docs => {
                setFlatmateSnaps(docs.docs);
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
            getListings("flat")
            .then(docs => {
                setFlatSnaps(docs.docs);
                docs.forEach(doc => {
                    setFlatListings(prevState => [...prevState, doc]);
                })
            })
            // .catch(error =>{
            //     console.log("Error: " + error.code);
            // })
        }
       
    }, [])

    //Functions
    const handlePagination = (page) => {
        if(variant === "flatmate"){
            if(page === "next"){
                let flatmateListingsArray = [];
                setIsPaginationDisabled(true);
                getListingsPage("flatmate", "next", flatmateSnaps)
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
                getListingsPage("flatmate", "prev", flatmateSnaps)
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
                getListingsPage("flat", "next", flatSnaps)
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
                getListingsPage("flat", "prev", flatSnaps)
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
            {variant === "flatmate" &&
            <>
                {flatmateListings.length ? 
                <>
                {flatmateListings.map((listing, id) => (
                    <FmListing name={listing.data().userInfo.username} age={listing.data().userInfo.age} gender={listing.data().userInfo.gender} location={listing.data().flatTags.location} money={listing.data().mainInfo.budget} available={listing.data().mainInfo.startTime} bio={listing.data().bio} id={listing.id} key={id}/>
                ))}
                <Pagination page={page} setPage={setPage} handlePagination={handlePagination} isDisabled={isPaginationDisabled} />
                </>
            :
            <div className="loading">
                <CircularProgress/>
            </div>
            }
            </>
            }
            {variant === "flat" &&
            <>
            {flatListings.length ? 
            <>
            {flatListings.map((listing, id) => (
                    <FListing name={`Byt ${listing.data().flatBoxes.layout != "" ? listing.data().flatBoxes.layout : ""} ${listing.data().flatBoxes.location}`} bio={listing.data().flatBio} price={listing.data().mainInfo.price} startTime={listing.data().mainInfo.startTime} stayTime={listing.data().mainInfo.stayTime} id={listing.id} key={id} />
                )) }
            <Pagination page={page} setPage={setPage} handlePagination={handlePagination} isDisabled={isPaginationDisabled} />
            </>
            :
            <div className="loading">
                <CircularProgress/>
            </div>
            }
            </>
            }
            
        </div>
        </>
    )
}

export default ExploreFeed
