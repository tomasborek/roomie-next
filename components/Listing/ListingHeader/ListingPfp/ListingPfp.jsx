import React from 'react';

//COntexts
import { useListing } from '../../../../contexts/ListingContext';

const ListingPfp = () => {
    const {type, listingInfo, editListing, setGalleryInput, addedPfp, pfp, listingImgs, addedListingImgs, handleImgDelete} = useListing();

    if(type === "flatmate"){
        return (
            <div className="header-pfp-container">
                {editListing &&
                    <div  className={`container-edit-icon ${editListing && "active"}`}>
                        <i onClick={() => {
                            setGalleryInput({
                                open: true,
                                index: -1,
                            })
                        }} className="fas fa-camera"></i>
                    {(addedPfp || pfp) && <i onClick={() => handleImgDelete("pfp")} className="fas fa-trash"></i>}
                    </div>
                }
                
                <div className="pfp-container-edit">
                </div>
                {listingInfo ?
                    <>
                    {addedPfp ?
                        <img className='header-pfp' src={URL.createObjectURL(addedPfp)}/>
                        :
                        <>
                            {pfp ?
                                <img className='header-pfp' src={pfp} alt="" />
                            :
                                <img 
                                src={listingInfo.userInfo.gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png"} 
                                className="header-pfp"></img> 
                    }
                        </>
                    }
                    </> 
                : 
                    <div className="header-pfp"></div> 
                }   
            </div>
        )
    }
    if(type === "flat"){
        return (
            <div className="header-pfp-container">
                {editListing && 
                    <div className={`container-edit-icon`}>
                    <i onClick={() => {
                            setGalleryInput({
                                open: true,
                                index: 0,
                            })
                        }} className="fas fa-camera"></i>
                        {(addedListingImgs[0] || listingImgs[0]) && <i onClick={() => handleImgDelete("main")} className="fas fa-trash"></i>}
                    </div>
                }
                
                    {listingInfo ?
                        <>
                            {addedListingImgs && addedListingImgs[0] ?
                                <img src={URL.createObjectURL(addedListingImgs[0])} className='header-pfp' />
                            :
                                <>
                                {listingImgs && listingImgs[0] ?
                                    <img className='header-pfp' src={listingImgs[0]} alt="" />
                                :
                                    <img 
                                    src={"/img/listing/default-byt.jpg"} 
                                    className="header-pfp"></img> 
                                }
                                </> 
                            }
                        </>
                    : 
                        <div className="header-pfp"></div> 
                    }   
            </div>
        )
    }
};

export default ListingPfp;
