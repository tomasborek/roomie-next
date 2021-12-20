import React, {useEffect, useState, useRef} from 'react'
//next
import { useRouter } from 'next/dist/client/router';
import Head from "next/head"


//Contexts
import { useDb } from '../../contexts/DbContext';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { useSnackBar } from '../../contexts/SnackBarContext';
import { useFunctions } from '../../contexts/FunctionsContext';
import { arrayUnion } from '@firebase/firestore'
import { useStorage } from '../../contexts/StorageContext';

//Components
import Header from '../Header/Header'
import ListingBoxesContainer from "../ListingBoxesContainer/ListingBoxesContainer";
import Tag from '../Tag/Tag';
import Footer from "../Footer/Footer";
import Tagger from '../Tagger/Tagger';
import Boxer from '../Boxer/Boxer';
import ReqDialog from '../ReqDialog/ReqDialog';
import ListingInfoImportant from '../../components/Listing/ListingInfoImportant/ListingInfoImportant';
import ListingContact from '../../components/Listing/ListingContact/ListingContact';
import ListingAbout from "../../components/Listing/ListingAbout/ListingAbout";
import Gallery from "../../components/Gallery/Gallery";
import GalleryInput from '../GalleryInput/GalleryInput';
//Mui components
import { CircularProgress, Skeleton, Backdrop, Slider, Button, Collapse, Alert } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const CrListing = ({type}) => {
    const router = useRouter();
    const {id} = router.query;
    const {getListing, updateListing, updateUser, getUser, createRequest} = useDb();
    const {currentUser} = useAuth();
    const [loading, setLoading] = useLoading();
    const {snackBar} = useSnackBar();
    const {callable} = useFunctions();
    const {uploadImg} = useStorage();
    //States
    //Listing data obj
    const [listingInfo, setListingInfo] = useState(null);
    const [listingImgs, setListingImgs] = useState([]);
    const [pfp, setPfp] = useState(null);
    //Edit mode
    const [editListing, setEditListing] = useState(true);
    //Edit mode info storage
    const [stayTime, setStayTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [budget, setBudget] = useState(null);
    //Dialogs and overlays
    const [sliderDialog, setSliderDialog] = useState(false);
    const [reqDialogOpen, setReqDialogOpen] = useState(false);
    const [personTagOverlay, setPersonTagOverlay] = useState(false);
    const [flatTagOverlay, setFlatTagOverlay] = useState(false);
    const [flatBoxerOverlay, setFlatBoxerOverlay] = useState(false);
    const [personBoxerOverlay, setPersonBoxerOverlay] = useState(false);
    const [galleryInput, setGalleryInput] = useState({
        open: false,
        type: "none",
        img: null,
        index: 0
    });
    //Added boxes
    const [addedPersonTags, setAddedPersonTags] = useState(null);
    const [addedFlatTags, setAddedFlatTags] = useState(null);
    const [addedPersonBoxes, setAddedPersonBoxes] = useState(null);
    const [addedFlatBoxes, setAddedFlatBoxes] = useState(null);
    const [addedListingImgs, setAddedListingImgs] = useState(["", "", "", "", "", ""]);
    const [addedPfp, setAddedPfp] = useState(null);
    //Refs
    const [bio, setBio] = useState(null);
    const [flatBio, setFlatBio] = useState(null);
    const [personBio, setPersonBio] = useState(null);
    const [requestMessage, setRequestMessage] = useState(null);

    //CR---
  
    const [welcomeDialog, setWelcomeDialog] = useState(false);
    const [personBoxesInfoAlert, setPersonBoxesInfoAlert] = useState(true);
    const [tagsInfoAlert, setTagsInfoAlert] = useState(true);
    const [flatBoxesInfoAlert, setFlatBoxesInfoAlert] = useState(true);
    const [boxesInfoAlert, setBoxesInfoAlert] = useState(true);

     //Gets listing based on url id and sets the listingInfo state
     useEffect(() => {
        if(!router.isReady) return;
        getListing(id)
        .then(doc => {
            if(doc.data().mainInfo.startTime != ""){
                router.push(`/${doc.data().type}/${doc.id}`);
                return;
            }
            setWelcomeDialog(true);
            router.push(`/${listingInfo.data().type}/${listingInfo.id}`)
        }).catch(error => {
            console.log(error.code);
        })
    }, [router.isReady])

    //Fills edit inputs with default values
    useEffect(() => {
        if(listingInfo && editListing === true){
            if(type === "flatmate"){
                setBio(listingInfo.data().bio)
                setBudget(listingInfo.data().mainInfo.budget);
            }
            if(type === "flat"){
               setPersonBio(listingInfo.data().personBio);
               setFlatBio(listingInfo.data().flatBio);
               setBudget(listingInfo.data().mainInfo.price);
            }

            
            setStayTime(listingInfo.data().mainInfo.stayTime);
            setStartTime(listingInfo.data().mainInfo.startTime);
        }
        
    }, [listingInfo])

   
    //Functions
    //Handles save in the edit
    const handleSave = () => {
        setLoading(true);
        const updateListing = callable("updateListing");
        if(!stayTime || stayTime == ""){
            snackBar("Prosíme vyplňte všechny důležité údaje.", "error");
            setLoading(false);
            window.scrollTo(0,0);
            return;
        }
        if(!startTime || startTime == ""){
            snackBar("Prosíme vyplňte všechny důležité údaje.", "error");
            setLoading(false);
            window.scrollTo(0,0);
            return;
        }
        let params;
        if(type === "flatmate" || type === "flatmate-cr"){
            params = {
                mainInfo: {
                    budget: budget,
                    startTime: startTime,
                    stayTime: stayTime
                },
                personBoxes: addedPersonBoxes,
                personTags: addedPersonTags,
                flatTags: addedFlatTags,
                bio: bio,
                visible: true,
            }
        }
        if(type === "flat" || type === "flat-cr"){
            params = {
                mainInfo: {
                    price: budget,
                    startTime: startTime,
                    stayTime: stayTime
                },
                personTags: addedPersonTags,
                personBoxes: addedPersonBoxes,
                flatBoxes: addedFlatBoxes,
                flatBio: flatBio,
                personBio: personBio,
                visible: true,
            }
        }
        const updateListingInfo = {
            listingId: listingInfo.id,
            params: params,
        }
        updateListing(JSON.stringify(updateListingInfo)).then((response) => {

            if(addedPfp){
               return uploadImg(currentUser.uid, addedPfp, "pfp", pfp);
            }else{
                return new Promise((resolve, reject) => {
                    resolve("done");
                })
            }
        }).then((response) => {
            if(addedListingImgs.length){
                return uploadImg(currentUser.uid, addedListingImgs, "listingImgs", listingImgs);
            }else{
                return new Promise((resolve, reject) => {
                    resolve("done");
                })
            }
           
        }).then((response) => {
            setLoading(false);
            setEditListing(false);
            snackBar("Inzerát byl úspěšně upraven.", "success");
            window.scrollTo(0,0);
            return getListing(listingInfo.id);
        }).then((doc) => {
            setListingInfo(doc);
        })
        // .catch((error) => {
        //     setLoading(false);
        //     snackBar("Něco se pokazilo. Zkuste to prosím později.", "error");
        // })
    }
  
    if(type === "flatmate"){
        return(
            <div className="Listing FlatMateListing">
            <Header variant="white" />
        
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personTagOverlay}><Tagger variant="person" addedTags={addedPersonTags} existingTags={listingInfo ? listingInfo.data().personTags : null} setTagOverlay={setPersonTagOverlay} setAddedTags={setAddedPersonTags}/></Backdrop>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={flatTagOverlay}><Tagger variant="flat" addedTags={addedFlatTags} existingTags={listingInfo ? listingInfo.data().flatTags : null} setTagOverlay={setFlatTagOverlay} setAddedTags={setAddedFlatTags}/></Backdrop>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personBoxerOverlay}><Boxer setBoxerOverlay={setPersonBoxerOverlay} variant="person" existingBoxes={listingInfo && listingInfo.data().personBoxes} setAddedBoxes={setAddedPersonBoxes} addedBoxes={addedPersonBoxes}/></Backdrop>
           
          
            <Dialog
            open={sliderDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle>Upravit rozpočet</DialogTitle>
                <DialogContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Slider sx={{width: 250, marginTop: "1rem"}} min={1} max={60} onChange={(e) => setBudget(e.target.value)} defaultValue={listingInfo && listingInfo.data().mainInfo.budget}/>
                    <div style={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                        <i style={{marginRight: "0.5rem"}}className="fas fa-coins"></i>
                        <p>{budget} 000{budget == 60 &&"+"} Kč</p>
                    </div>
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSliderDialog(false)}>Uložit</Button>
                </DialogActions>
            </Dialog>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={welcomeDialog}>
                <div className="listing-welcome-dialog">
                    <div className="welcome-dialog-image">
                        <img src="/img/listing/welcome-dialog.png" alt="" />
                    </div>
                    <h2 className="welcome-dialog-heading">Váš inzerát</h2>
                    <p className="welcome-dialog-body">
                    Gratulujeme k založení osobního profilu Roomie. Nyní vám nic nebrání k vytvoření vašeho inzerátu.
                    Tvorba je jednoduchá a intuitivní. Červeně svítící informace jsou povinné, ostatní dle vašeho uvážení.
                    Nezapomeňte - čím více informací uvedete, tím více podpoříte vaší šanci k oslovení potenciálních uživatelů. 
                    Váš inzerát je vaší veřejnou prezentací na portále Roomie. Hodně štěstí!
                    </p>
                    <div className="welcome-dialog-action">
                        <button onClick={() => setWelcomeDialog(false)} className="main-btn">Rozumím</button>
                    </div>
                    
                </div>
            </Backdrop>
            <GalleryInput 
                    object={galleryInput} 
                    setObject={setGalleryInput} 
                    pfp={pfp && pfp}
                    listingImgs={listingImgs} 
                    addedListingImgs={addedListingImgs} 
                    setAddedListingImgs={setAddedListingImgs} 
                    addedPfp={addedPfp} 
                    setAddedPfp={setAddedPfp} 
            />
        
      
            <div className="listing-banner"></div>
                <div className="listing-content">
          
                        <div className="content-header">
                            <div className="mid-container">
                                <div className="header-pfp-container">
                                        <div onClick={() => {
                                            setGalleryInput({
                                                open: true,
                                                index: -1,
                                            })
                                        }} className={`container-edit-icon ${editListing && "active"}`}>
                                            <i className="fas fa-pen"></i>
                                        </div>
                                        <div className="pfp-container-edit">
                                        </div>
                                     {listingInfo ?
                                        <>
                                        {listingInfo.data().userInfo.images.pfp ?
                                            <img className='header-pfp' src={listingInfo.data().userInfo.images.pfp} alt="" />
                                        :
                                            <img 
                                            src={listingInfo.data().userInfo.gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png"} 
                                            className="header-pfp"></img> 
                                        }
                                        </> 
                                    : 
                                        <div className="header-pfp"></div> 
                                    }   
                                    </div>

                                {!listingInfo ? 

                                <div className="header-info-loading">
                                    <CircularProgress/>
                                </div>
                                :   
                                <div className="header-info">
                                    <div className="info-main">
                                        <h1 className="main-name">{listingInfo.data().userInfo.username}</h1>
                                        <i className="main-more fas fa-ellipsis-h"></i>
                                        <div className="main-description">
                                            <p>{listingInfo.data().userInfo.age}, {listingInfo.data().userInfo.gender === "male" ? "muž" : listingInfo.data().userInfo.gender === "female" ? "žena" : "jiné"}</p>
                                        </div>
                                    </div>
                                    <ListingInfoImportant type="flatmate" listingInfo={listingInfo} editListing={editListing} state={{budget, startTime, stayTime, setBudget, setStayTime, setStartTime, setSliderDialog}}/>
                                    <div className="info-contact">
                                        <div className="contact-icons">
                                            <i className="icons-icon fas fa-envelope"></i>
                                            <i className="icons-icon fas fa-phone"></i>
                                            <i className="icons-icon fab fa-instagram"></i>
                                            <i className="icons-icon fab fa-facebook"></i>
                                        </div>
                                        <div className="contact-state">
                                            <i className="state-icon fas fa-lock"></i>
                                            <p className="state-description">Vaše kontaktní údaje jsou uzamčené.</p>
                                        </div>

                                        
                                            
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    
     
                
                <div className="mid-container">
                    <div className="content-body">
                        <div className="body-info">
                            <div className="container">
                                <ListingBoxesContainer type="flatmate" addedBoxes={addedPersonBoxes} existingBoxes={listingInfo && listingInfo.data().personBoxes} editListing={editListing} />
                                <Collapse in={boxesInfoAlert}>
                                        <Alert sx={{marginTop: "1rem"}} severity="info">Přidejte o sobě info.</Alert>
                                </Collapse> 
                                <div className="info-edit-boxes">
                                    <button onClick={() => {
                                        setPersonBoxerOverlay(true);
                                        setBoxesInfoAlert(false);
                                    }}> <i className="fas fa-plus"></i> </button>
                                </div>
                            </div>
                        </div> 
                        <ListingAbout type="flatmate" listingInfo={listingInfo} editListing={editListing} state={{addedFlatTags, addedPersonTags, bio, setBio, personBio, setPersonBio, flatBio, setFlatBio, setPersonTagOverlay, setFlatTagOverlay, setPersonBoxerOverlay, setFlatBoxerOverlay}}/>
                        <Gallery 
                            type={"flatmate"}
                            listingImgs={listingImgs} 
                            addedListingImgs={addedListingImgs}
                            pfp={pfp && pfp}
                            addedPfp={addedPfp} 
                            state={{setGalleryInput, editListing, listingInfo}} />
                    </div>
                </div>
                <div className="content-edit-buttons">
                    <button onClick={() => handleSave()} className="main-btn">Uložit změny</button>
                </div>
        </div>
        <Footer />
    </div>
        )
    }
    if(type === "flat"){
        return(
            <div className="Listing FlatListing">
            <Header variant="white" />
   

            <Backdrop  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personTagOverlay}><Tagger  variant="person" addedTags={addedPersonTags} existingTags={listingInfo ? listingInfo.data().personTags : null} setTagOverlay={setPersonTagOverlay} setAddedTags={setAddedPersonTags}/></Backdrop>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personBoxerOverlay}><Boxer setBoxerOverlay={setPersonBoxerOverlay} variant="person" existingBoxes={listingInfo && listingInfo.data().personBoxes} setAddedBoxes={setAddedPersonBoxes} addedBoxes={addedPersonBoxes}/></Backdrop>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={flatBoxerOverlay}><Boxer setBoxerOverlay={setFlatBoxerOverlay} variant="flat" existingBoxes={listingInfo && listingInfo.data().flatBoxes} setAddedBoxes={setAddedFlatBoxes} addedBoxes={addedFlatBoxes}/></Backdrop>
 
            <Dialog
            open={sliderDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle>Upravit rozpočet</DialogTitle>
                <DialogContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Slider sx={{width: 250, marginTop: "1rem"}} min={1} max={60} onChange={(e) => setBudget(e.target.value)} defaultValue={listingInfo && listingInfo.data().mainInfo.price}/>
                    <div style={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                        <i style={{marginRight: "0.5rem"}}className="fas fa-coins"></i>
                        <p>{budget} 000{budget == 60 &&"+"} Kč</p>
                    </div>
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSliderDialog(false)}>Uložit</Button>
                </DialogActions>
            </Dialog>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={welcomeDialog}>
                <div className="listing-welcome-dialog">
                    <div className="welcome-dialog-image">
                            <img src="/img/listing/welcome-dialog.png" alt="" />
                    </div>
                    <h2 className="welcome-dialog-heading">Váš inzerát</h2>
                    <p className="welcome-dialog-body">
                    Gratulujeme k založení osobního profilu Roomie. Nyní vám nic nebrání k vytvoření vašeho inzerátu.
                    Tvorba je jednoduchá a intuitivní. Červeně svítící informace jsou povinné, ostatní dle vašeho uvážení. 
                    Nezapomeňte - čím více informací uvedete, tím více podpoříte vaší šanci k oslovení potenciálních uživatelů. 
                    Váš inzerát je vaší veřejnou prezentací na portále Roomie. Hodně štěstí!
                    </p>
                    <div className="welcome-dialog-action">
                        <button onClick={() => setWelcomeDialog(false)} className="main-btn">Rozumím</button>
                    </div>
                    
                </div>
            </Backdrop>
            <GalleryInput 
                    object={galleryInput} 
                    setObject={setGalleryInput} 
                    pfp={pfp && pfp}
                    listingImgs={listingImgs} 
                    addedListingImgs={addedListingImgs} 
                    setAddedListingImgs={setAddedListingImgs} 
                    addedPfp={addedPfp} 
                    setAddedPfp={setAddedPfp} 
            />

            <div className="listing-banner"></div>
  
                <div className="listing-content">
  
                        <div className="content-header">
                            <div className="mid-container">
                                <div className="header-pfp-container">
                                        <div onClick={() => {
                                            setGalleryInput({
                                                open: true,
                                                index: 0,
                                            })
                                        }} className={`container-edit-icon ${editListing && "active"}`}>
                                            <i className="fas fa-pen"></i>
                                        </div>
                                        {listingInfo ?
                                            <>
                                                {addedListingImgs && addedListingImgs[0] ?
                                                    <img src={URL.createObjectURL(addedListingImgs[0])} className='header-pfp' alt="" />
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

                                {!listingInfo ? 
                                    <div className="header-info-loading">
                                        <CircularProgress />
                                    </div>
                                :
                                <div className="header-info">
                                    <div className="info-main">
                                        <h1 className="main-name">Váš byt</h1> 
                                        <i className="main-more fas fa-ellipsis-h"></i>
                                        <div className="main-description">
                                            <p>{listingInfo.data().flatBoxes.location}</p>
                                        </div>
                                    </div>
                                    <ListingInfoImportant type="flat" listingInfo={listingInfo} editListing={editListing} state={{budget, startTime, stayTime, setBudget, setStayTime, setStartTime, setSliderDialog}}/>
                                    <div className="info-contact">
                                        <div className="contact-icons">
                                            <i className="icons-icon fas fa-envelope"></i>
                                            <i className="icons-icon fas fa-phone"></i>
                                            <i className="icons-icon fab fa-instagram"></i>
                                            <i className="icons-icon fab fa-facebook"></i>
                                        </div>
                                        <div className="contact-state">
                                            <i className="state-icon fas fa-lock"></i>
                                            <p className="state-description">Vaše kontaktní údaje jsou uzamčené.</p>
                                        </div>                                            
                                    </div>
                            </div>
                                    }
                            </div>
                        </div>

                   
                <div className="mid-container">
                    <div className="content-body">
                        <div className="body-info">
                            <div className="container">
                                <div className="body-opening-boxes">
                                    <div className="boxes-profile-info">
                                    <div className="profile-info-pfp-container">
                                            {editListing && 
                                                <div onClick={() => setGalleryInput({
                                                    open: true,
                                                    index: -1,
                                                })} className="pfp-container-edit-icon">
                                                    <i className="fas fa-pen"></i>
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
                                                        <img src={`/img/pfps/${(listingInfo && listingInfo.data().userInfo.gender === "male") ? "radek" : "radka"}-pfp.png`} className="profile-info-pfp" /> 
                                                        : 
                                                        <div className="profile-info-pfp"></div>
                                                    }
                                                </>
                                            }
                                        </div>
                                        <div className="profile-info-text">
                                           {!listingInfo ? <Skeleton variant="text" sx={{width: 50}}/>: <p className="text-name">{listingInfo.data().userInfo.username}</p> } 
                                          {!listingInfo ? <Skeleton variant="text" sx={{width: 30}} />:  <p className="text-description">{listingInfo.data().userInfo.gender === "male" ? "Muž" : listingInfo.data().userInfo.gender === "female" ? "Žena" : listingInfo.data().userInfo.gender === "other" ? "Jiné" : ""}, {listingInfo.data().userInfo.age}</p>}
                                        </div>
                                        
                                    </div>
                                    <div alt="" className="boxes-map-container" >
                                        <img src="/img/listing/mapa.png" alt="" className="boxes-map" />
                                    </div>
                                </div>

                                 <ListingBoxesContainer existingBoxes={listingInfo && listingInfo.data().flatBoxes} addedBoxes={addedFlatBoxes} editListing={editListing} type="flat" /> 
                                 <Collapse in={flatBoxesInfoAlert}>
                                        <Alert sx={{marginTop: "1rem"}} severity="info">Přidejte info o svém bydlení.</Alert>
                                </Collapse> 
                                <div className="info-edit-boxes">
                                    <button onClick={() => {
                                        setFlatBoxerOverlay(true);
                                        setFlatBoxesInfoAlert(false);
                                    }}> <i className="fas fa-plus"></i> </button>
                                </div>
                                <ListingBoxesContainer existingBoxes={listingInfo &&listingInfo.data().personBoxes} addedBoxes={addedPersonBoxes} editListing={editListing} type="flatmate" />
                                <Collapse in={personBoxesInfoAlert}>
                                        <Alert sx={{marginTop: "1rem"}} severity="info">Přidejte info o sobě.</Alert>
                                </Collapse> 
                               {listingInfo &&
                                <div className="info-edit-boxes">
                                    <button onClick={() => {
                                        setPersonBoxerOverlay(true);
                                        setPersonBoxesInfoAlert(false);
                                    }}> <i className="fas fa-plus"></i> </button>
                                </div>
                                }
                            </div>
                            
                        </div> 
                        <ListingAbout type="flat" listingInfo={listingInfo} editListing={editListing} state={{addedFlatTags, addedPersonTags, bio, setBio, personBio, setPersonBio, flatBio, setFlatBio, setPersonTagOverlay, setFlatTagOverlay, setPersonBoxerOverlay, setFlatBoxerOverlay}}/>
                        <Gallery 
                            type={"flat"}
                            listingImgs={listingImgs} 
                            addedListingImgs={addedListingImgs}
                            pfp={pfp && pfp}
                            addedPfp={addedPfp} 
                            state={{setGalleryInput, editListing, listingInfo}} />
                        <div className="content-edit-buttons">
                            <button onClick={handleSave} className="main-btn">Uložit změny</button>
                        </div>
                    </div>
                </div>
        </div>
        <Footer />
    </div>
        )
    }
}

export default CrListing
