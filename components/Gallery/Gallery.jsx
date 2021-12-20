import React, {useState, useEffect} from 'react'

//MUI
import { Backdrop } from '@mui/material';

const Gallery = ({type, listingImgs, addedListingImgs, pfp, addedPfp, state}) => {
    const [viewOpen, setViewOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(null);
    const [galleryImgs, setGalleryImgs] = useState([]);

    const handleView = (img) => {
        setViewOpen(true);
        setCurrentImg(img);
    }

    const handleSelect = (index) => {
        state.setGalleryInput({
            open: true,
            index: index,
        });
    }

    const handleClick = (index, image) => {
        if(state.editListing){
            handleSelect(index);
        }else{
            if(image){
                handleView(image);
            }
        }
    }

    useEffect(() => {
        if(listingImgs){
            listingImgs.forEach((image, index) => {
                galleryImgs[image.index] = image.image;
            })
        }
    }, [listingImgs])


    

    if(type === "flatmate"){
        return (
            <div className='gallery flatmate'>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={viewOpen}>
                    <i className="gallery-close fas fa-times" onClick={() => setViewOpen(false)}></i>
                    <img className='gallery-current-img' src={currentImg} alt="" />
                </Backdrop>
                <div onClick={() => handleClick(-1, pfp)} className="main-img gallery-img-container">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i className="fas fa-pen"></i>
                        </div>
                    }
                    {addedPfp ?
                        <img src={URL.createObjectURL(addedPfp)} alt="" />
                        :
                        <>
                            {pfp ?
                             <img src={pfp}/>
                             :
                             <>
                             {state.listingInfo &&  <img src={state.listingInfo.data().userInfo.gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png"}/>}
                             </>
                            }
                        </>
                    }
                </div>
                <div onClick={() => handleClick(0, listingImgs[0])} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i className="fas fa-pen"></i>
                        </div>
                    }
                    {(addedListingImgs && addedListingImgs[0]) ?
                        <img src={URL.createObjectURL(addedListingImgs[0])} alt="" />
                        :
                        <>
                            {(listingImgs && listingImgs[0]) && <img src={listingImgs[0]} alt="" />}
                        </>
                    }
                    
                    
                </div>
                <div onClick={() => handleClick(1, listingImgs[1])} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i className="fas fa-pen"></i>
                        </div>
                    }
                    {(addedListingImgs && addedListingImgs[1]) ?
                        <img src={URL.createObjectURL(addedListingImgs[1])} alt="" />
                        :
                        <>
                            {(listingImgs && listingImgs[1]) && <img src={listingImgs[1]} alt="" />}
                        </>
                    }
                </div>
            </div>
        )
    }
    if(type === "flat"){
        return (
            <div className={`gallery flat`}>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={viewOpen}>
                    <i className="gallery-close fas fa-times" onClick={() => setViewOpen(false)}></i>
                    <img className='gallery-current-img' src={currentImg} />
                </Backdrop>
                <div onClick={() => handleClick(0, listingImgs[0])} className="main-img gallery-img-container">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i className="fas fa-pen"></i>
                        </div>
                    }
                    {addedListingImgs[0] ?
                        <img src={URL.createObjectURL(addedListingImgs[0])} alt="" />
                        :
                        <>
                            {(listingImgs && listingImgs[0]) ?
                                <img src={listingImgs[0]}/>
                             :
                             <>
                                {state.listingInfo &&  <img src={"/img/listing/default-byt.jpg"}/>}
                             </>
                            }
                        </>
                    }
                </div>
                <div onClick={() => handleClick(1, listingImgs[1])} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i className="fas fa-pen"></i>
                        </div>
                    }
                    {(addedListingImgs && addedListingImgs[1]) ?
                        <img src={URL.createObjectURL(addedListingImgs[1])} alt="" />
                        :
                        <>
                            {(listingImgs && listingImgs[1]) && <img src={listingImgs[1]} alt="" />}
                        </>
                    }
                    
                    
                </div>
                <div onClick={() => handleClick(2, listingImgs[2])} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i className="fas fa-pen"></i>
                        </div>
                    }
                    {(addedListingImgs && addedListingImgs[2]) ?
                        <img src={URL.createObjectURL(addedListingImgs[2])} alt="" />
                        :
                        <>
                            {(listingImgs && listingImgs[2]) && <img src={listingImgs[2]} alt="" />}
                        </>
                    }
                </div>
                <div onClick={() => handleClick(3, listingImgs[3])} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i className="fas fa-pen"></i>
                        </div>
                    }
                    {(addedListingImgs && addedListingImgs[3]) ?
                        <img src={URL.createObjectURL(addedListingImgs[2])} alt="" />
                        :
                        <>
                            {(listingImgs && listingImgs[3]) && <img src={listingImgs[3]} alt="" />}
                        </>
                    }
                </div>
                <div onClick={() => handleClick(4, listingImgs[4])} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i className="fas fa-pen"></i>
                        </div>
                    }
                    {(addedListingImgs && addedListingImgs[4]) ?
                        <img src={URL.createObjectURL(addedListingImgs[4])} alt="" />
                        :
                        <>
                            {(listingImgs && listingImgs[4]) && <img src={listingImgs[4]} alt="" />}
                        </>
                    }
                </div>
                <div onClick={() => handleClick(5, listingImgs[5])} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i className="fas fa-pen"></i>
                        </div>
                    }
                    {(addedListingImgs && addedListingImgs[5]) ?
                        <img src={URL.createObjectURL(addedListingImgs[5])} alt="" />
                        :
                        <>
                            {(listingImgs && listingImgs[5]) && <img src={listingImgs[5]} alt="" />}
                        </>
                    }
                </div>
            </div>
        )
    }
    
}

export default Gallery
