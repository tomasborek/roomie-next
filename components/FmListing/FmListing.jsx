import React, {useEffect, useState} from 'react'
//next
import Link from "next/link";

const FmListing = ({name, age, gender, location, money, available, bio, id}) => {
    const [shortBio, setShortBio] = useState("");
    useEffect(() => {
        if(bio){
            setShortBio(bio.substr(0,80));
        }
    }, [bio])
    return (
        <Link href={`/flatmate/${id}`}>
        <div className="fm-listing">
        {gender ? <img src={gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png"} className="listing-pfp" alt="" /> : <div className="listing-pfp"></div>} 
        <div className="listing-content">
            <div className="content-header"><span>{name}</span>, {age}</div>
            <div className="content-bio">{shortBio}...</div>
            <div className="content-more"><a href="">Více...</a></div>
            <div className="content-info">
              <div className="info-row">
                     <div className="info-budget row-col"><span>Rozpočet:</span> {money},000,-</div>
                     <div className="info-locations row-col"><span>Lokace:</span> {location}</div>
              </div>
              <div className="info-row">
                     <div className="info-gender row-col"><span>Pohlaví:</span> {gender == "female" ? "Žena" : gender == "male" ? "Muž" : "Jiné"}</div>
                     <div className="info-available row-col"><span>Dostupnost:</span> {available}</div>
              </div>
            </div>
        </div>
        </div>
     </Link>
    )
}

export default FmListing
