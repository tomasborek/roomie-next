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
    const {getUser, getRequests, deleteNotifications} = useDb();
    //State
    //Recieved requests
    const [recievedRequests, setRecievedRequests] = useState(null);
    //Recieved requests snapshots (for pagination)
    const [recievedSnaps, setRecievedSnaps] = useState(null);
    //Sent requests
    const [sentRequests, setSentRequests] = useState(null);
    //Sent requests snapshots (for pagination)
    const [sentSnaps, setSentSnaps] = useState(null);
    //Page of pagination
    const [page, setPage] = useState(1);
    //Pagination loading???
    const [paginationDisabled, setPaginationDisabled] = useState(false);

    //Getting reqs initial
    useEffect(() => {
        console.log("use");
        if(currentUser && type === "recieved"){
            let recievedRequestsObject = {};
            getRequests("recievedRequests", currentUser.uid, "first")
            .then(docs =>{
                console.log(docs.docs);
                setRecievedSnaps(docs.docs);
                docs.docs.forEach(req => {
                    recievedRequestsObject = {...recievedRequestsObject, [req.id]: req.data()}
                })
                setRecievedRequests(recievedRequestsObject);
            })
        }
        if(currentUser && type === "sent" && !sentRequests){
            let sentRequestsObject = {};
            getRequests("sentRequests", currentUser.uid, "first")
            .then(docs =>{
                setSentSnaps(docs.docs);
                docs.docs.forEach(req => {
                    sentRequestsObject = {...sentRequestsObject, [req.id]: req.data()}
                })
                setSentRequests(sentRequestsObject);
            })
          
            }
    }, [currentUser])

    //Get reqs on page
    const handlePagination = (page) => {
        if(type === "recieved"){
            if(page === "next"){
                let recievedRequestsObject = {};
                setPaginationDisabled(true);
                getRequests("recievedRequests", currentUser.uid, "next", recievedSnaps)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setPage(prevState => prevState + 1);
                        setRecievedSnaps(docs.docs);
                        docs.forEach(req => {
                            recievedRequestsObject = {...recievedRequestsObject, [req.id]: req.data()}
                        })
                        setRecievedRequests(recievedRequestsObject);
                    }
                    setPaginationDisabled(false);
                })
            }
            if(page === "prev"){
                let recievedRequestsObject = {};
                setPaginationDisabled(true);
                getRequests("recievedRequests", currentUser.uid, "prev", recievedSnaps)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setPage(prevState => prevState - 1);
                        setRecievedSnaps(docs.docs);
                        docs.forEach(req => {
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
        if(type === "sent"){
            if(page === "next"){
                setPaginationDisabled(true);
                let sentRequestsObject = {};
                getRequests("sentRequests", currentUser.uid, "next", sentSnaps)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setPaginationDisabled(false);
                        setPage(prevState => prevState + 1);
                        setSentSnaps(docs.docs);
                        docs.forEach(req => {
                            sentRequestsObject = {...sentRequestsObject, [req.id]: req.data()}
                        })
                        setSentRequests(sentRequestsObject);
                    }
                    setPaginationDisabled(false);
                })
            }
            if(page === "prev"){
                setPaginationDisabled(true);
                let sentRequestsObject = {};
                getRequests("sentRequests", currentUser.uid, "prev", sentSnaps)
                .then(docs => {
                    if(docs.docs.length > 0){
                        setPaginationDisabled(false);
                        setPage(prevState => prevState - 1);
                        setSentSnaps(docs.docs);
                        docs.forEach(req => {
                            sentRequestsObject = {...sentRequestsObject, [req.id]: req.data()}
                        })
                        setSentRequests(sentRequestsObject);
                    }
                    setPaginationDisabled(false);
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
                        {(Object.keys(recievedRequests).length > 4 || page != 1) ?
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
                                <SentReq name={sentRequests[req].username} age={sentRequests[req].age} status={sentRequests[req].status} id={req} key={id} />
                            ))
                            }
                            {(Object.keys(sentRequests).length > 4 || page != 1) ?
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
