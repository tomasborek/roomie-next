import React from 'react'
//next
import Link from "next/link";
import { useRouter } from 'next/router';
//Context
import { useDb } from '../../contexts/DbContext'
import { useLoading } from '../../contexts/LoadingContext'
import { useAuth } from '../../contexts/AuthContext'
import { arrayRemove, arrayUnion } from '@firebase/firestore'
import {useFunctions} from "../../contexts/FunctionsContext";
import { useSnackBar } from '../../contexts/SnackBarContext';

const RecievedReqFull = ({reqInfo, id, setOpen}) => {
    //Variables---
        //Contexts
        const {updateUser, getUser, updateListing, addNotification, deleteNotification} = useDb();
        const [loading, setLoading] = useLoading();
        const {currentUser} = useAuth();
        const {callable} = useFunctions();
        const {snackBar} = useSnackBar();
        const router = useRouter();

        //Functions
        const handleAction = (action) => {
            let reciever;
            setLoading(true);
            setOpen(false);
            const resolveRequest = callable("resolveRequest");
            getUser(currentUser.uid)
            .then((user) => {
                reciever = user;
                const resolvingInfo = {
                    senderUid: id,
                    senderListing: reqInfo.listingId,
                    recieverUid: currentUser.uid,
                    recieverListing: reciever.data().listing.id,
                }
                return resolveRequest(JSON.stringify(resolvingInfo))
            }).then((response) => {
                setLoading(false);
                snackBar(`Žádost byla ${action === "accepted" ? "přijata" : "odmítnuta"}.`, "success");
                if(action === "accepted") handleFriendship(reciever);
                router.reload(window.location.pathname);
            }).catch((error) => {
                setOpen(true);
                setLoading(false);
                snackBar("Něco se nepovedlo. Zkuste to prosím později.", "error");
            })
        }

        const handleFriendship = (user) => {
            const createFriend = callable("createFriend");
            const friendInfo = {
                reciever: user.data(),
                recieverUid: user.id,
                recieverListing: user.data().listing.id,
                sender: reqInfo,
                senderUid: id,
                senderListing: reqInfo.listingId
            }
            createFriend(JSON.stringify(friendInfo))
        }
    return (
        <div className="recieved-req-full">
            <i onClick={() => setOpen(false)} className="fas fa-times full-close-icon"></i>
            <div className="full-pfp-container">
                <img src="/img/pfps/radek-pfp.png" className="container-pfp"></img>
            </div>
            <div className="full-name">{reqInfo.username}</div>
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
