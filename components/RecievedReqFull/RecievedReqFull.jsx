import React from 'react'
import { useDb } from '../../contexts/DbContext'
import { useLoading } from '../../contexts/LoadingContext'
import { useAuth } from '../../contexts/AuthContext'
import { arrayUnion } from '@firebase/firestore'

const RecievedReqFull = ({reqInfo, id, setOpen}) => {
    //Variables---
        //Contexts
        const {updateUser, getUser, updateListing, getListing, addFriend} = useDb();
        const [loading, setLoading] = useLoading();
        const {currentUser} = useAuth();


        //Functions
        const handleAction = (action) => {
            setLoading(true);
            setOpen(false);
           updateUser(currentUser.uid, {
               [`requests.recieved.${id}.status`]: action
           }).then(res => {
               return updateUser(id, {
                   [`requests.sent.${currentUser.uid}.status`]: action
               })
           }) .then(res => {
               if(action === "accepted") handleFriendship();
               setLoading(false);
               setOpen(false);
           }).catch(error => {
               setLoading(false);
               setOpen(true);
           })
        }


        const handleFriendship = () => {
            let requestedUser;
            let requestingUser = reqInfo;
           getUser(currentUser.uid)
           .then(user => {
                requestedUser = user;
                //Adding a friend to requesting user's listing
                return addFriend(requestingUser.listingId, id, {
                    username: requestedUser.data().mainInfo.username,
                    age: requestedUser.data().mainInfo.age,
                    type: requestedUser.data().mainInfo.type,
                    listingId: requestedUser.data().listing.id,
                    gender: requestedUser.data().mainInfo.gender
                })
           }).then(res => {
               return updateListing(requestingUser.listingId, {
                   friends: arrayUnion(requestedUser.id)
               })
           }).then(res => {
               //Adding a firend to requested user's listing
               return addFriend(requestedUser.data().listing.id, requestedUser.id, {
                username: requestingUser.name,
                age: requestingUser.age,
                type: requestingUser.type,
                listingId: requestingUser.listingId,
                gender: requestingUser.gender
               })
           }).then(res => {
               return updateListing(requestedUser.data().listing.id, {
                   friends: arrayUnion(id)
               })
           })
        }

    return (
        <div className="recieved-req-full">
            <i onClick={() => setOpen(false)} className="fas fa-times full-close-icon"></i>
            <div className="full-pfp-container">
                <img src="/img/pfps/radek-pfp.png" className="container-pfp"></img>
            </div>
            <div className="full-name">{reqInfo.name}</div>
            <div className="full-description">{reqInfo.gender === "male" ? "Muž" : reqInfo.gender === "female" ? "Žena" : gender === "other" ? "Jiné" : ""}, {reqInfo.age}</div>
            <div className="full-message">{reqInfo.message}</div>
            <div className="full-actions">
                {reqInfo.status === "pending" ?
                    <>
                    <button onClick={() => handleAction("rejected")}     className="acc-btn">Odmítnout</button>
                    <button onClick={() => handleAction("accepted")}    className="main-btn">Přijmout</button>
                    </>
                :
                <div className="full-actions-resolved">
                    <p>{reqInfo.status === "accepted" ? "Tato žádost byla přijata." : "Tato žádost byla odmítnuta."}</p>
                    <button onClick={() =>setOpen(false)} className="main-btn">Zavřít</button>
                </div>
                }
            </div>
        </div>
    )
}

export default RecievedReqFull
