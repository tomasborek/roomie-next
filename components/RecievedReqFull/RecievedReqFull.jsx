import React from 'react'
import { useDb } from '../../contexts/DbContext'
import { useLoading } from '../../contexts/LoadingContext'
import { useAuth } from '../../contexts/AuthContext'

const RecievedReqFull = ({name, age, gender, message, setOpen, status, id}) => {
    //Variables---
        //Contexts
        const {updateUser, getUser} = useDb();
        const [loading, setLoading] = useLoading();
        const {currentUser} = useAuth();


        //Functions
        const handleAction = (action) => {
            setLoading(true);
           updateUser(currentUser.uid, {
               [`requests.recieved.${id}.status`]: action
           }).then(res => {
               return updateUser(id, {
                   [`requests.sent.${currentUser.uid}.status`]: action
               })
           }) .then(res => {
               setLoading(false);
               setOpen(false);
           })
        }

    return (
        <div className="recieved-req-full">
            <div className="full-pfp-container">
                <img src="/img/pfps/radek-pfp.png" className="container-pfp"></img>
            </div>
            <div className="full-name">{name}</div>
            <div className="full-description">{gender === "male" ? "Muž" : gender === "female" ? "Žena" : gender === "other" ? "Jiné" : ""}, {age}</div>
            <div className="full-message">{message}</div>
            <div className="full-actions">
                {status === "pending" ?
                    <>
                    <button onClick={() => handleAction("rejected")}     className="acc-btn">Odmítnout</button>
                    <button onClick={() => handleAction("accepted")}    className="main-btn">Přijmout</button>
                    </>
                :
                <div className="full-actions-resolved">
                    <p>{status === "accepted" ? "Tato žádost byla přijata." : "Tato žádost byla odmítnuta."}</p>
                    <button onClick={() =>setOpen(false)} className="main-btn">Zavřít</button>
                </div>
                }
            </div>
        </div>
    )
}

export default RecievedReqFull
