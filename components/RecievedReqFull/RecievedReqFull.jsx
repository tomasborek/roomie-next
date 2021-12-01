import React from 'react'
//next
import Link from "next/link";
//Context
import { useDb } from '../../contexts/DbContext'
import { useLoading } from '../../contexts/LoadingContext'
import { useAuth } from '../../contexts/AuthContext'
import { arrayRemove, arrayUnion } from '@firebase/firestore'

const RecievedReqFull = ({reqInfo, id, setOpen}) => {
    //Variables---
        //Contexts
        const {updateUser, getUser, updateListing, resolveRequest, addFriend, addNotification, deleteNotification} = useDb();
        const [loading, setLoading] = useLoading();
        const {currentUser} = useAuth();


        //Functions
        const handleAction = (action) => {
            setLoading(true);
            setOpen(false);
            resolveRequest("recieved", currentUser.uid, id)
            .then(res => {
                return resolveRequest("sent", currentUser.uid, id,)
            }).then(res => {
                if(action === "accepted") handleFriendship();
                if(action === "rejected") handleReject();
            })
        }


        const handleFriendship = () => {
            //Us
            let requestedUser;
            //The one who sent request
            let requestingUser = reqInfo;
           getUser(currentUser.uid)
           .then(user => {
                requestedUser = user;
                //Adding a friend to requesting user's profile
                return addFriend(id, requestedUser.id, {
                    username: requestedUser.data().mainInfo.username,
                    age: requestedUser.data().mainInfo.age,
                    type: requestedUser.data().mainInfo.type,
                    listingId: requestedUser.data().listing.id,
                    gender: requestedUser.data().mainInfo.gender
                })
           }).then(res => {
               return updateListing(requestingUser.listingId, {
                   friends: arrayUnion(requestedUser.id),
                   sentRequests: arrayRemove(requestedUser.id)
               })
           }).then(res => {
               //Adding a firend to requested user's listing
               return addFriend(requestedUser.id, id, {
                username: requestingUser.name,
                age: requestingUser.age,
                type: requestingUser.type,
                listingId: requestingUser.listingId,
                gender: requestingUser.gender
               })
           }).then(res => {
               return updateListing(requestedUser.data().listing.id, {
                   friends: arrayUnion(id),
                   requests: arrayRemove(id)
               })
           }).then(res => {
               handleNotification(requestedUser);
               setLoading(false);
           })
        }

        const handleReject = () =>{
                updateListing(reqInfo.listingId, {
                    requests: arrayRemove(id)
                }).then(res => {
                return updateListing(requestedUser.data().listing.id, {
                    requests: arrayRemove(id)
                })
            }).then(res => {
                setLoading(false);
            }).catch(error => {
                setOpen(true);
                setLoading(false)
            })
        }

        const handleNotification = (requestedUser) => {
            addNotification("acceptedRequest", id, requestedUser.id, requestedUser.data().mainInfo.username)
            .then(res => {
                deleteNotification(requestedUser.id, id);
            })
        }

    return (
        <div className="recieved-req-full">
            <i onClick={() => setOpen(false)} className="fas fa-times full-close-icon"></i>
            <div className="full-pfp-container">
                <img src="/img/pfps/radek-pfp.png" className="container-pfp"></img>
            </div>
            <div className="full-name">{reqInfo.name}</div>
            <div className="full-description">{reqInfo.gender === "male" ? "Muž" : reqInfo.gender === "female" ? "Žena" : reqInfo.gender === "other" ? "Jiné" : ""}, {reqInfo.age}</div>
            <div className="full-message">{reqInfo.message}</div>
            <div className="full-actions">
                    <button onClick={() => handleAction("rejected")}     className="acc-btn">Odmítnout</button>
                    <button onClick={() => handleAction("accepted")}    className="main-btn">Přijmout</button>
            </div>
            <Link  href={`/${reqInfo.type}/${reqInfo.listingId}`}><a className="full-profile-link">Zobrazit inzerát...</a></Link>
        </div>
    )
}

export default RecievedReqFull
