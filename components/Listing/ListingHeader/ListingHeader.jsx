import React, {useState} from 'react';
//Contexts
import { useFunctions } from '../../../contexts/FunctionsContext';
import { useListing } from '../../../contexts/ListingContext';
import { useAuth } from '../../../contexts/AuthContext';
//components
import InputDialog from '../../InputDialog/InputDialog';
import ListingInfoImportant from './ListingInfoImportant/ListingInfoImportant';
import ListingContact from './ListingContact/ListingContact';
import ListingPfp from './ListingPfp/ListingPfp';
//Mui
import { Backdrop, CircularProgress, Dialog, DialogContent, Button, DialogTitle, Slider, DialogActions } from '@mui/material';

const ListingHeader = () => {
    const {callable} = useFunctions();
    const {currentUser} = useAuth();
    const [moreInfoOpen, setMoreInfoOpen] = useState(false);
    const likeListing = callable("userUpdates-likeListing");
    const unlikeListing = callable("userUpdates-unlikeListing");
    //State
    const {
        type,
        cr,
        listingInfo,
        editListing,
        setEditListing,
        listingId,
        listingUsername,
        listingAge,
        listingGender,
        listingPremium,
        listingFans,
        listingLiked,
        setListingLiked,
        setReportDialog
    } = useListing();

    const handleLike = () => {
        if(!currentUser){
            snackBar("Pro přidání inzerátů do oblíbených se nejdříve přihlašte.", "error");
            return;
        }
        if(listingLiked){
            setListingLiked(false);
            unlikeListing(JSON.stringify({
                fanUid: currentUser.uid,
                listingId,
            }));
        }else{
            setListingLiked(true);
            likeListing(JSON.stringify({
                fanUid: currentUser.uid,
                listingInfo,
                listingId,
            }))
        }
    }

    if(type === "flatmate"){
        return (
            <>
            <div className="content-header">
                <div className="mid-container">
                    <ListingPfp/>
                    
                    <div className="header-info">
                        <div className="info-main">
                            <h1 className="main-name">{listingUsername} {listingPremium && <i className='fas fa-circle-check'></i>}</h1>
                            {(currentUser && listingInfo) && ((currentUser.uid == listingInfo.userInfo.uid) && (listingInfo.visible) && (!cr)) && 
                                <button onClick={() => setEditListing(prevState => !prevState)}className="main-edit-profile">{editListing ? "Zpět" : "Upravit inzerát"}</button>
                            }
                            <div className="main-actions">
                                {(listingFans && ((currentUser && listingInfo) && (currentUser.uid != listingInfo.userInfo.uid))) && <i onClick={() => handleLike()} className={`fa${listingLiked ? "s" : "r"} fa-heart main-like`}></i>}
                                {((listingInfo && currentUser) && (listingInfo.userInfo.uid != currentUser.uid)) && <i onClick={() => setMoreInfoOpen(prevState => !prevState)} className="main-more fas fa-ellipsis-h"></i>}
                            </div>
                            <ul className={`main-more-list ${moreInfoOpen && "active"}`}>
                                <li onClick={() => {
                                    setReportDialog(true);
                                    setMoreInfoOpen(false);
                                }}>Nahlásit uživatele</li>
                            </ul>
                            <div className="main-description">
                                {listingGender && <p>{listingAge}, {listingGender === "male" ? "muž" : listingGender === "female" ? "žena" : "jiné"}</p>}
                            </div>
                        </div>
                        {!listingInfo ? 

                            <div className="header-info-loading">
                                <CircularProgress/>
                            </div>
                            :  
                            <>
                                <ListingInfoImportant />
                                {!cr ?
                                    <ListingContact />
                                    :
                                    <div className="info-contact">
                                        <div className="contact-icons">
                                            <i className="icons-icon fas fa-envelope"></i>
                                            <i className="icons-icon fas fa-phone"></i>
                                            <i className="icons-icon fab fa-instagram"></i>
                                            <i className="icons-icon fab fa-facebook"></i>
                                        </div>
                                        <div className="contact-state">
                                            <i className="state-icon fas fa-lock"></i>
                                            <p className="state-description">Vaše kontaktní údaje jsou uzamčené.</p>
                                        </div>                                            
                                    </div>
                                }
                            </> 
                        }
                    </div>
            </div>
        </div>
        </>
        );
    }
    if(type === "flat"){
        return (
            <>
            <div className="content-header">
                <div className="mid-container">
                    <ListingPfp/>

                    {!listingInfo ? 
                        <div className="header-info-loading">
                            <CircularProgress />
                        </div>
                    :
                    
                    <div className="header-info">
                        <div className="info-main">
                            <h1 className="main-name">Byt {listingInfo && listingInfo.flatBoxes.layout && listingInfo.flatBoxes.layout} {listingPremium && <i className='fas fa-circle-check'></i>}</h1>
                        {((currentUser && currentUser.uid == listingInfo.userInfo.uid) && (listingInfo && listingInfo.visible)) && 
                            <button onClick={() => setEditListing(prevState => !prevState)} className="main-edit-profile">{editListing ? "Zpět" : "Upravit inzerát"}</button>
                        }  
                            <div className="main-actions">
                                {(listingFans && ((currentUser && listingInfo) && (currentUser.uid != listingInfo.userInfo.uid))) && <i onClick={() => handleLike()} className={`fa${listingLiked ? "s" : "r"} fa-heart main-like`}></i> }
                                {((listingInfo && currentUser) && (listingInfo.userInfo.uid != currentUser.uid)) && <i onClick={() => setMoreInfoOpen(prevState => !prevState)} className="main-more fas fa-ellipsis-h"></i>}
                            </div>
                            <ul className={`main-more-list ${moreInfoOpen && "active"}`}>
                                <li onClick={() => {
                                    setReportDialog(true);
                                    setMoreInfoOpen(false);
                                }}>Nahlásit uživatele</li>
                            </ul>
                            <div className="main-description">
                                <p>{listingInfo && listingInfo.flatBoxes.location}</p>
                            </div>
                        </div>
                        
                        <ListingInfoImportant/>
                        {!cr ?
                            <ListingContact/>
                            :
                            <div className="info-contact">
                                <div className="contact-icons">
                                    <i className="icons-icon fas fa-envelope"></i>
                                    <i className="icons-icon fas fa-phone"></i>
                                    <i className="icons-icon fab fa-instagram"></i>
                                    <i className="icons-icon fab fa-facebook"></i>
                                </div>
                                <div className="contact-state">
                                    <i className="state-icon fas fa-lock"></i>
                                    <p className="state-description">Vaše kontaktní údaje jsou uzamčené.</p>
                                </div>                                            
                            </div>
                        }
                </div>
            }
        </div>
    </div>
            </>
        );
    }
};

export default ListingHeader;
