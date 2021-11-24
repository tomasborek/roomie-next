import React from 'react'

//Components
import ListingInfoImportant from '../ListingInfoImportant/ListingInfoImportant'
import ListingContact from '../ListingContact/ListingContact'
//MUI
import { CircularProgress } from '@mui/material'

const ListingHeader = ({type, listingInfo}) => {
    if(type === "flatmate"){
        return (
            <div className="content-header">
                <div className="mid-container">
                    <div className="header-pfp-container">
                        {listingInfo ? <img src={listingInfo.data().userInfo.gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png"} className="header-pfp"></img> : <div className="header-pfp"></div> }   
                    </div>

                    {!listingInfo ? 
                        <div className="header-info-loading">
                            <CircularProgress/>
                        </div>
                        :   
                        <div className="header-info">
                            <div className="info-main">
                                            <h1 className="main-name">{listingInfo.data().userInfo.name}</h1>
                                            {currentUser && currentUser.uid == listingInfo.data().userInfo.uid &&<button onClick={() => setEditListing(prevState => !prevState)}className="main-edit-profile">{editListing ? "Zpět" : "Upravit profil"}</button>}
                                            <i className="main-more fas fa-ellipsis-h"></i>
                                            <div className="main-description">
                                                <p>{listingInfo.data().userInfo.age}, {listingInfo.data().userInfo.gender === "male" ? "muž" : listingInfo.data().userInfo.gender === "female" ? "žena" : "jiné"}</p>
                                            </div>
                            </div>
                        <ListingInfoImportant type="flatmate"/>
                        <ListingContact/>
                        </div>
                    }
                </div>
            </div>
        )
    }
    if(type === "flat"){
        return (
            <div className="content-header">
                            <div className="mid-container">
                                <div className="header-pfp-container">
                                    <img src="/img/listing/byt.png" className="header-pfp"></img>
                                </div>

                                {!listingInfo ? 
                                <div className="header-info-loading">
                                    <CircularProgress />
                                </div>
                                :
                                <div className="header-info">
                                    <div className="info-main">
                                        <h1 className="main-name">Byt {listingInfo && listingInfo.data().flatBoxes.layout && listingInfo.data().flatBoxes.layout}</h1>
                                      {currentUser && listingInfo.data().userInfo.uid == currentUser.uid ? <button onClick={() => setEditListing(prevState => !prevState)} className="main-edit-profile">{editListing ? "Zpět" : "Upravit inzerát"}</button> : "" }  
                                        <i className="main-more fas fa-ellipsis-h"></i>
                                        <div className="main-description">
                                            <p>{listingInfo && listingInfo.data().flatBoxes.location}</p>
                                        </div>
                                    </div>
                                    <ListingInfoImportant type="flat"/>
                                    <ListingContact/>                  
                                </div>
                                }
                            </div>
            </div>
        )
    }
}

export default ListingHeader
