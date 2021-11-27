import React from 'react'
//next
import {useRouter} from "next/router";
//Contexts
import { useAuth } from '../../../contexts/AuthContext'

const ListingContact = ({listingInfo, editListing, state}) => {
    const {currentUser} = useAuth();
    const {setReqDialogOpen} = state;
    const router = useRouter();
    return (
        <>
        {/*Unlocked version*/}
        {(currentUser && listingInfo.data().friends.includes(currentUser.uid) || currentUser && listingInfo.data().userInfo.uid === currentUser.uid) ?
        <div className="info-contact unlocked">
            <div className="contact-items">
                <div className="items-main">
                    <div className="items-item">
                        <i className="fas fa-phone"></i>
                        <p>+420 {listingInfo.data().userInfo.contact.phone}</p>
                    </div>
                    <div className="items-item">
                        <i className="fas fa-envelope"></i>
                        <p>{listingInfo.data().userInfo.contact.email}</p>
                    </div>
                </div>
                <div className="items-socials">
                        <i onClick={() => listingInfo.data().userInfo.contact.fb != "" ? window.location.href = listingInfo.data().userInfo.contact.fb : "" } className={`fab fa-facebook-square socials-item ${listingInfo.data().userInfo.contact.fb != "" && "active" }`}></i>
                        <i onClick={() => listingInfo.data().userInfo.contact.ig != "" ? window.location.href = "https://" + listingInfo.data().userInfo.contact.ig : ""} className={`fab fa-instagram socials-item ${(listingInfo.data().userInfo.contact.ig != "" && "active" )}`}></i>
                </div>
            </div>
            {listingInfo.data().friends.includes(currentUser.uid) &&
                <div className="contact-state">
                    <i className="state-icon fas fa-users"></i>
                    <p className="state-description">Vy a {listingInfo.data().userInfo.name} jste ve spojení.</p>
                </div>
            }
            {(listingInfo.data().userInfo.uid === currentUser.uid && !editListing) &&
            <button onClick={() => router.push("/requests/recieved")} className="main-btn contact-button">Zobrazit žádosti</button>
            }
            
        </div>
        :
        <div className="info-contact">
                {(!currentUser || !listingInfo.data().requests.includes(currentUser.uid)) &&
                <div className="contact-icons">
                    <i className="fas fa-phone"></i>
                    <i className="fas fa-envelope"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                </div>
                }
                <div className="contact-state">
                    <i className="state-icon fas fa-lock"></i>
                    <p className="state-description">
                        {!currentUser ? "Pošlete uživateli žádost o přístup ke kontaktním údajům." :
                        (currentUser && listingInfo.data().requests.includes(currentUser.uid)) ? "Žádost čeká na vyřízení." :
                        (currentUser && listingInfo.data().sentRequests.includes(currentUser.uid)) ? "Uživatel vám zaslal žádost." :
                        (currentUser) ? "Pošlete uživateli žádost o přístup ke kontaktním údajům." :
                        ""}
                    </p>
                </div>
                {(!currentUser || !listingInfo.data().requests.includes(currentUser.uid))&&
                   <>
                    {!currentUser ? <button className="main-btn contact-button" onClick={() => router.push("/login")}>Pošlat žádost</button> :
                    (currentUser && listingInfo.data().sentRequests.includes(currentUser.uid)) ? <button onClick={() => router.push("/requests/recieved")}>Zobrazit žádosti</button> :
                    (currentUser) ? <button className="main-btn contact-button" onClick={() => router.push("/requests/recieved")}>Pošlat žádost</button> :
                    ""
                    }
                    </>
                }
        </div>
        }
        {/* Friends or user's listing
        {currentUser && listingInfo.data().friends.includes(currentUser.uid) || currentUser && listingInfo.data().userInfo.uid === currentUser.uid ?
            <div className="info-contact unlocked">
               
               <div className="contact-items">
                   <div className="items-main-items">
                    <div className="items-item">
                        <i className="fas fa-phone"></i>
                        <p>+420 731 011 045</p>
                    </div>
                    <div className="items-item">
                        <i className="fas fa-envelope"></i>
                        <p>email@email.com</p>
                    </div>
                   </div>
                   <div className="items-social-items">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram"></i>
                   </div>
                  
               </div>
                
                {listingInfo.data().userInfo.uid === currentUser.uid ?
                <div className="contact-button-wrapper">
                    <button onClick={() => router.push("/requests/recieved")} className="main-btn contact-button">Zobrazit žádosti</button>
                </div>  
                :
                <div className="contact-state">
                    <i className="state-icon fas fa-users"></i>
                    <p className="state-description">{`Vy a ${listingInfo.data().userInfo.name} jste ve spojení.`}</p>
                </div>  
                }
            </div>
//Locked version, for strangers or people awaiting request reslove
            :
            <div className="info-contact">
                {!currentUser || currentUser && !listingInfo.data().requests.includes(currentUser.uid) ?
                <div className="contact-icons">
                    <i className="icons-icon fas fa-envelope"></i>
                    <i className="icons-icon fas fa-phone"></i>
                    <i className="icons-icon fab fa-instagram"></i>
                    <i className="icons-icon fab fa-facebook-square"></i>
                </div>
                :
                ""
                }
                <div className="contact-state">
                    <i className={`state-icon fas fa-${!currentUser ? "lock" : listingInfo.data().requests.includes(currentUser.uid) ? "hourglass-half" : listingInfo.data().sentRequests.includes(currentUser.uid) ? "lightbulb" : "lock"}`}></i>
                    <p className="state-description">
                        {currentUser ?
                        listingInfo.data().requests.includes(currentUser.uid) ? "Vaše žádost čeká na vyřízení." : listingInfo.data().sentRequests.includes(currentUser.uid) ? "Uživatel vám poslal žádost o kontaktní údaje." : "Pošlete uživateli žádost o přístup ke kontaktním údajům."
                        :
                        "Pošlete uživateli žádost o přístup ke kontaktním údajům."
                        }
                       
                    </p>
                </div>
            
                <div className="contact-button-wrapper">
                    {currentUser ?
                    listingInfo.data().requests.includes(currentUser.uid) ? "" : listingInfo.data().sentRequests.includes(currentUser.uid) ? <button className="main-btn contact-button" onClick={() => router.push("/requests/recieved")}>Zobrazit žádost</button> : <button onClick={() => setReqDialogOpen(true)} className=" main-btn contact-button">Poslat žádost</button>
                    :
                    <button className="main-btn contact-button" onClick={() => router.push("/login")}>Poslat žádost</button>
                    }
                    
                </div>
            </div>
            } */}
    </>
    )
}

export default ListingContact
