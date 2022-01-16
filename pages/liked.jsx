import React, {useEffect, useState} from 'react'
//Layout
import PageFeedLayout from '../components/PageFeedLayout/PageFeedLayout'
//Components
import Pagination from '../components/Pagination/Pagination'
import LikedListing from '../components/LikedListing/LikedListing'
//MUI
import { CircularProgress } from '@mui/material'
//Contexts
import { useDb } from '../contexts/DbContext'
import { useAuth } from '../contexts/AuthContext'

const liked = () => {
    const {currentUser} = useAuth();
    const {getLiked} = useDb();

    const [likedListings, setLikedListings] = useState(null);
    const [likedListingsSnaps, setLikedListingsSnaps] = useState(null);

    const [paginationDisabled, setPaginationDisabled] = useState(false);
    const [paginationPage, setPaginationPage] = useState(1);

    useEffect(() => {
        if(currentUser){
            handleFetch(currentUser.uid, "first", null);
        }
    }, [currentUser])

    const handlePagination = (page) => {
        if(page === "next"){
            handleFetch(currentUser.uid, "next", likedListingsSnaps);
        }
        if(page === "prev"){
            handleFetch(currentUser.uid, "prev", likedListingsSnaps);
        }
    }

    const handleFetch = (uid, page, snaps) => {
        const listingsArray = [];
        if(page === "first"){
            getLiked(uid, page, null).then((listings) => {
                setLikedListingsSnaps(listings.docs);
                listings.docs.forEach((listing) => {
                    const listingData = listing.data();
                    listingData.listingId = listing.id;
                    listingsArray = [...listingsArray, listingData];
                })
                setLikedListings(listingsArray);
            })
        }else if(page === "next"){
            setPaginationDisabled(true);
            getLiked(uid, page, snaps).then((listings) => {
                if(listings.docs.length > 0){
                    setPaginationPage(prevState => prevState + 1);
                    setLikedListingsSnaps(listings.docs);
                    listings.docs.forEach((listing) => {
                        const listingData = listing.data();
                        listingData.listingId = listing.id;
                        listingsArray = [...listingsArray, listingData];
                    })
                    setPaginationDisabled(false);
                }else{
                    setPaginationDisabled(false);
                }
                setLikedListings(listingsArray);
            })
        }
        if(page === "prev"){
            getLiked(uid, page, snaps).then((listings) => {
                if(listings.docs.length > 0){
                    setPaginationPage(prevState => prevState - 1);
                    setLikedListingsSnaps(listings.docs);
                    listings.docs.forEach((listing) => {
                        const listingData = listing.data();
                        listingData.listingId = listing.id;
                        listingsArray = [...listingsArray, listingData];
                    })
                    setPaginationDisabled(false);
                }else{
                    setPaginationDisabled(false);
                } 
                setLikedListings(listingsArray);
            })
        }
        
    }
    return (
        <div className='Liked'>
            <PageFeedLayout heading={"Oblíbené"}>
                <div className="content-feed">
                    {(likedListings != null && likedListings.length) ?
                        <>
                            {likedListings.map((listing) => (
                                <LikedListing info={listing}/>
                            ))}
                        </>
                        :
                        ""
                    }
                    {likedListings == null && 
                        <div className="feed-loading">
                            <CircularProgress/>
                        </div>
                    }
                    {(likedListings && likedListings.length === 0) &&
                         <div className="feed-empty">
                            <img src="/img/bad-results/notfound.png" />
                            <p className="empty-description">Dosud nemáte oblíbené inzeráty.</p>
                        </div>
                    }
                    {((likedListings && likedListings.length > 9) || paginationPage != 1) ? 
                    <Pagination handlePagination={handlePagination} page={paginationPage} setPage={setPaginationPage} isDisabled={paginationDisabled} />
                    :
                    ""}
                </div>
            </PageFeedLayout>
        </div>
    )
}

export default liked
