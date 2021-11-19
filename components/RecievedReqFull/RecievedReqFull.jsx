import React from 'react'
import { useDb } from '../../contexts/DbContext'
import { useLoading } from '../../contexts/LoadingContext'

const RecievedReqFull = ({name, age, gender, message, setOpen, uid}) => {
    //Variables---
        //Contexts
        const {updateUser} = useDb();
        const [loading, setLoading] = useLoading();

        const handleStatus = (isAccepted) => {
            if(isAccepted){
                setLoading(true);
                setOpen(false);
                updateUser(uid, {
                   //
                })
                .then(res =>{
                    setLoading(false);
                }).catch(error => {
                    setOpen(true);
                    setLoading(false);
                })
            }
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
                <button onClick={() => setOpen(false)} onClick={() => handleStatus(false)} className="acc-btn">Odmítnout</button>
                <button onClick={() => setOpen(false)} onClick={() => handleStatus(true)} className="main-btn">Přijmout</button>
            </div>
        </div>
    )
}

export default RecievedReqFull
