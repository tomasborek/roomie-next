import React, {useState} from 'react'
import { useRouter } from 'next/dist/client/router'

//Components
import RecievedReqFull from '../RecievedReqFull/RecievedReqFull'
//MUI
import { Backdrop } from '@mui/material'

const RecievedReq = ({reqInfo, id}) => {
    const [fullReq, setFullReq] = useState(false);
    const router = useRouter();
    return (
        <>
         <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={fullReq}><RecievedReqFull reqInfo={reqInfo} id={id}  setOpen={setFullReq}/></Backdrop>
            <div  className="rec-req">
                <div onClick={() => setFullReq(true)} className="req-pfp-container">
                    <div className="container-pfp"></div>
                </div>
                <div onClick={() =>setFullReq(true)} className="req-content">
                    <div className="content-name">{reqInfo.name}, {reqInfo.age}</div>
                    <div className="content-msg">Vás žádá o kontaktní údaje.</div>
                </div>
                <div className="req-status">
                    <i className={`fas fa-hourglass-half`}></i>
                </div>
            </div>
        </>
    )
}

export default RecievedReq
