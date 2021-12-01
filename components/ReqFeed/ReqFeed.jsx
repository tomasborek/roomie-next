import React, {useEffect, useState} from 'react'
//next
import Image from "next/image";
//Contexts
import { useAuth } from '../../contexts/AuthContext';
import { useDb } from '../../contexts/DbContext';

//Components
import RecievedReq from "../RecievedReq/RecievedReq";
import SentReq from '../SentReq/SentReq';
import Pagination from '../Pagination/Pagination';
//MUI
import { CircularProgress } from '@mui/material';

const ReqFeed = ({type}) => {
    const {currentUser} = useAuth();
    const {getUser, getRequests, deleteNotifications} = useDb();
    //State
    const [recievedRequests, setRecievedRequests] = useState(null);
    const [sentRequests, setSentRequests] = useState(null);

    //Getting reqs
    useEffect(() => {
        if(currentUser && type === "recieved" && !recievedRequests){
            let recievedRequestsObject = {};
            getRequests("recievedRequests", currentUser.uid)
            .then(docs =>{
                docs.forEach(req => {
                    recievedRequestsObject = {...recievedRequestsObject, [req.id]: req.data()}
                })
                console.log(recievedRequestsObject)
                setRecievedRequests(recievedRequestsObject);
            })
        }
        if(currentUser && type === "sent" && !sentRequests){
            let sentRequestsObject = {};
            getRequests("sentRequests", currentUser.uid)
            .then(docs =>{
                docs.forEach(req => {
                    sentRequestsObject = {...sentRequestsObject, [req.id]: req.data()}
                })
                setSentRequests(sentRequestsObject);
            })
          
            }
    }, [currentUser])

    //Deleting Notifications
    // useEffect(() => {
    //     if(type === "recieved" && currentUser){
    //         deleteNotifications("recievedRequest", currentUser.uid);
    //     }
    //     if(type === "sent" && currentUser){
    //         deleteNotifications("acceptedRequest", currentUser.uid);
    //     }
    // }, [type, currentUser])

    return (
        <>
            {type === "recieved" &&
                <>
                {recievedRequests ?
                <>
                    {(Object.keys(recievedRequests).length) ?
                    <div className="reqs-feed-recieved">
                        <p className="pending-heading">Nevyřešené žádosti</p>
                        {Object.keys(recievedRequests).map((req, id) => (
                            <RecievedReq reqInfo={recievedRequests[req]} id={req} key={id}/>
                        ))}
                        <Pagination/>
                    </div>
                    :
                    <div className="reqs-feed-empty">
                        <img src="/img/bad-results/notfound.png" width={184} height={208}/>
                        <p>Nebyly nalezené žádné nevyřešené žádosti.</p>
                    </div>
                    }
                </>
                    :
                    <div className="reqs-feed-loading">
                        <CircularProgress/>
                    </div>
                }
                </>
            }
            {type === "sent" &&
            <>
                {sentRequests ?
                    <>
                    {(Object.keys(sentRequests).length) ?
                         <div className="reqs-feed-sent">
                            <h3 className="sent-heading">Odeslané žádosti</h3>
                            {Object.keys(sentRequests).map((req, id) => (
                                <SentReq name={sentRequests[req].name} age={sentRequests[req].age} status={sentRequests[req].status} id={req} key={id} />
                            ))
                            }
                        </div>
                        :
                        <div className="reqs-feed-empty">
                            <img src="/img/bad-results/notfound.png" width={184} height={208}/>
                            <p>Nebyly nalezené žádné nevyřešené žádosti.</p>
                        </div>
                        }
                     </>
                    :
                    <div className="reqs-feed-loading">
                        <CircularProgress/>
                    </div>
                }
            </>
            }
        
        </>
    )
}

export default ReqFeed
