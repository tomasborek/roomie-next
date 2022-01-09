import React, {useEffect, useState} from 'react'
//next
import Link from "next/link";

const ExploreFlatmate= ({name, age, gender, location, money, available, bio, pfp, premium, id}) => {

    return (
        <Link href={`/flatmate/${id}`}>
        <div className={`explore-flatmate ${premium && "premium"}`}>
        <div className="listing-pfp-container">
            {gender ?
                <>
                {pfp ?
                    <img className='listing-pfp' src={pfp} alt="" />
                    :
                    <img src={gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png"} className="listing-pfp" alt="" />
                }
                </>
                
            :   
                <div className="listing-pfp"></div>
            } 
        </div>
        <div className="listing-content">
            <div className="content-header"><span>{name}</span>, {age} {premium && <i className='fas fa-check-circle'></i>}</div>
            <div className="content-bio">{bio.substr(0,80)}...</div>
            <div className="content-more"><a href="">Více...</a></div>
            <div className="content-info">
              <div className="info-row">
                     <div className="info-budget row-col"><span>Rozpočet: </span> 
                        {money >= 10000 ? money.toString().substr(0,2) + " " + money.toString().substr(2,6) : money.toString().substr(0,1) + " " + money.toString().substr(1,5)},-
                    </div>
                     <div className="info-locations row-col"><span>Lokace:</span> {location.substr(0,7)}{location.length > 7 && "..."}</div>
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

export default ExploreFlatmate
