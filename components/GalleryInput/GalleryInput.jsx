import React, {useState, useEffect, useRef} from 'react'

//contexts
import { useListing } from '../../contexts/ListingContext';

//MUI
import { Backdrop } from '@mui/material'

const GalleryInput = () => {
    const [image, setImage] = useState(null);
    const {galleryInput: object, setGalleryInput: setObject, listingImgs, addedListingImgs, setAddedListingImgs, addedPfp, setAddedPfp, pfp} = useListing();
    const inputFileRef = useRef(null);
    const handleImgUpload = (e) => {
        setImage(e.target.files[0]);
    }

    // Setting the addedListingImgs state in the listing
    const handleAdd =  () => {
        // If the object index is -1 it means it's the main image
       if(object.index === -1 && image){
            setAddedPfp(image);
       }
       if(object.index > -1){
            let addedImgs = [...addedListingImgs];
            addedImgs[object.index] = image;
            setAddedListingImgs(addedImgs);
       }
       setObject({
           open: false,
           index: -1,
       })
       setImage(null);
       inputFileRef.current.value = "";
    }
    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={object.open}>
            
            <div className="gallery-input">
            <i onClick={() => {
                setObject({
                    open: false,
                    index: 0,
                });
                setImage(null);
                inputFileRef.current.value = "";
            }} className="input-close fas fa-times"></i>
                <div className="input-heading">Vložit novou fotografii</div>
                {image ?
                    <img className="input-img" src={URL.createObjectURL(image)} alt="" />
                    :
                    <>
                        {object.index === -1 &&
                            <>
                                {pfp ?
                                    <img src={pfp} className='input-img' />
                                    :
                                    <div className="input-img"></div>
                                }
                            </>
                        }
                        {object.index > -1 &&
                            <>
                                {listingImgs && listingImgs[object.index] ?
                                    <img src={listingImgs[object.index]} className='input-img' />
                                    :
                                    <div className="input-img"></div>
                                }
                            </>
                        }
                    </>
                }
                {image &&  <p className="input-status">Soubor byl nahrán! ({image.name.substring(0,10)})</p>}
                <input accept='.png, .jpg' ref={inputFileRef} type="file" onChange={handleImgUpload} />
                <button disabled={!image} onClick={() => handleAdd()} className={`main-btn input-btn ${!image && "disabled"}`}>Hotovo</button>
            </div>
        </Backdrop>
    )
}

export default GalleryInput
