import React, {useState, useEffect} from 'react'

//Contexts
import {useFunctions} from "../../contexts/FunctionsContext";
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

//MUI
import { Backdrop, Dialog, DialogActions,  DialogTitle, Button } from '@mui/material';

const Gallery = ({type, listingImgs, setListingImgs, addedListingImgs, setAddedListingImgs, pfp, setPfp, addedPfp, setAddedPfp, state}) => {
    const [viewOpen, setViewOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(null);
    const [galleryImgs, setGalleryImgs] = useState([]);
    const [loading, setLoading] = useLoading();
    const {callable} = useFunctions();
    const {currentUser} = useAuth();

    const handleView = (img) => {
        if(img){
            setViewOpen(true);
            setCurrentImg(img);
        }
    }

    const handleSelect = (index) => {
        // Index -1 means pfp
        state.setGalleryInput({
            open: true,
            index: index,
        });
    }


    const handleDelete = (type, image, index) => {
        if(type === "addedPfp"){
            setAddedPfp(null);
        }
        if(type === "addedListingImg"){
            let addedImgs = [...addedListingImgs];
            addedImgs[image] = "";
            setAddedListingImgs(addedImgs);
        }
        if(type === "normalPfp" || type === "normalListingImg"){
            setLoading(true);
            const deleteImgs = callable("images-deleteImgs");
            const imageInfo = {
                url: image,
                uid: currentUser.uid,
                listingId: state.listingInfo.id,
            }
            deleteImgs(JSON.stringify(imageInfo)).then((response) => {
                if(type === "normalPfp"){
                    setPfp(null);
                }
                if(type === "normalListingImg"){
                    let imgs = [...listingImgs];
                    imgs[index] = "";
                    setListingImgs(imgs);
                }
                
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
            })
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
                <Backdrop sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }} open={viewOpen}>
                    <i className="gallery-close fas fa-times" onClick={() => setViewOpen(false)}></i>
                    <img className='gallery-current-img' src={currentImg} alt="" />
                </Backdrop>

                <div onClick={() => !state.editListing ? handleView(pfp) : ""} className="main-img gallery-img-container">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i onClick={() => handleSelect(-1)} className="fas fa-camera"></i>
                            {(addedPfp) ? <i onClick={() => handleDelete("addedPfp")} className="fas fa-trash container-delete"></i> :
                            (pfp) ?  <i onClick={() => handleDelete("normalPfp", pfp)} className="fas fa-trash container-delete"></i> : ""}
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

                <div onClick={() => !state.editListing ? handleView(listingImgs[0]) : ""} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i onClick={() => handleSelect(0)} className="fas fa-camera"></i>
                            {(addedListingImgs[0]) ? <i onClick={() => handleDelete("addedListingImg", 0)} className="fas fa-trash container-delete"></i> :
                            (listingImgs[0]) ? <i onClick={() => handleDelete("normalListingImg", listingImgs[0], 0)} className="fas fa-trash container-delete"></i> : ""}
                        </div>
                    }
                    {(addedListingImgs[0]) ?
                            <img src={URL.createObjectURL(addedListingImgs[0])} alt="" />
                        :
                        <>
                            {(listingImgs[0]) ?
                                 <img src={listingImgs[0]} />
                                :
                                <>
                                    {(state.listingInfo) && <p>Žádný obrázek</p>}
                                </>
                            }
                        </>
                    }
                </div>

                <div onClick={() => !state.editListing ? handleView(listingImgs[1]) : ""} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i onClick={() => handleSelect(1)} className="fas fa-camera"></i>
                            {(addedListingImgs[1]) ? <i onClick={() => handleDelete("addedListingImg", 1)} className="fas fa-trash container-delete"></i> :
                            (listingImgs[1]) ? <i onClick={() => handleDelete("normalListingImg", listingImgs[1], 1)} className="fas fa-trash container-delete"></i> : ""}
                        </div>
                    }
                    {(addedListingImgs[1]) ?
                            <img src={URL.createObjectURL(addedListingImgs[1])} alt="" />
                        :
                        <>
                            {(listingImgs[1]) ?
                                    <img src={listingImgs[1]} />
                                :
                                <>
                                    {(state.listingInfo) && <p>Žádný obrázek</p>}
                                </>
                            }
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
                
                <div onClick={() => !state.editListing ? handleView(listingImgs[0]) : ""} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i onClick={() => handleSelect(0)} className="fas fa-camera"></i>
                            {(addedListingImgs[0]) ? <i onClick={() => handleDelete("addedListingImg", 0)} className="fas fa-trash container-delete"></i> :
                            (listingImgs[0]) ? <i onClick={() => handleDelete("normalListingImg", listingImgs[0], 0)} className="fas fa-trash container-delete"></i> : ""}
                        </div>
                    }
                    {(addedListingImgs[0]) ?
                            <img src={URL.createObjectURL(addedListingImgs[0])} alt="" />
                        :
                        <>
                            {(listingImgs[0]) ?
                                 <img src={listingImgs[0]} />
                                :
                                <>
                                    {(state.listingInfo) && <img src={"/img/listing/default-byt.jpg"}/>}
                                </>
                            }
                        </>
                    }
                </div>

               <div onClick={() => !state.editListing ? handleView(listingImgs[1]) : ""} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i onClick={() => handleSelect(1)} className="fas fa-camera"></i>
                            {(addedListingImgs[1]) ? <i onClick={() => handleDelete("addedListingImg", 1)} className="fas fa-trash container-delete"></i> :
                            (listingImgs[1]) ? <i onClick={() => handleDelete("normalListingImg", listingImgs[1], 1)} className="fas fa-trash container-delete"></i> : ""}
                        </div>
                    }
                    {(addedListingImgs[1]) ?
                            <img src={URL.createObjectURL(addedListingImgs[1])} alt="" />
                        :
                        <>
                            {(listingImgs[1]) ?
                                 <img src={listingImgs[1]} />
                                :
                                <>
                                    {(state.listingInfo) && <p>Žádný obrázek</p>}
                                </>
                            }
                        </>
                    }
                </div>

                <div onClick={() => !state.editListing ? handleView(listingImgs[2]) : ""} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i onClick={() => handleSelect(2)} className="fas fa-camera"></i>
                            {(addedListingImgs[2]) ? <i onClick={() => handleDelete("addedListingImg", 2)} className="fas fa-trash container-delete"></i> :
                            (listingImgs[2]) ? <i onClick={() => handleDelete("normalListingImg", listingImgs[2], 2)} className="fas fa-trash container-delete"></i> : ""}
                        </div>
                    }
                    {(addedListingImgs[2]) ?
                            <img src={URL.createObjectURL(addedListingImgs[2])} alt="" />
                        :
                        <>
                            {(listingImgs[2]) ?
                                 <img src={listingImgs[2]} />
                                :
                                <>
                                    {(state.listingInfo) && <p>Žádný obrázek</p>}
                                </>
                            }
                        </>
                    }
                </div>

                <div onClick={() => !state.editListing ? handleView(listingImgs[3]) : ""} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i onClick={() => handleSelect(3)} className="fas fa-camera"></i>
                            {(addedListingImgs[3]) ? <i onClick={() => handleDelete("addedListingImg", 3)} className="fas fa-trash container-delete"></i> :
                            (listingImgs[3]) ? <i onClick={() => handleDelete("normalListingImg", listingImgs[3], 3)} className="fas fa-trash container-delete"></i> : ""}
                        </div>
                    }
                    {(addedListingImgs[3]) ?
                            <img src={URL.createObjectURL(addedListingImgs[3])} alt="" />
                        :
                        <>
                            {(listingImgs[3]) ?
                                 <img src={listingImgs[3]} />
                                :
                                <>
                                    {(state.listingInfo) && <p>Žádný obrázek</p>}
                                </>
                            }
                        </>
                    }
                </div>

                <div onClick={() => !state.editListing ? handleView(listingImgs[4]) : ""} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i onClick={() => handleSelect(4)} className="fas fa-camera"></i>
                            {(addedListingImgs[4]) ? <i onClick={() => handleDelete("addedListingImg", 4)} className="fas fa-trash container-delete"></i> :
                            (listingImgs[4]) ? <i onClick={() => handleDelete("normalListingImg", listingImgs[4], 4)} className="fas fa-trash container-delete"></i> : ""}
                        </div>
                    }
                    {(addedListingImgs[4]) ?
                            <img src={URL.createObjectURL(addedListingImgs[4])} alt="" />
                        :
                        <>
                            {(listingImgs[4]) ?
                                 <img src={listingImgs[4]} />
                                :
                                <>
                                    {(state.listingInfo) && <p>Žádný obrázek</p>}
                                </>
                            }
                        </>
                    }
                </div>

                <div onClick={() => !state.editListing ? handleView(listingImgs[5]) : ""} className="gallery-img-container secondary-img">
                    {state.editListing &&
                        <div className={`container-edit-icon`}>
                            <i onClick={() => handleSelect(5)} className="fas fa-camera"></i>
                            {(addedListingImgs[5]) ? <i onClick={() => handleDelete("addedListingImg", 5)} className="fas fa-trash container-delete"></i> :
                            (listingImgs[5]) ? <i onClick={() => handleDelete("normalListingImg", listingImgs[5], 5)} className="fas fa-trash container-delete"></i> : ""}
                        </div>
                    }
                    {(addedListingImgs[5]) ?
                            <img src={URL.createObjectURL(addedListingImgs[5])} alt="" />
                        :
                        <>
                            {(listingImgs[5]) ?
                                 <img src={listingImgs[5]} />
                                :
                                <>
                                    {(state.listingInfo) && <p>Žádný obrázek</p>}
                                </>
                            }
                        </>
                    }
                </div>

            </div>
        )
    }
    
}

export default Gallery
