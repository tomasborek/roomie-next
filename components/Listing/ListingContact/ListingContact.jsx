import React, {useEffect, useState} from 'react'
//next
import {useRouter} from "next/router";
//Contexts
import { useAuth } from '../../../contexts/AuthContext'

const ListingContact = ({listingInfo, editListing, state}) => {
    const {currentUser} = useAuth();
    const {setReqDialogOpen} = state;
    const router = useRouter();
    //State
    const [isFriend, setIsFriend] = useState(false);
    const [isRequested, setIsRequested] = useState(false);
    const [isRequesting, setIsRequesting] = useState(false);
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        if(listingInfo && currentUser){
            if(listingInfo.data().userInfo.uid === currentUser.uid){
                setIsOwner(true);
            }else{
                setIsOwner(false);
            }
            if(listingInfo.data().friends.includes(currentUser.uid)){
                setIsFriend(true);
            }else{
                setIsFriend(false);
            }
            if(listingInfo.data().requests.includes(currentUser.uid)){
                setIsRequested(true);
            }else{
                setIsRequested(false);
            }
            if(listingInfo.data().sentRequests.includes(currentUser.uid)){
                setIsRequesting(true);
            }else{
                setIsRequesting(false);
            }
        }
    }, [listingInfo, currentUser])
    return (
        <>
        {/*Unlocked version*/}
        {(isFriend || isOwner) ?
            <div className="info-contact unlocked">
                <div className="contact-items">
                    <div className="items-main">
                        <div className="items-item">
                            <i className="fas fa-phone"></i>
                            <p>+420 {
                                [listingInfo.data().userInfo.contact.phone.slice(0, 3), " ", listingInfo.data().userInfo.contact.phone.slice(3,6), " ", listingInfo.data().userInfo.contact.phone.slice(6)].join('')
                            }</p>
                        </div>
                        <div className="items-item">
                            <i className="fas fa-envelope"></i>
                            <p>{listingInfo.data().userInfo.contact.email}</p>
                        </div>
                    </div>
                    <div className="items-socials">
                            <i onClick={() => listingInfo.data().userInfo.contact.fb != null  ? window.location.href = listingInfo.data().userInfo.contact.fb : "" } className={`fab fa-facebook-square socials-item ${listingInfo.data().userInfo.contact.fb != null && "active" }`}></i>
                            <i onClick={() => listingInfo.data().userInfo.contact.ig != null ? window.location.href =  listingInfo.data().userInfo.contact.ig : ""} className={`fab fa-instagram socials-item ${(listingInfo.data().userInfo.contact.ig != null && "active" )}`}></i>
                    </div>
                </div>
                {isFriend &&
                    <div className="contact-state">
                        <i className="state-icon fas fa-users"></i>
                        <p className="state-description">Vy a {listingInfo.data().userInfo.username} jste ve spojení.</p>
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
                        <i className={`state-icon fas fa-lock`}></i>
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
                        (currentUser) ? <button className="main-btn contact-button" onClick={() => setReqDialogOpen(true)}>Pošlat žádost</button> :
                        ""
                        }
                    </>
                    }
            </div>
        }
    </>
    )
}

export default ListingContact
