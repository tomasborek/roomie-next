import React, {useState} from 'react'
import { useRouter } from 'next/dist/client/router'

//Components
import RecievedReqFull from '../RecievedReqFull/RecievedReqFull'
//MUI
import { Backdrop } from '@mui/material'
import { CircularProgress } from '@mui/material'

const RecievedReq = ({reqInfo, id}) => {
    const [fullReq, setFullReq] = useState(false);
    const [reqLoading, setReqLoading] = useState(false);
    const [reqResolved, setReqResolved] = useState({state: false, type: ""});
    const router = useRouter();
    return (
        <>
         <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={fullReq}><RecievedReqFull reqInfo={reqInfo} id={id} setOpen={setFullReq} setRequestLoading={setReqLoading} setReqResolved={setReqResolved}/></Backdrop>
         {!reqLoading ?
            <>
                {reqResolved.state ?
                <div className="rec-req-resolved">
                    <i className={`fas fa-${reqResolved.type && "check"} ${reqResolved.type === "accepted" ? "accepted" : "rejected"}`}></i>
                </div>
                :
                <div onClick={() => setFullReq(true)}  className={`rec-req ${reqInfo.premium && "premium"}`}>
                    <div  className="req-pfp-container">
                        {reqInfo.pfp ?
                        <img src={reqInfo.pfp} className='container-pfp' />
                        :
                        <img src={`/img/pfps/${reqInfo.gender === "male" ? "radek" : "radka"}-pfp.png`} className='container-pfp' />
                        }
                    </div>
                    <div onClick={() =>setFullReq(true)} className="req-content">
                        <div className="content-name">{reqInfo.username}, {reqInfo.age} {reqInfo.premium && <i className="fas fa-circle-check"></i>}</div>
                        <div className="content-msg">Vás žádá o kontaktní údaje.</div>
                    </div>
                    <div className="req-status">
                        <i className={`fas fa-hourglass-half`}></i>
                    </div>
                </div>
                }
            </>
        :
        <div className="rec-req-loading">
            <CircularProgress />
        </div>
         }
        </>
    )
}

export default RecievedReq
