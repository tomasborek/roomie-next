import React, {useState, useEffect} from 'react'
//Next
import Head from "next/head";
import { useRouter } from 'next/dist/client/router';
//Contexts
import {useDb} from "../../contexts/DbContext";
import { useExplore } from '../../contexts/ExploreContext';

//Components
import ExploreFlatmate from '../ExploreListings/ExploreFlatmate/ExploreFlatmate';
import ExploreFlat from "../ExploreListings/ExploreFlat/ExploreFlat";
import Pagination from "../Pagination/Pagination";
import Filter from '../Filter/Filter';
//MUI
import { CircularProgress } from '@mui/material';
import { Backdrop } from '@mui/material';
//Img

const ExploreFeed = ({variant}) => {
    //Variables
    //Contexts
    const {getListings, getListingsFilter} = useDb();
    const router = useRouter();
    const {flatListingsValue, flatmateListingsValue, flatSnapsValue, flatmateSnapsValue, activeFiltersValue, flatmatePageValue, flatPageValue} = useExplore();
    const [flatListings, setFlatListings] = flatListingsValue;
    const [flatmateListings, setFlatmateListings] = flatmateListingsValue;
    const [flatSnaps, setFlatSnaps] = flatSnapsValue;
    const [flatmateSnaps, setFlatmateSnaps] = flatmateSnapsValue;
    const [activeFilters, setActiveFilters] = activeFiltersValue;
    const [flatmatePage, setFlatmatePage] = flatmatePageValue;
    const [flatPage, setFlatPage] = flatPageValue;
    //State
    const [filterOpen, setFilterOpen] = useState(false);
    // const [activeFilters, setActiveFilters] = useState({});
    const [matching, setMatching] = useState(false);
    const [filtering, setFiltering] = useState(false);
    // Is user connected to internet
    const [connectionDown, setConnectionDown] = useState(false);
    //Pagination disabled?
    const [isPaginationDisabled, setIsPaginationDisabled] = useState(false);

    // Initial first page fetch
    useEffect(() => {
        if(variant === "flatmate"){
            if(flatmateListings) return;
            fetchListings("flatmate", "first", null, activeFilters);
        }
        if(variant === "flat"){
            if(flatListings) return;
            fetchListings("flat", "first", null, activeFilters);
        }
    }, [])

    useEffect(() => {
        if(filtering) setMatching(false);
        if(matching) setFiltering(false);
    }, [filtering, matching])

    const fetchListings = (type, page, listings, filter) => {
        if(type === "flatmate"){
            if(page === "first"){
                let flatmateListingsArray = [];
                getListings("flatmate", "first", null, filter).then(docs => {
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
                    setIsPaginationDisabled(false);
                }).catch(error => {
                    if(error.message === "network-failed"){
                        setConnectionDown(true);
                    }
                    console.log(error);
                })
            }else if(page === "next"){
                let flatmateListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flatmate", "next", listings, filter)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setFlatmatePage(prevState => prevState + 1);
                        setFlatmateSnaps(docs.docs);
                        docs.forEach(req => {
                            flatmateListingsArray = [...flatmateListingsArray, req];
                        })
                        setFlatmateListings(flatmateListingsArray);
                    }
                    setIsPaginationDisabled(false);
                })
            }else if(page === "prev"){
                let flatmateListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flatmate", "prev", listings, filter)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setFlatmatePage(prevState => prevState - 1);
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
        if(type === "flat"){
            if(page === "first"){
                let flatListingsArray = [];
                //Check if we already have listings
                getListings("flat", page, listings, filter).then(docs => {
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
                    setIsPaginationDisabled(false);
                }).catch(error => {
                    if(error.message === "network-failed"){
                        setConnectionDown(true);
                    }
                })
            }else if(page === "next"){
                let flatListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flat", "next", listings, filter)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setFlatSnaps(docs.docs);
                        setFlatPage(prevState => prevState + 1);
                        setFlatSnaps(docs.docs);
                        docs.forEach(req => {
                           flatListingsArray =  [...flatListingsArray, req];
                        })
                        setFlatListings(flatListingsArray);
                    }
                    setIsPaginationDisabled(false);
                })
            }else if(page === "prev"){
                let flatListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flat", "prev", listings, filter)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setFlatSnaps(docs.docs);
                        setFlatPage(prevState => prevState - 1);
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

    const applyFilters = (filter) => {
        if(variant === "flatmate"){
            setFlatmateListings(null);
            setFlatmatePage(1);
            fetchListings("flatmate", "first", null, filter);
        }
        if(variant === "flat"){
            setFlatListings(null);
            setFlatPage(1);
            fetchListings("flat", "first", null, filter);
        }
    }

    // Hadnles pagination (next or prev)
    const handlePagination = (page) => {
        if(variant === "flatmate"){
            if(page === "next"){
                fetchListings("flatmate", "next", flatmateSnaps, activeFilters); 
            }
            if(page === "prev"){
                fetchListings("flatmate", "prev", flatmateSnaps, activeFilters);
            }
        }
        if(variant === "flat"){
            if(page === "next"){
                fetchListings("flat", "next", flatSnaps, activeFilters);
            }
            if(page === "prev"){
                fetchListings("flat", "prev", flatSnaps, activeFilters);
            }
        }
    }
    return (
        <>
        <Head>
            <title>Prohlížet {variant === "flatmate" ? "Prohlížet byty" : "Prohlížet spolubydlící"} | Roomie</title>
        </Head>
        <div className="explore-feed">
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={filterOpen}>
                <Filter variant={variant} setOpen={setFilterOpen} activeFilters={activeFilters} setActiveFilters={setActiveFilters} applyFilters={applyFilters}/>
            </Backdrop>
            <div className="feed-header">
                <h3 className="header-title">{variant === "flatmate" ? "Prohlížet spolubydlící" : "Prohlížet byty"}</h3>
                <div className="header-filters">
                    <div 
                        className={`filters-filter ${(Object.keys(activeFilters).length && !matching) && "active"} ${matching && "disabled"}`} 
                        onClick={() => {
                            setFilterOpen(true);
                            setFiltering(true);
                        }}>
                        <p>Filtry</p>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className={`filters-match ${matching && "active"}`} onClick={() => setMatching(prevState => !prevState)}>
                        <p>Match</p>
                        <i className="fas fa-puzzle-piece"></i>
                    </div>
                </div>
            </div>
            {(variant === "flatmate" && !connectionDown) &&
            <>
                {flatmateListings ? 
                    <>
                        {(flatmateListings && flatmateListings.length) ?
                        <>
                            {flatmateListings.map((listing, id) => (
                                <ExploreFlatmate 
                                        name={listing.data().userInfo.username} 
                                        age={listing.data().userInfo.age} 
                                        gender={listing.data().userInfo.gender} 
                                        location={listing.data().flatTags.location}
                                        money={listing.data().mainInfo.budget} 
                                        available={listing.data().mainInfo.startTime} 
                                        bio={listing.data().bio} id={listing.id} 
                                        pfp={listing.data().userInfo.images.pfp} 
                                        key={id}/>
                            ))}
                            {(flatmateListings.length > 9 || flatmatePage != 1) ?
                                <Pagination page={flatmatePage} setPage={setFlatmatePage} handlePagination={handlePagination} isDisabled={isPaginationDisabled} />
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
                                <ExploreFlat 
                                        name={`Byt ${listing.data().flatBoxes.layout ? listing.data().flatBoxes.layout : ""} ${listing.data().flatBoxes.location}`} 
                                        bio={listing.data().flatBio} price={listing.data().mainInfo.price} startTime={listing.data().mainInfo.startTime} 
                                        stayTime={listing.data().mainInfo.stayTime} 
                                        mainImg={listing.data().userInfo.images.listingImgs[0]} 
                                        id={listing.id} 
                                        key={id} />
                            )) }
                            {(flatListings.length > 9 || flatPage != 1) &&
                                <Pagination page={flatPage} setPage={setFlatPage} handlePagination={handlePagination} isDisabled={isPaginationDisabled} />
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
