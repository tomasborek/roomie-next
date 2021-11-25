import React from 'react'
//Components
import Tag from "../../Tag/Tag";
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
                    <textarea value={bio} onChange={e => setBio(e.target.value)} type="text" rows="5" className="bio-content" placeholder="Zadejte něco o sobě..."></textarea>
                    :
                    <div className="bio-content">
                        {listingInfo ? listingInfo.data().bio === "" ? "Tento uživatel nemá bio" : listingInfo.data().bio
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
                    <div className="preferences-content">
                        {listingInfo && !editListing && Object.keys(listingInfo.data().personTags).map(tag => (
                            listingInfo.data().personTags[tag] != "" && <Tag>{listingInfo.data().personTags[tag]}</Tag> 
                        ))}
                        {addedPersonTags && editListing && Object.keys(addedPersonTags).map(tag => (
                            addedPersonTags[tag] != "" && <Tag>{addedPersonTags[tag]}</Tag>
                        ))}
                        {editListing && <Tag onClick={() => setPersonTagOverlay(true)} plus={true}></Tag>}    
                    </div>
                </div>
                <div className="about-preferences">
                    <div className="preferences-header">Jaké bydlení hledám?</div>
                    <div className="preferences-content">
                        {listingInfo && !editListing && Object.keys(listingInfo.data().flatTags).map(tag => (
                            listingInfo.data().flatTags[tag] != "" && <Tag>{listingInfo.data().flatTags[tag]}</Tag>
                        ))}
                        {addedFlatTags && editListing && Object.keys(addedFlatTags).map(tag => (
                            addedFlatTags[tag] != "" && <Tag>{addedFlatTags[tag]}</Tag>
                        ))}
                        {editListing && <Tag onClick={() => setFlatTagOverlay(true)} plus={true}></Tag>}
                    </div>
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
                        <textarea onChange={(e) => setFlatBio(e.target.value)} value={flatBio} type="text" rows="5" className="bio-content" placeholder="Zadejte něco o svém bydlení..."></textarea>
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
                        <textarea onChange={(e) => setPersonBio(e.target.value)} value={personBio} type="text" rows="5" className="bio-content" placeholder="Zadejte něco o sobě..."></textarea>
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
                    <div className="preferences-content">
                    {listingInfo && !editListing && Object.keys(listingInfo.data().personTags).map(tag => (
                            listingInfo.data().personTags[tag] != "" && <Tag>{listingInfo.data().personTags[tag]}</Tag> 
                    ))}
                    {addedPersonTags && editListing && Object.keys(addedPersonTags).map(tag => (
                        addedPersonTags[tag] != "" && <Tag>{addedPersonTags[tag]}</Tag>
                    ))}
                        {editListing &&<Tag plus={true} onClick={() => setPersonTagOverlay(true)}/>}
                    </div>
                </div>
        </div>
        )
    }
    
}

export default ListingAbout
