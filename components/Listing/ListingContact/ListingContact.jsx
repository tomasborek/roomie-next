import React, {useEffect, useState} from 'react'
//next
import {useRouter} from "next/router";
//Contexts
import { useAuth } from '../../../contexts/AuthContext'

//COmponents
//MUI
import { CircularProgress } from '@mui/material';

const ListingContact = ({listingInfo, editListing, state}) => {
    const {currentUser} = useAuth();
    const {setReqDialogOpen, contactLoading} = state;
    const router = useRouter();
    //State
    const [isFriend, setIsFriend] = useState(false);
    const [isRequested, setIsRequested] = useState(false);
    const [isRequesting, setIsRequesting] = useState(false);
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        if(listingInfo && currentUser){
            if(listingInfo.userInfo.uid === currentUser.uid){
                setIsOwner(true);
            }else{
                setIsOwner(false);
            }
            if(listingInfo.friends.includes(currentUser.uid)){
                setIsFriend(true);
            }else{
                setIsFriend(false);
            }
            if(listingInfo.requests.includes(currentUser.uid)){
                setIsRequested(true);
            }else{
                setIsRequested(false);
            }
            if(listingInfo.sentRequests.includes(currentUser.uid)){
                setIsRequesting(true);
            }else{
                setIsRequesting(false);
            }
        }
    }, [listingInfo, currentUser]);

    useEffect(() => {
        console.log(contactLoading);
    }, [])
    return (
    <>
        {!contactLoading ?
             <>
                {/*Unlocked version*/}
                {(isFriend || isOwner) ?
                    <div className="info-contact unlocked">
                        <div className="contact-items">
                            <div className="items-main">
                                <div className="items-item">
                                    <i className="fas fa-phone"></i>
                                    <p>{
                                        [listingInfo.userInfo.contact.phone.slice(0, 4), " ", listingInfo.userInfo.contact.phone.slice(4, 7), " ", listingInfo.userInfo.contact.phone.slice(7,10), " ", listingInfo.userInfo.contact.phone.slice(10)].join('')
                                    }</p>
                                </div>
                                <div className="items-item">
                                    <i className="fas fa-envelope"></i>
                                    <p>{listingInfo.userInfo.contact.email}</p>
                                </div>
                            </div>
                            <div className="items-socials">
                                    <i onClick={() => listingInfo.userInfo.contact.fb ? window.location.href = listingInfo.userInfo.contact.fb : "" } className={`fab fa-facebook-square socials-item ${listingInfo.userInfo.contact.fb  && "active" }`}></i>
                                    <i onClick={() => listingInfo.userInfo.contact.ig ? window.location.href =  listingInfo.userInfo.contact.ig : ""} className={`fab fa-instagram socials-item ${(listingInfo.userInfo.contact.ig  && "active" )}`}></i>
                            </div>
                        </div>
                        {isFriend &&
                            <div className="contact-state">
                                <i className="state-icon fas fa-users"></i>
                                <p className="state-description">Vy a {listingInfo.userInfo.username} jste ve spojení.</p>
                            </div>
                        }
                        {(isOwner && !editListing) &&
                        <button onClick={() => router.push("/requests/recieved")} className="main-btn contact-button">Zobrazit žádosti</button>
                        }  
                    </div>
                :
                    <div className="info-contact">
                            {(!currentUser || !isRequested) &&
                            <div className="contact-icons">
                                <i className="fas fa-phone"></i>
                                <i className="fas fa-envelope"></i>
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                            }
                            <div className="contact-state">
                                <i className={`state-icon fas fa-${isRequested ? "hourglass-half" : "lock"}`}></i>
                                <p className="state-description">
                                    {!currentUser ? "Pošlete uživateli žádost o přístup ke kontaktním údajům." :
                                    isRequested ? "Žádost čeká na vyřízení." :
                                    isRequesting ? "Uživatel vám zaslal žádost." :
                                    (currentUser) ? "Pošlete uživateli žádost o přístup ke kontaktním údajům." :
                                    ""}
                                </p>
                            </div>
                            {(!currentUser || !isRequested) &&
                            <>
                                {!currentUser ? <button className="main-btn contact-button" onClick={() => router.push("/login")}>Poslat žádost</button> :
                                (isRequesting) ? <button className="contact-button main-btn" onClick={() => router.push("/requests/recieved")}>Zobrazit žádosti</button> :
                                (currentUser) ? <button className="main-btn contact-button" onClick={() => setReqDialogOpen(true)}>Poslat žádost</button> :
                                ""
                                }
                            </>
                            }
                    </div>
                }
         </>
         :
         <div className="listing-contact-loading">
            <CircularProgress sx={{padding: "10px"}}/>
         </div>
        }
    </>
    )
}

export default ListingContact
