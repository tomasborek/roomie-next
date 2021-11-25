import React, {useEffect, useState, useRef} from 'react'
//next
import { useRouter } from 'next/dist/client/router';
import Head from "next/head"


//Contexts
import { useDb } from '../../contexts/DbContext';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { useSnackBar } from '../../contexts/SnackBarContext';
import { arrayUnion } from '@firebase/firestore'

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
//Mui components
import { CircularProgress, Skeleton, Backdrop, Slider, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';






const Listing = ({type}) => {
    //Variables---
    //Contexts
    const router = useRouter();
    const {id} = router.query;
    const {getListing, updateListing, updateUser, getUser, createRequest} = useDb();
    const {currentUser} = useAuth();
    const [loading, setLoading] = useLoading();
    const {snackBar} = useSnackBar();
    //States
    //Listing data obj
    const [listingInfo, setListingInfo] = useState(null);
    //Edit mode
    const [editListing, setEditListing] = useState(false);
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
    //Added boxes
    const [addedPersonTags, setAddedPersonTags] = useState(null);
    const [addedFlatTags, setAddedFlatTags] = useState(null);
    const [addedPersonBoxes, setAddedPersonBoxes] = useState(null);
    const [addedFlatBoxes, setAddedFlatBoxes] = useState(null);
    //Refs
    const [bio, setBio] = useState(null);
    const [flatBio, setFlatBio] = useState(null);
    const [personBio, setPersonBio] = useState(null);
    const [requestMessage, setRequestMessage] = useState(null);
    // const bioRef = useRef();
    // const flatBioRef = useRef();
    // const personBioRef = useRef();
    // const requestMessageRef = useRef();
    
    //Gets listing based on url id and sets the listingInfo state
    useEffect(() => {
        getListing(id)
        .then(doc => {
            setListingInfo(doc);
        }).catch(error => {
            console.log(error.code);
        })
    }, [])

    //Fills edit inputs with default values
    useEffect(() => {
        if(listingInfo && editListing === true){
            if(type === "flatmate"){
                setBio(listingInfo.data().bio)
                setBudget(listingInfo.data().mainInfo.budget);
                // bioRef.current.value = listingInfo.data().bio;
            }
            if(type === "flat"){
               setPersonBio(listingInfo.data().personBio);
               setFlatBio(listingInfo.data().flatBio);
               setBudget(listingInfo.data().mainInfo.price);
                //personBioRef.current.value = listingInfo.data().personBio;
                // flatBioRef.current.value = listingInfo.data().flatBio;
            }

            
            setStayTime(listingInfo.data().mainInfo.stayTime);
            setStartTime(listingInfo.data().mainInfo.startTime);
        }
        
    }, [editListing])

    // Handle if user sign outs while editing
    useEffect(() =>{
        if(!currentUser){
            setEditListing(false);
        }
    }, [currentUser])

    //Functions
    //Handles save in the edit
    const handleSave = () => {
        setLoading(true);
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
        if(type === "flatmate"){
            params = {
                mainInfo: {
                    budget: budget,
                    startTime: startTime,
                    stayTime: stayTime
                },
                personBoxes: addedPersonBoxes,
                personTags: addedPersonTags,
                flatTags: addedFlatTags,
                bio: bio
            }
        }
        if(type === "flat"){
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
                personBio: personBio
            }
        }
        updateListing(id, params)
        .then(res => {
            setLoading(false);
            setEditListing(false);
            snackBar("Inzerát byl úspěšně upraven.", "success");
            window.scrollTo(0,0);
            getListing(id)
            .then(doc => setListingInfo(doc));
        }).catch(error => {
            snackBar("Něco se pokazilo. Zkuste to prosím později.", "error")
            setLoading(false);
        })
    }

    const handleRequest = () => {
        setLoading(true);
        setReqDialogOpen(false);
        let reciever = listingInfo;
        let sender;
        getUser(currentUser.uid)
        .then(user =>{
            sender = user;
            return createRequest("recieved", reciever.data().userInfo.uid, sender.id, {
                name: sender.data().mainInfo.username,
                age: sender.data().mainInfo.age,
                gender: sender.data().mainInfo.gender,
                 listingId: sender.data().listing.id,
                 type: sender.data().mainInfo.type,
                 message: requestMessage,
                 status: "pending"
            })
        }).then(res => {
            return createRequest("sent", reciever.data().userInfo.uid, sender.id, {
                name: reciever.data().userInfo.name,
                age: reciever.data().userInfo.age,
                listingId: reciever.id,
                status: "pending"
            })
        }).then(res => {
            return updateListing(listingInfo.id, {
                requests: arrayUnion(currentUser.uid),
            })
        }).then(res => {
            return updateListing(sender.data().listing.id, {
                sentRequests: arrayUnion(listingInfo.data().userInfo.uid)
            })
        }).then(res => {
            return getListing(id);
        }).then(doc => {
            setListingInfo(doc);
            setLoading(false);
            snackBar("Žádost byla odeslána.", "success");
        }).catch(error =>{
            setLoading(false);
            setReqDialogOpen(true);
            snackBar("Něco se nepovedlo. Zkuste to prosím později.", "error");
        })
    }
    if(type === "flatmate"){
        return (
            <>
            <div className="Listing FlatMateListing">
                <Header variant="white" />
        {/*Taggers and boxer */}
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personTagOverlay}><Tagger variant="person" addedTags={addedPersonTags} existingTags={listingInfo ? listingInfo.data().personTags : null} setTagOverlay={setPersonTagOverlay} setAddedTags={setAddedPersonTags}/></Backdrop>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={flatTagOverlay}><Tagger variant="flat" addedTags={addedFlatTags} existingTags={listingInfo ? listingInfo.data().flatTags : null} setTagOverlay={setFlatTagOverlay} setAddedTags={setAddedFlatTags}/></Backdrop>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personBoxerOverlay}><Boxer setBoxerOverlay={setPersonBoxerOverlay} variant="person" existingBoxes={listingInfo && listingInfo.data().personBoxes} setAddedBoxes={setAddedPersonBoxes} addedBoxes={addedPersonBoxes}/></Backdrop>
               
        {/*Dialogs*/}
            {/*Budget edit Dialog*/}
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
            {/* Contatc request dialog */}
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={reqDialogOpen}>
                    <ReqDialog setMessage={setRequestMessage} message={requestMessage} setOpen={setReqDialogOpen} handleSend={handleRequest}/>
                </Backdrop>
            
                {/*main*/}
                <div className="listing-banner"></div>
                    <div className="listing-content">
                {/* content header*/}
                            <div className="content-header">
                                <div className="mid-container">
                                    <div className="header-pfp-container">
                                     {listingInfo ? <img src={listingInfo.data().userInfo.gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png"} className="header-pfp"></img> : <div className="header-pfp"></div> }   
                                    </div>
    
                                    {!listingInfo ? 
    
                                    <div className="header-info-loading">
                                        <CircularProgress/>
                                    </div>
                                    :   
                                    <div className="header-info">
                                        <div className="info-main">
                                            <h1 className="main-name">{listingInfo.data().userInfo.name}</h1>
                                            {currentUser && currentUser.uid == listingInfo.data().userInfo.uid &&<button onClick={() => setEditListing(prevState => !prevState)}className="main-edit-profile">{editListing ? "Zpět" : "Upravit profil"}</button>}
                                            <i className="main-more fas fa-ellipsis-h"></i>
                                            <div className="main-description">
                                                <p>{listingInfo.data().userInfo.age}, {listingInfo.data().userInfo.gender === "male" ? "muž" : listingInfo.data().userInfo.gender === "female" ? "žena" : "jiné"}</p>
                                            </div>
                                        </div>
                                        <ListingInfoImportant type="flatmate" listingInfo={listingInfo} editListing={editListing} state={{budget, startTime, stayTime, setBudget, setStayTime, setStartTime, setSliderDialog}}/>
                                        <ListingContact listingInfo={listingInfo} editListing={editListing} state={{setReqDialogOpen}}/>
                                    </div>
                                    }
                                </div>
                            </div>
                        
        {/*About*/}
                    
                    <div className="mid-container">
                        <div className="content-body">
                            <div className="body-info">
                                <div className="container">
                                    <ListingBoxesContainer type="flatmate" addedBoxes={addedPersonBoxes} existingBoxes={listingInfo && listingInfo.data().personBoxes} editListing={editListing} />
                                    {editListing && <div className="info-edit-boxes">
                                        <button onClick={() => setPersonBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                    </div>}
                                </div>
                            </div> 
                            <ListingAbout type="flatmate" listingInfo={listingInfo} editListing={editListing} state={{addedFlatTags, addedPersonTags, bio, setBio, personBio, setPersonBio, flatBio, setFlatBio, setPersonTagOverlay, setFlatTagOverlay, setPersonBoxerOverlay, setFlatBoxerOverlay}}/>
                        </div>
                    </div>
                    {editListing &&
                    <div className="content-edit-buttons">
                        <button onClick={() => handleSave()} className="main-btn">Uložit změny</button>
                    </div>
                    }
            </div>
            <Footer />
        </div>
        </>
        )
    }
    if(type === "flat"){
        return (
            <div className="Listing FlatListing">
            <Header variant="white" />
    {/* Boxers and tags */}
            <Backdrop  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personTagOverlay}><Tagger variant="person" addedTags={addedPersonTags} existingTags={listingInfo ? listingInfo.data().personTags : null} setTagOverlay={setPersonTagOverlay} setAddedTags={setAddedPersonTags}/></Backdrop>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personBoxerOverlay}><Boxer setBoxerOverlay={setPersonBoxerOverlay} variant="person" existingBoxes={listingInfo && listingInfo.data().personBoxes} setAddedBoxes={setAddedPersonBoxes} addedBoxes={addedPersonBoxes}/></Backdrop>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={flatBoxerOverlay}><Boxer setBoxerOverlay={setFlatBoxerOverlay} variant="flat" existingBoxes={listingInfo && listingInfo.data().flatBoxes} setAddedBoxes={setAddedFlatBoxes} addedBoxes={addedFlatBoxes}/></Backdrop>
    {/* Dialogs */}
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
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={reqDialogOpen}>
                <ReqDialog setMessage={setRequestMessage} message={requestMessage} setOpen={setReqDialogOpen} handleSend={handleRequest}/>
            </Backdrop>

            <div className="listing-banner"></div>
    {/*Listing content */}
                <div className="listing-content">
    {/*Content header */}
                        <div className="content-header">
                            <div className="mid-container">
                                <div className="header-pfp-container">
                                    <img src="/img/listing/byt.png" className="header-pfp"></img>
                                </div>

                                {!listingInfo ? 
                                    <div className="header-info-loading">
                                        <CircularProgress />
                                    </div>
                                :
                                
                                <div className="header-info">
                                    <div className="info-main">
                                        <h1 className="main-name">Byt {listingInfo && listingInfo.data().flatBoxes.layout && listingInfo.data().flatBoxes.layout}</h1>
                                      {currentUser && listingInfo.data().userInfo.uid == currentUser.uid ? <button onClick={() => setEditListing(prevState => !prevState)} className="main-edit-profile">{editListing ? "Zpět" : "Upravit inzerát"}</button> : "" }  
                                        <i className="main-more fas fa-ellipsis-h"></i>
                                        <div className="main-description">
                                            <p>{listingInfo && listingInfo.data().flatBoxes.location}</p>
                                        </div>
                                    </div>
                                    
                                    <ListingInfoImportant type="flat" listingInfo={listingInfo} editListing={editListing} state={{budget, startTime, stayTime, setBudget, setStayTime, setStartTime, setSliderDialog}}/>
                                    <ListingContact listingInfo={listingInfo} editListing={editListing} state={{setReqDialogOpen}}/>
                            </div>
                        }
                        </div>
                    </div>
               
     {/*Content about  */}                  
                <div className="mid-container">
                    <div className="content-body">
                        <div className="body-info">
                            <div className="container">
                                <div className="body-opening-boxes">
                                    <div className="boxes-profile-info">
                                        <img src="/img/pfps/radim-pfp.png" alt="" className="profile-info-pfp" />
                                        <div className="profile-info-text">
                                           {!listingInfo ? <Skeleton variant="text" sx={{width: 50}}/>: <p className="text-name">{listingInfo.data().userInfo.name}</p> } 
                                          {!listingInfo ? <Skeleton variant="text" sx={{width: 30}} />:  <p className="text-description">{listingInfo.data().userInfo.gender === "male" ? "Muž" : listingInfo.data().userInfo.gender === "female" ? "Žena" : listingInfo.data().userInfo.gender === "other" ? "Jiné" : ""}, {listingInfo.data().userInfo.age}</p>}
                                        </div>
                                        
                                    </div>
                                    <div alt="" className="boxes-map-container" >
                                        <img src="/img/listing/mapa.png" alt="" className="boxes-map" />
                                    </div>
                                </div>
                                 <ListingBoxesContainer existingBoxes={listingInfo && listingInfo.data().flatBoxes} addedBoxes={addedFlatBoxes} editListing={editListing} type="flat" /> 
                                 {editListing && <div className="info-edit-boxes">
                                    <button onClick={() => setFlatBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                </div>}
                                <ListingBoxesContainer existingBoxes={listingInfo &&listingInfo.data().personBoxes} addedBoxes={addedPersonBoxes} editListing={editListing} type="flatmate" />
                                {editListing && <div className="info-edit-boxes">
                                    <button onClick={() => setPersonBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                </div>}
                            </div>
                            
                        </div> 
                        <ListingAbout type="flat" listingInfo={listingInfo} editListing={editListing} state={{addedFlatTags, addedPersonTags, bio, setBio, personBio, setPersonBio, flatBio, setFlatBio, setPersonTagOverlay, setFlatTagOverlay, setPersonBoxerOverlay, setFlatBoxerOverlay}} />
                        
                        {editListing &&
                            <div className="content-edit-buttons">
                                <button onClick={handleSave} className="main-btn">Uložit změny</button>
                            </div>
                        }
                    </div>
                </div>
        </div>
        <Footer />
    </div>
        )
    }
}

export default Listing
