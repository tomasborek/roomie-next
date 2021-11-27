import React from 'react'
//Components
import Tag from "../../Tag/Tag";
import ListingTags from '../ListingTags/ListingTags';
//MUI
import { Skeleton } from '@mui/material';

const ListingAbout = ({type, listingInfo, editListing, state, refs}) => {
    const {addedFlatTags, addedPersonTags, bio, setBio, personBio, setPersonBio, flatBio, setFlatBio, setPersonTagOverlay, setFlatTagOverlay, setPersonBoxerOverlay, setFlatBoxerOverlay} = state;
    if(type === "flatmate"){
        return (
            <div className="body-about">
                <div className="about-bio">
                    <div className="bio-header">
                         O mně
                    </div>
                    {editListing ? 
                    <textarea maxLength={3000} value={bio} onChange={e => setBio(e.target.value)} type="text" rows="5" className="bio-content" placeholder="Zadejte něco o sobě..."></textarea>
                    :
                    <div className="bio-content">
                        {listingInfo ? listingInfo.data().bio === "" ? "Tento uživatel nemá bio" : bio
                        : 
                        <div className="skeletons">
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton sx={{width: "50%"}} variant="text"/>
                        </div>  
                        }
                    </div>
                    }
                </div>
                <div className="about-preferences">
                    <div className="preferences-header">
                        Koho hledám?
                    </div>
                   
                    <ListingTags type="person" existingTags={listingInfo && listingInfo.data().personTags} addedTags={addedPersonTags} editListing={editListing} setOverlay={setPersonTagOverlay} />
                  
                </div>
                <div className="about-preferences">
                    <div className="preferences-header">Jaké bydlení hledám?</div>
                        <ListingTags type="flat" existingTags={listingInfo && listingInfo.data().flatTags} addedTags={addedFlatTags} editListing={editListing} setOverlay={setFlatTagOverlay}/>
                </div> 
            </div>
        )
    }
    if(type === "flat"){
        return(
            <div className="body-about">
                <div className="about-bio">
                    <div className="bio-header">Podrobnosti o bydlení</div>
                    <div className="bio-content">
                        {editListing ?
                        <textarea maxLength={3000} onChange={(e) => setFlatBio(e.target.value)} value={flatBio} type="text" rows="5" className="bio-content" placeholder="Zadejte něco o svém bydlení..."></textarea>
                        :
                        listingInfo ? 
                        listingInfo.data().flatBio === "" ? "Toto bydlení nemá popis..." : listingInfo.data().flatBio
                        :
                        <div className="skeletons">
                            <Skeleton variant="text" sx={{width: "100%"}}/>
                            <Skeleton variant="text" sx={{width: "50%"}}/>
                        </div>
                        } 
                    </div>
                                
                </div>
                <div className="about-bio">
                    <div className="bio-header">Podrobnosti o inzeranotvi</div>
                    <div className="bio-content">
                        {editListing ?
                        <textarea maxLength={3000} onChange={(e) => setPersonBio(e.target.value)} value={personBio} type="text" rows="5" className="bio-content" placeholder="Zadejte něco o sobě..."></textarea>
                        :
                        listingInfo ? 
                        listingInfo.data().personBio === "" ? "Tento uživatel nemá bio..." : listingInfo.data().personBio
                        :
                        <div className="skeletons">
                            <Skeleton variant="text" sx={{width: "100%"}}/>
                            <Skeleton variant="text" sx={{width: "50%"}}/>
                        </div>
                        } 
                    </div>
                                
                </div>
                <div className="about-preferences">
                    <div className="preferences-header">
                        Koho hledám?
                    </div>
                    <ListingTags type="person" existingTags={listingInfo && listingInfo.data().personTags} addedTags={addedPersonTags} editListing={editListing} setOverlay={setPersonTagOverlay} />
                </div>
        </div>
        )
    }
    
}

export default ListingAbout
