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
    const {getUser} = useDb();
    //State
    const [recievedRequests, setRecievedRequests] = useState(null);
    const [sentRequests, setSentRequests] = useState(null);


    useEffect(() =>{
      if(currentUser && type === "recieved" && !recievedRequests){
          getUser(currentUser.uid)
          .then(doc =>{
              setRecievedRequests(doc.data().requests.recieved)
          })
      }
      if(currentUser && type === "sent" && !sentRequests){
        getUser(currentUser.uid)
        .then(doc =>{
            setSentRequests(doc.data().requests.sent)
        })
      }
    }, [currentUser, type])

   
    return (
        <>
            {type === "recieved" &&
                <>
                {recievedRequests ?
                    <div className="reqs-feed">
                        {Object.keys(recievedRequests).map((req, id) => (
                            <RecievedReq reqInfo={recievedRequests[req]} id={req} key={id}/>
                        ))}
                    </div>
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
