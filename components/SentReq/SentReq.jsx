import React from 'react'
//next
import {useRouter} from "next/router";
//Contexts
import {useDb} from "../../contexts/DbContext";
import {useLoading} from "../../contexts/LoadingContext";

const SentReq = ({name, age, pfp, premium, listingId, type, id}) => {
    const router = useRouter();
    const {getUser} = useDb();
    const [loading, setLoading] = useLoading();
    //Functions
    const handleShowListing = () => {
        router.push(`/${type}/${listingId}`);
    }
    return (
        <div onClick={handleShowListing} className={`sent-req ${premium && "premium"}`}>
            <div className="req-pfp-container">
                {pfp ?
                    <img src={pfp} className='container-pfp' />
                    :
                    <div className="container-pfp"></div>
                }
            </div>
            <div className="req-content">
                <div className="content-user">{name}, {age} {premium && <i className="fas fa-circle-check"></i>}</div>
                <div className="content-status">Žádost čeká na vyřízení.</div>
            </div>
            <div className="req-status">
                <i className="fas fa-hourglass-half"></i>
            </div>
        </div>
    )
}

export default SentReq
