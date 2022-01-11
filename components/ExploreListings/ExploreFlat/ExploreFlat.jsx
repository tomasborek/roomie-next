import React, {useEffect, useState} from 'react'
//next
import Link from 'next/link'

const ExploreFlat = ({name, bio, price, startTime,stayTime, mainImg,premium, id}) => {
    
    return (
    <Link href={`/flat/${id}`}>
        <div className={`explore-flat ${premium && "premium"}`}>
            <div className="listing-pfp-container">
                {mainImg ? 
                    <img src={mainImg} className='listing-pfp'/>
                :
                    <img src="/img/listing/default-byt.jpg" className="listing-pfp" />
                }
            </div>
           <div className="listing-content">
               <div className="content-header"><span>{name}</span> {premium && <i className='fas fa-check-circle'></i>}</div>
               <div className="content-bio">{bio.substr(0,75)}...</div>
               <div className="content-more"><a href="">Více...</a></div>
               <div className="content-info">
                 <div className="info-row">
                        <div className="info-budget row-col"><span>Cena: </span>
                            {price >= 10000 ? price.toString().substr(0,2) + " " + price.toString().substr(2, 6) : price.toString().substr(0,1) + " " + price.toString().substr(1, 5)},-
                        </div>
                        <div className="info-locations row-col"><span>Smlouva:</span> {stayTime}</div>
                 </div>
                    <div className="info-row">
                        <div className="info-gender row-col"><span>Plocha:</span> 71m<sup>2</sup></div>
                        <div className="info-available row-col"><span>Dostupnost:</span> {startTime.substr(0,5)}.</div>
                    </div>
                
                     
                
               </div>
           </div>
            
            </div>
        </Link>
    )
}

export default ExploreFlat
