import React, {useEffect, useState} from 'react'
//Contexts
import { useAuth } from '../../contexts/AuthContext';
import { useDb } from '../../contexts/DbContext';

//Components
import RecievedReq from "../RecievedReq/RecievedReq";
import SentReq from '../SentReq/SentReq';
//MUI
import { CircularProgress } from '@mui/material';

const ReqFeed = ({type}) => {
    const {currentUser} = useAuth();
    const {getUser, getRequests} = useDb();
    //State
    const [recievedRequests, setRecievedRequests] = useState(null);
    const [sentRequests, setSentRequests] = useState(null);
    const [pendingRequests, setPendingRequests] = useState(0);


    useEffect(() => {
        if(currentUser && type === "recieved" && !recievedRequests){
            let recievedRequestsObject = {};
            getRequests("recievedRequests", currentUser.uid)
            .then(docs =>{
                docs.forEach(req => {
                    if(req.data().status === "pending"){
                        setPendingRequests(prevState => prevState+1);
                    }
                    recievedRequestsObject = {...recievedRequestsObject, [req.id]: req.data()}
                })
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
    }, [currentUser, type])

    return (
        <>
            {type === "recieved" &&
                <>
                {recievedRequests ?
                <>
                    {pendingRequests > 0 &&
                    <div className="reqs-feed-pending">
                        <p className="pending-heading">Nevyřešené žádosti</p>
                        {Object.keys(recievedRequests).map((req, id) => (
                            recievedRequests[req].status === "pending" &&
                            <RecievedReq reqInfo={recievedRequests[req]} id={req} key={id}/>
                        ))}
                    </div>
                    }
                    <div className="reqs-feed-resolved">
                        <h3 className="resolved-heading">Vyřešené žádosti</h3>
                        {Object.keys(recievedRequests).map((req, id) => (
                            recievedRequests[req].status != "pending" &&
                            <RecievedReq reqInfo={recievedRequests[req]} id={req} key={id}/>
                        ))}
                    </div>
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
                    <div className="reqs-feed">
                        {Object.keys(sentRequests).map((req, id) => (
                            <SentReq name={sentRequests[req].name} age={sentRequests[req].age} status={sentRequests[req].status} id={req} key={id} />
                        ))}
                    </div>
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
