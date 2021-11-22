import React from 'react'

const ListingContact = () => {
    return (
        <>
        {currentUser && listingInfo.data().friends.includes(currentUser.uid) || currentUser && listingInfo.data().userInfo.uid === currentUser.uid ?
            <div className="info-contact unlocked">
                <div className="contact-icons">
                    <i className="icons-icon fab fa-instagram"></i>
                    <i className="icons-icon fab fa-facebook"></i>
                </div>
                <div className="contact-boxes">
                    <div className="boxes-email">
                        <i className="fas fa-phone"></i>
                        <p>email@email.com</p>
                    </div>
                    <div className="boxes-phone">
                        <i className="fas fa-envelope"></i>
                        <p>731011045</p>
                    </div>
                </div>
                {listingInfo.data().userInfo.uid === currentUser.uid ?
                <div className="contact-button-wrapper">
                    <button onClick={() => router.push("/requests/recieved")} className="contact-button">Zobrazit žádosti</button>
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
                    <i className={`state-icon fas fa-${currentUser && listingInfo.data().requests.includes(currentUser.uid) ? "hourglass-half" : "lock"}`}></i>
                    <p className="state-description">
                        {currentUser && listingInfo.data().requests.includes(currentUser.uid) ? "Vaše žádost čeká na vyřízení." : "Pošlete uživateli žádost o přístup ke kontaktním údajům."}
                    </p>
                </div>
            
                <div className="contact-button-wrapper">
                    {currentUser && listingInfo.data().requests.includes(currentUser.uid) ? "" : <button className="contact-button">Poslat žádost</button>}
                </div>
            </div>
            }
    </>
    )
}

export default ListingContact
