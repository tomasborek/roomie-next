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
        {/*Friends or user's listing */}
        {currentUser && listingInfo.data().friends.includes(currentUser.uid) || currentUser && listingInfo.data().userInfo.uid === currentUser.uid ?
            <div className="info-contact unlocked">
                <div className="contact-boxes">
                    <div className="boxes-email boxes-box">
                        <i className="fas fa-phone"></i>
                        <p>email@email.com</p>
                    </div>
                    <div className="boxes-phone boxes-box">
                        <i className="fas fa-envelope"></i>
                        <p>731011045</p>
                    </div>
                  
                    <div className="boxes-ig boxes-box">
                        <i className="icons-icon fab fa-instagram"></i>
                        <p>Instagram</p>
                    </div>
                    <div className="boxes-fb boxes-box">
                        <i className="icons-icon fab fa-facebook"></i>
                        <p>Facebook</p>
                    </div>
                </div>
                
                {listingInfo.data().userInfo.uid === currentUser.uid ?
                <div className="contact-button-wrapper">
                    <button onClick={() => router.push("/requests/recieved")} className="general-btn contact-button">Zobrazit žádosti</button>
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
                    <i className="icons-icon fab fa-facebook"></i>
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
            }
    </>
    )
}

export default ListingContact
