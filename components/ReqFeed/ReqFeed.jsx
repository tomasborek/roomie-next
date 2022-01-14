import React, {useEffect, useState} from 'react'
//next
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
    const {getRequests} = useDb();
    //State
    //Recieved requests
    const [recievedRequests, setRecievedRequests] = useState(null);
    //Recieved requests snapshots (for pagination)
    const [recievedSnaps, setRecievedSnaps] = useState(null);
    const [premiumRecievedSnaps, setPremiumRecievedSnaps] = useState(null);
    //Sent requests
    const [sentRequests, setSentRequests] = useState(null);
    //Sent requests snapshots (for pagination)
    const [sentSnaps, setSentSnaps] = useState(null);
    const [premiumSentSnaps, setPremiumSentSnaps] = useState(null);
    //Page of pagination
    const [page, setPage] = useState(1);
    //Pagination loading???
    const [paginationDisabled, setPaginationDisabled] = useState(false);

    //Getting reqs initial
    useEffect(() => {
        if(currentUser && type === "recieved"){
           fetchRequests("recievedRequests", currentUser.uid, "first", null, null);
        }
        if(currentUser && type === "sent"){
            fetchRequests("sentRequests", currentUser.uid, "first", null, null);
        }
    }, [currentUser])

    //Get reqs on page
    const handlePagination = (page) => {
        if(type === "recieved"){
            if(page === "next"){
              fetchRequests("recievedRequests", currentUser.uid, page, recievedSnaps, premiumRecievedSnaps);
            }
            if(page === "prev"){
                fetchRequests("recievedRequests", currentUser.uid, page, recievedSnaps, premiumRecievedSnaps);
            }
        }
        if(type === "sent"){
            if(page === "next"){
              fetchRequests("sentRequests", currentUser.uid, page, sentSnaps, premiumSentSnaps);
            }
            if(page === "prev"){
                fetchRequests("sentRequests", currentUser.uid, page, sentSnaps, premiumSentSnaps);
            }
        }
        
    }

    const fetchRequests = (type, uid, page, snaps, premiumSnaps) => {
       if(type === "recievedRequests"){
           let recievedRequestsObject = {};
           if(page === "first"){
                getRequests(type, uid, page, null, null)
                .then(docs => {
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    setRecievedSnaps(docs.newRequests);
                    setPremiumRecievedSnaps(docs.newPremiumRequests);
                    //
                    requests.forEach(req => {
                        recievedRequestsObject = {...recievedRequestsObject, [req.id]: req.data()}
                    })
                    setRecievedRequests(recievedRequestsObject);
                })
           }
           if(page === "next"){
                setPaginationDisabled(true);
                getRequests(type, uid, page, snaps, premiumSnaps)
                .then(docs => {
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    if(listings.length > 0){
                        setPage(prevState => prevState + 1);
                        setRecievedSnaps(docs.newRequests);
                        setPremiumRecievedSnaps(docs.newPremiumRequests);
                        requests.forEach(req => {
                            recievedRequestsObject = {...recievedRequestsObject, [req.id]: req.data()}
                        })
                        setRecievedRequests(recievedRequestsObject);
                    }
                    setPaginationDisabled(false);
                })
           }
           if(page === "prev"){
                setPaginationDisabled(true);
                getRequests(type, uid, page, snaps, premiumSnaps)
                .then(docs => {
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    if(requests.length > 0){
                        setPage(prevState => prevState - 1);
                        setRecievedSnaps(docs.newRequests);
                        setPremiumRecievedSnaps(docs.newPremiumRequests);
                        requests.forEach(req => {
                            recievedRequestsObject = {...recievedRequestsObject, [req.id]: req.data()}
                        })
                        setRecievedRequests(recievedRequestsObject);
                        setPaginationDisabled(false);
                    }else{
                        setPaginationDisabled(false);
                    }

                })
           }
       }
       if(type === "sentRequests") {
           let sentRequestsObject = {};
           if(page === "first"){
                getRequests(type, uid, currentUser.uid, "first", null, null).then(docs =>{
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    setSentSnaps(docs.newRequests);
                    setPremiumSentSnaps(docs.newPremiumRequests);
                    requests.forEach(req => {
                        sentRequestsObject = {...sentRequestsObject, [req.id]: req.data()}
                    })
                    setSentRequests(sentRequestsObject);
                })
           }
           if(page === "next"){
                setPaginationDisabled(true);
                getRequests(type, uid, page, snaps, premiumSnaps)
                .then(docs => {
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    if(requests.length > 0){
                        setPage(prevState => prevState + 1);
                        setSentSnaps(docs.newRequests);
                        setPremiumSentSnaps(docs.newPremiumRequests);
                        requests.forEach(req => {
                            sentRequestsObject = {...sentRequestsObject, [req.id]: req.data()}
                        })
                        setSentRequests(recievedRequestsObject);
                        setPaginationDisabled(false);
                    }else{
                        setPaginationDisabled(false);
                    }
                })
           }
           if(page === "prev"){
                setPaginationDisabled(true);
                getRequests(type, uid, page, snaps, premiumSnaps)
                .then(docs => {
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    if(requests.length > 0){
                        setPage(prevState => prevState - 1);
                        setSentSnaps(docs.newRequests);
                        setPremiumSentSnaps(docs.newPremiumRequests);
                        requests.forEach(req => {
                            sentRequestsObject = {...sentRequestsObject, [req.id]: req.data()}
                        })
                        setSentRequests(recievedRequestsObject);
                        setPaginationDisabled(false);
                    }else{
                        setPaginationDisabled(false);
                    }
                })
           }
       }
    }



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
                        {(Object.keys(recievedRequests).length > 9 || page != 1) ?
                        <Pagination setPage={setPage} page={page} handlePagination={handlePagination} isDisabled={paginationDisabled}/>
                        :
                        ""
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
            {type === "sent" &&
            <>
                {sentRequests ?
                    <>
                    {(Object.keys(sentRequests).length) ?
                         <div className="reqs-feed-sent">
                            <h3 className="sent-heading">Odeslané žádosti</h3>
                            {Object.keys(sentRequests).map((req, id) => (
                                <SentReq name={sentRequests[req].username} age={sentRequests[req].age} pfp={sentRequests[req].pfp} premium={sentRequests[req].premium} id={req} key={id} />
                            ))
                            }
                            {(Object.keys(sentRequests).length > 9 || page != 1) ?
                            <Pagination setPage={setPage} page={page} handlePagination={handlePagination} isDisabled={paginationDisabled}/>
                            :
                            ""
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
