import React from 'react'
//next
import { useRouter } from 'next/dist/client/router'

const Friend = ({children, info}) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/${info.mainInfo.type === "flatmate" ? "flatmate" : "flat"}/${info.listing.id}`)} className="friend">
            <div className="friend-pfp-container">
                <div className="friend-pfp"></div>
            </div>
            <div className="friend-content">
                <p className="content-name">{children}</p>
            </div>
        </div>
    )
}

export default Friend
