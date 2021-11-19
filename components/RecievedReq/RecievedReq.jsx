import React, {useState} from 'react'
import { useRouter } from 'next/dist/client/router'

//Components
import RecievedReqFull from '../RecievedReqFull/RecievedReqFull'
//MUI
import { Backdrop } from '@mui/material'

const RecievedReq = ({name, age, message, gender,status, id}) => {
    const [fullReq, setFullReq] = useState(false);
    const router = useRouter();
    return (
        <>
         <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={fullReq}><RecievedReqFull name={name} age={age} gender={gender} message={message} id={id} setOpen={setFullReq}/></Backdrop>
            <div  className="rec-req">
                <div onClick={() =>setFullReq(true)} className="req-pfp-container">
                    <div className="container-pfp"></div>
                </div>
                <div onClick={() =>setFullReq(true)} className="req-content">
                    <div className="content-name">{name}, {age}</div>
                    <div className="content-msg">{status === "pending" ? "Váš žádá o kontaktní údaje." : status === "accepted" ? `Přijali jste žádost uživatele ${name}` : status === "rejected" ? `Odmítli jste žádost uživatele ${name}`:""}</div>
                </div>
                <div className="req-status">
                    {status === "pending" ? "" : <i className={`fas fa-${status === "accepted" ? "check" : "times"}`}></i>}
                </div>
            </div>
        </>
    )
}

export default RecievedReq
