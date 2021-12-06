import React from 'react'
//next
import { useRouter } from 'next/dist/client/router'

const Friend = ({children, info}) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/${info.type === "flatmate" ? "flatmate" : "flat"}/${info.listingId}`)} className="friend">
            <div className="friend-pfp-container">
                <img src={`/img/pfps/${info.gender === "male" ? "radek-pfp.png" : "radka-pfp.png"}`} className="friend-pfp" alt="" />
            </div>
            <div className="friend-content">
                <div className="content-user">
                    <p className="user-name">{children}</p>
                    <div className="user-description">Přátelé</div>
                </div>
                <i className="fas fa-users"></i>
            </div>
        </div>
    )
}

export default Friend
