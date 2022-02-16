import React, {useState, useEffect} from 'react'
//Next
import Head from "next/head";
import { useRouter } from 'next/dist/client/router';
//Contexts
import {useDb} from "../../contexts/DbContext";
import { useAuth } from '../../contexts/AuthContext';
import { useExplore } from '../../contexts/ExploreContext';
import {useLoading} from "../../contexts/LoadingContext";

//Components
import ExploreFlatmate from '../ExploreListings/ExploreFlatmate/ExploreFlatmate';
import ExploreFlat from "../ExploreListings/ExploreFlat/ExploreFlat";
import Pagination from "../Pagination/Pagination";
import Filter from '../Filter/Filter';
import CustomDialog from "../CustomDialog/CustomDialog";
import ExplorePremium from '../ExplorePremium/ExplorePremium';
//MUI
import { CircularProgress } from '@mui/material';
import { Backdrop } from '@mui/material';
//Img

const ExploreFeed = ({variant}) => {
    //Variables
    //Contexts
    const {getListings, getListingsFilter, getListing} = useDb();
    const router = useRouter();
    const {currentUser, currentUserInfo} = useAuth();
    const [loading, setLoading] = useLoading();
    const {
        flatListingsValue,
        flatmateListingsValue, 
        flatSnapsValue,
        flatmateSnapsValue,
        premiumFlatSnapsValue,
        premiumFlatmateSnapsValue, 
        activeFiltersValue, 
        flatmatePageValue, 
        flatPageValue,
        currentVariantValue,
    } = useExplore();
    const [flatListings, setFlatListings] = flatListingsValue;
    const [flatmateListings, setFlatmateListings] = flatmateListingsValue;
    const [flatSnaps, setFlatSnaps] = flatSnapsValue;
    const [flatmateSnaps, setFlatmateSnaps] = flatmateSnapsValue;
    const [premiumFlatSnaps, setPremiumFlatSnaps] = premiumFlatSnapsValue;
    const [premiumFlatmateSnaps, setPremiumFlatmateSnaps] = premiumFlatmateSnapsValue;
    const [activeFilters, setActiveFilters] = activeFiltersValue;
    const [flatmatePage, setFlatmatePage] = flatmatePageValue;
    const [flatPage, setFlatPage] = flatPageValue;
    const [currentVariant, setCurrentVariant] = currentVariantValue;
    //State
    const [filterOpen, setFilterOpen] = useState(false);
    const [limitedPaginationDialog, setLimitedPaginationDialog] = useState(false);
    const [premiumPaginationDialog, setPremiumPaginationDialog] = useState(false);
    // const [activeFilters, setActiveFilters] = useState({});
    const [matching, setMatching] = useState(false);
    // Is user connected to internet
    const [connectionDown, setConnectionDown] = useState(false);
    //Pagination disabled?
    const [isPaginationDisabled, setIsPaginationDisabled] = useState(false);

    // Initial first page fetch
    useEffect(() => {
        if(variant === "flatmate"){
            if(flatmateListings) return;
            fetchListings("flatmate", "first", null, null, activeFilters);
        }
        if(variant === "flat"){
            if(flatListings) return;
            fetchListings("flat", "first", null, null, activeFilters);
        }
    }, []);

    useEffect(() => {
        if(!currentVariant){
            setCurrentVariant(variant);
        }else if(currentVariant != variant){
            if(Object.keys(activeFilters).length){
                setActiveFilters({});
                if(currentVariant === "flatmate"){
                    setFlatmateListings(null);
                }
                if(currentVariant === "flat"){
                    setFlatListings(null);
                }
            }
            setCurrentVariant(variant);
        }else{
            return;
        }    

    }, [variant])

    const fetchListings = (type, page, listings, premiumListings, filter) => {
        console.log(premiumFlatmateSnaps && premiumFlatmateSnaps.map(snap => snap.data().userInfo.username));
        if(type === "flatmate"){
            if(page === "first"){
                let flatmateListingsArray = [];
                getListings("flatmate", "first", null, null, filter).then(docs => {
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    setFlatmateSnaps(docs.newListings);
                    setPremiumFlatmateSnaps(docs.newPremiumListings);
                    listings.forEach(listing => {
                        //Insert all the listings into empty array
                        flatmateListingsArray = [...flatmateListingsArray, listing];
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
                getListings("flatmate", "next", listings, premiumListings, filter)
                .then(docs => {
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    if(listings.length > 0){
                        setFlatmatePage(prevState => prevState + 1);
                        setFlatmateSnaps(docs.newListings);
                        setPremiumFlatmateSnaps(docs.newPremiumListings);
                        listings.forEach(listing => {
                            flatmateListingsArray = [...flatmateListingsArray, listing];
                        })
                        setFlatmateListings(flatmateListingsArray);
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }
                    setIsPaginationDisabled(false);
                })
            }else if(page === "prev"){
                let flatmateListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flatmate", "prev", listings, premiumListings, filter)
                .then(docs => {
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    if(listings.length > 0){
                        setFlatmatePage(prevState => prevState - 1);
                        setFlatmateSnaps(docs.newListings);
                        setPremiumFlatmateSnaps(docs.newPremiumListings);
                        listings.forEach(listing => {
                            flatmateListingsArray = [...flatmateListingsArray, listing];
                        })
                        setFlatmateListings(flatmateListingsArray);
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }
                    setIsPaginationDisabled(false);
                })
            }
        }
        if(type === "flat"){
            if(page === "first"){
                let flatListingsArray = [];
                //Check if we already have listings
                getListings("flat", page, null, null, filter).then(docs => {
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    setFlatSnaps(docs.newListings);
                    setPremiumFlatSnaps(docs.newPremiumListings);
                    listings.forEach(listing => {
                        //Insert all the listings into empty array
                        flatListingsArray = [...flatListingsArray, listing];
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
                getListings("flat", "next", listings, premiumListings, filter)
                .then(docs => {
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    if(listings.length > 0){
                        setFlatSnaps(docs.newListings);
                        setPremiumFlatSnaps(docs.newPremiumListings);
                        setFlatPage(prevState => prevState + 1);
                        listings.forEach(listing => {
                           flatListingsArray =  [...flatListingsArray, listing];
                        })
                        setFlatListings(flatListingsArray);
                    }
                    setIsPaginationDisabled(false);
                })
            }else if(page === "prev"){
                let flatListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flat", "prev", listings, premiumListings, filter)
                .then(docs => {
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    if(listings.length > 0){
                        setFlatSnaps(docs.newListings);
                        setPremiumFlatSnaps(docs.newPremiumListings);
                        setFlatPage(prevState => prevState - 1);
                        listings.forEach(listing => {
                            flatListingsArray =  [...flatListingsArray, listing];
                        })
                        setFlatListings(flatListingsArray);
                    }
                    setIsPaginationDisabled(false);
                })
            }
        }
    }

    const handleMatching = () => {
        if(currentUserInfo.mainInfo.type === "flatmate" && variant === "flatmate"){
            return;
        }
        if(currentUserInfo.mainInfo.type === "offerer" && variant === "flat"){
            return;
        }
        if(matching){
            setActiveFilters({});
            applyFilters({});
            setMatching(prevState => !prevState);
            return;
        }
        setMatching(prevState => !prevState);
        getListing(currentUserInfo.listing.id).then((doc) => {
            if(variant === "flatmate"){
                const filters = {
                    location: doc.data().flatBoxes.location ? doc.data().flatBoxes.location : null,
                    gender: doc.data().personTags.gender ? doc.data().personTags.gender : null,
                    age: doc.data().personTags.age ? doc.data().personTags.age : null,
                    smoking: doc.data().personTags.smoking ? doc.data().personTags.smoking : null,
                    job: doc.data().personTags.job ? doc.data().personTags.job : null,
                }
                setActiveFilters(filters);
                applyFilters(filters);
            }
            if(variant === "flat"){
                const filters = {
                    location: doc.data().flatTags.location ? doc.data().flatTags.location : null,
                    layout: doc.data().flatTags.layout ? doc.data().flatTags.layout : null,
                    elevator: doc.data().flatTags.elevator ? doc.data().flatTags.elevator : null,
                    internet: doc.data().flatTags.internet ? doc.data().flatTags.internet : null,
                    petAllowed: doc.data().flatTags.petAllowed ? doc.data().flatTags.petAllowed : null,
                    smokingAllowed: doc.data().flatTags.smokingAllowed ? doc.data().flatTags.smokingAllowed : null,
                }
                setActiveFilters(filters);
                applyFilters(filters);
            }
        }).catch((error) => {
            console.log(error);
        })

    }

    const applyFilters = (filter) => {
        if(variant === "flatmate"){
            setFlatmateListings(null);
            setFlatmatePage(1);
            fetchListings("flatmate", "first", null, null, filter);
        }
        if(variant === "flat"){
            setFlatListings(null);
            setFlatPage(1);
            fetchListings("flat", "first", null, null, filter);
        }
    }

    // Hadnles pagination (next or prev)
    const handlePagination = (page) => {
        if(!currentUser){
            setLimitedPaginationDialog(true);
            return;
        }
        // if(currentUser && (flatmatePage == 3 || flatPage == 3) && page === "next"){
        //     setPremiumPaginationDialog(true);
        //     return;
        // }
        if(variant === "flatmate"){
            if(page === "next"){
                fetchListings("flatmate", "next", flatmateSnaps, premiumFlatmateSnaps, activeFilters); 
            }
            if(page === "prev"){
                fetchListings("flatmate", "prev", flatmateSnaps, premiumFlatmateSnaps, activeFilters);
            }
        }
        if(variant === "flat"){
            if(page === "next"){
                fetchListings("flat", "next", flatSnaps, premiumFlatSnaps, activeFilters);
            }
            if(page === "prev"){
                fetchListings("flat", "prev", flatSnaps, premiumFlatSnaps, activeFilters);
            }
        }
    }
    return (
        <>
        <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={limitedPaginationDialog}>
            <CustomDialog 
                image="/img/dialogs/login-dialog.png" 
                heading={"Pro pokračování je nutné se přihlásit."}
                setOpen={setLimitedPaginationDialog}
                >
                <div className="dialog-body">
                    Pro pokračování a zobrazení dalších inzerátů je nutné se zaregistrovat nebo přihlásit do účtu Roomie.
                </div>
                <div className="dialog-action">
                    <button onClick={() => router.push("/register")} className="acc-btn">Registrovat</button>
                    <button onClick={() => router.push("/login")} className="main-btn">Přihlásit</button>
                </div>
            </CustomDialog>
        </Backdrop>

        <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={premiumPaginationDialog}>
            <CustomDialog 
                image="/img/dialogs/login-dialog.png" 
                heading={"Pro pokračování je nutné mít premium"}
                setOpen={setPremiumPaginationDialog}
                >
                <div className="dialog-body">
                    Pro pokračování a zobrazení dalších inzerátů je nutné mí premium účet Roomie.
                </div>
                <div className="dialog-action">
                    <button onClick={() => router.push("/premium")} className="main-btn">Získat premium</button>
                </div>
            </CustomDialog>
        </Backdrop>


        <div className="explore-feed">
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={filterOpen}>
                <Filter variant={variant} setOpen={setFilterOpen} activeFilters={activeFilters} setActiveFilters={setActiveFilters} applyFilters={applyFilters}/>
            </Backdrop>
            <div className="feed-header">
                <h3 className="header-title">{variant === "flatmate" ? "Prohlížet spolubydlící" : "Prohlížet byty"}</h3>
                <div className="header-filters">
                    <div 
                        className={`filters-filter ${(Object.keys(activeFilters).length && !matching) && "active"} ${matching && "disabled"}`} 
                        onClick={() => {
                            if(currentUser){
                                setFilterOpen(true);
                                setMatching(false);
                            }else{
                                setLimitedPaginationDialog(true);
                            }
                        }}>
                        <p>Filtry</p>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div 
                        className={`filters-match ${matching && "active"} ${!currentUserInfo ? "disabled" : (variant === "flat" && currentUserInfo.mainInfo.type === "offerer") ? "disabled" : (variant === currentUserInfo.mainInfo.type) ? "disabled" : ""}`} 
                        onClick={() => handleMatching()}>
                        <p>Přímo pro vás</p>
                        <i className="fas fa-puzzle-piece"></i>
                    </div>
                </div>
            </div>
            {/* <ExplorePremium/> */}
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
                                        premium={listing.data().userInfo.premium} 
                                        key={id}/>
                            ))}
                            {(flatmateListings.length > 7 || flatmatePage != 1) ?
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
                                        premium={listing.data().userInfo.premium}  
                                        size={listing.data().flatBoxes.size}
                                        id={listing.id} 
                                        key={id} />
                            )) }
                            {(flatListings.length > 7 || flatPage != 1) &&
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
