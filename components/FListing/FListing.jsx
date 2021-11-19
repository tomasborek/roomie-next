import React, {useEffect, useState} from 'react'
//next
import Link from 'next/link'

const FListing = ({name, bio, price, startTime,stayTime,id}) => {
    const [shortBio, setShortBio] = useState("");
    useEffect(() => {
        if(bio){
            setShortBio(bio.substr(0,80));
        }
    }, [bio])
    return (
    <Link href={`/flat/${id}`}>
        <div className="f-listing">
           <div className="listing-pfp"></div>
           <div className="listing-content">
               <div className="content-header"><span>{name}</span></div>
               <div className="content-bio">{shortBio}...</div>
               <div className="content-more"><a href="">Více...</a></div>
               <div className="content-info">
                 <div className="info-row">
                        <div className="info-budget row-col"><span>Cena: </span>{price} 000,-</div>
                        <div className="info-locations row-col"><span>Smlouva:</span> {stayTime}</div>
                 </div>
                    <div className="info-row">
                        <div className="info-gender row-col"><span>Plocha:</span> 71m<sup>2</sup></div>
                        <div className="info-available row-col"><span>Dostupnost:</span> {startTime}</div>
                    </div>
                
                     
                
               </div>
           </div>
            
            </div>
        </Link>
    )
}

export default FListing
