import React from 'react'
//next
import {useRouter} from "next/router";
//Contexts
import {useDb} from "../../contexts/DbContext";
import {useLoading} from "../../contexts/LoadingContext";

const SentReq = ({name, age, status, id}) => {
    const router = useRouter();
    const {getUser} = useDb();
    const [loading, setLoading] = useLoading();
    //Functions
    const handleShowListing = () => {
        setLoading(true)
        getUser(id)
        .then(user => {
            router.push(`/${user.data().mainInfo.type === "flatmate" ? "flatmate" : "flat"}/${user.data().listing.id}`);
            setLoading(false);
        })
    }
    return (
        <div onClick={handleShowListing} className="sent-req">
            <div className="req-pfp-container">
                <div className="container-pfp"></div>
            </div>
            <div className="req-content">
                <div className="content-user">{name}, {age}</div>
                <div className="content-status">Žádost čeká na vyřízení.</div>
            </div>
            <div className="req-status">
                <i className="fas fa-hourglass-half"></i>
            </div>
        </div>
    )
}

export default SentReq
