import React from 'react';
//Contexts
import { useListing } from '../../../contexts/ListingContext';
//MUI
import { Skeleton } from '@mui/material';

const ListingOpeningBoxes = () => {
    const {listingInfo, editListing, listingUsername, listingGender, listingAge, pfp, addedPfp, setGalleryInput, listingPremium} = useListing();
  return (
    <div className="body-opening-boxes">
        <div className={`boxes-profile-info ${listingPremium && "premium"}`}>
            <div className="profile-info-pfp-container">
                {editListing && 
                    <div onClick={() => setGalleryInput({
                        open: true,
                        index: -1,
                    })} className="pfp-container-edit-icon">
                        <i className="fas fa-camera"></i>
                    </div>
                }
                {addedPfp ?
                    <img src={URL.createObjectURL(addedPfp)} className='profile-info-pfp' />
                    :
                    <>
                        {(listingInfo && pfp) ? 
                            <img src={pfp} className='profile-info-pfp' /> 
                            : 
                            listingInfo ? 
                            <img src={`/img/pfps/${(listingGender === "male") ? "radek" : "radka"}-pfp.png`} className="profile-info-pfp" /> 
                            : 
                            <div className="profile-info-pfp"></div>
                        }
                    </>
                }
            </div>
            <div className="profile-info-text">
                    {(!listingInfo && !listingUsername) ? 
                        <Skeleton variant="text" sx={{width: 50}}/>
                        : 
                        <p className="text-name">{listingUsername}</p> 
                    } 
                    {(!listingInfo && !listingUsername) ? 
                        <Skeleton variant="text" sx={{width: 30}} />
                        :  
                        <p className="text-description">
                            {listingGender === "male" ? "Muž" : listingGender === "female" ? "Žena" : listingGender === "other" ? "Jiné" : ""}, {listingAge}
                        </p>
                    }
            </div>
        </div>

        <div className="boxes-map-container" >
            <div className="map-overlay">
                <p>Již brzy <i className="fas fa-lock"></i></p>
            </div>
            <img src="/img/listing/mapa.png" alt="" className="boxes-map" />
        </div>
    </div>
  );
};

export default ListingOpeningBoxes;
