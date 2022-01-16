import React from 'react'
//next
import { useRouter } from 'next/router'

const LikedListing = ({info}) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/${info.type}/${info.listingId}`)} className={`liked-listing ${info.type} ${info.userInfo.premium && "premium"}`}>
            {info.type === "flatmate" ?
                <img src={info.userInfo.images.pfp ? info.userInfo.images.pfp : `/img/pfps/${info.userInfo.gender === "male" ? "radek" : "radka"}-pfp.png`} alt="" className="listing-pfp" />
                :
                <img src={info.userInfo.images.listingImgs[0] ? info.userInfo.images.listingImgs[0] : `/img/listing/default-byt.jpg`} alt="" className="listing-pfp" />                
            }
           
            <div className="listing-name">
                {
                    info.type === "flatmate" ? <><span>{info.userInfo.username}</span>, {info.userInfo.age} </> : `Byt ${info.flatBoxes.layout} ${info.flatBoxes.location} `
                }
                {info.userInfo.premium && <i className="fas fa-circle-check"></i> }
            </div>
        </div>
    )
}

export default LikedListing
