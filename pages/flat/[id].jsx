import React,{useEffect, useRef, useState} from 'react'
//next
import { useRouter } from 'next/dist/client/router';
import Head from "next/head"
//Contexts
import {useAuth} from "../../contexts/AuthContext";
import { useDb } from '../../contexts/DbContext';
import { useLoading } from '../../contexts/LoadingContext';
import { useSnackBar } from '../../contexts/SnackBarContext';

//Components
import Tagger from '../../components/Tagger/Tagger';
import Header from '../../components/Header/Header'
import ListingBoxesContainer from "../../components/ListingBoxesContainer/ListingBoxesContainer";
import Tag from '../../components/Tag/Tag';
import Footer from "../../components/Footer/Footer";
import Boxer from "../../components/Boxer/Boxer";
import ReqDialog from '../../components/ReqDialog/ReqDialog';
//Mui components
import { CircularProgress, Skeleton, Backdrop, Slider, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const FlatListing = () => {
//Variables ---

    //Contexts
    const {getListing, updateListing, getUser, updateUser} = useDb();
    const {currentUser} = useAuth();
    const router = useRouter();
    const {id} = router.query;
    const {snackBar} = useSnackBar();
    const [loading, setLoading] = useLoading();
    //State
    //Listing data obj
    const [listingInfo, setListingInfo] = useState(null);
    //Edit mode bool
    const [editListing, setEditListing] = useState(false);
    //Edit mode info storage
    const [stayTime, setStayTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [budget, setBudget] = useState(null);
    //Overlays and dialogs
    const [personTagOverlay, setPersonTagOverlay] = useState(false);
    //Dialogs
    const [sliderDialog, setSliderDialog] = useState(false);
    const [reqDialogOpen, setReqDialogOpen] = useState(false);
    const [personBoxerOverlay, setPersonBoxerOverlay] = useState(false);
    const [flatBoxerOverlay, setFlatBoxerOverlay] = useState(false);
    //Added boxes/tags
    const [addedPersonTags, setAddedPersonTags] = useState(null);
    const [addedPersonBoxes, setAddedPersonBoxes] = useState(null);
    const [addedFlatBoxes, setAddedFlatBoxes] = useState(null);
    //Refs
    const personBioRef = useRef(null);
    const flatBioRef = useRef(null);
    const requestMessageRef = useRef(null);

//UseEffects ---

    //Fetches the listing data on load
    useEffect(() => {
        getListing(id)
        .then(doc => {
            setListingInfo(doc);
        }).catch(error => {
            console.log(error.code);
        })
    },[])


    //Fills out input fields in edit mode
    useEffect(() => {
        if(editListing && listingInfo){
            personBioRef.current.value = listingInfo.data().personBio;
            flatBioRef.current.value = listingInfo.data().flatBio;
            setBudget(listingInfo.data().mainInfo.price);
            setStartTime(listingInfo.data().mainInfo.startTime);
            setStayTime(listingInfo.data().mainInfo.stayTime);
        }
    }, [editListing])

    //Handle if user sign outs while editing
    useEffect(() =>{
        if(!currentUser){
            setEditListing(false);
        }
    }, [currentUser])

//Functions ---

    //Handles saving of an edited changes
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
        updateListing(id, {
            mainInfo: {
                price: budget,
                startTime: startTime,
                stayTime: stayTime
            },
            personTags: addedPersonTags,
            personBoxes: addedPersonBoxes,
            flatBoxes: addedFlatBoxes,
            flatBio: flatBioRef.current.value,
            personBio: personBioRef.current.value
        })
        .then(res => {
            setLoading(false);
            setEditListing(false);
            window.scrollTo(0,0);
            snackBar("Inzerát byl úspěšně upraven.", "success");
            getListing(id, "flatListings").then((doc) => setListingInfo(doc));
        }).catch(error => {
            snackBar("Něco se nepovedlo. Zkuste to prosím později.", "error");
            setLoading(false);
        })
    }

    //Handles contact request
    const handleRequest = () => {
        let requestedUser;
        let requestingUser;
        let requestedUserUid;
        let requestingUserUid;
        setLoading(true);
        setReqDialogOpen(false);

        getUser(listingInfo.data().userInfo.uid)
        .then(user => {
            requestedUser = user;
            requestedUserUid = requestedUser.id;
            return getUser(currentUser.uid);
        }).then(user => {
            requestingUser = user;
            requestingUserUid = requestingUser.id;
            return updateUser(requestedUser.id, {
                "requests.recieved": {...requestingUser.data().requests.recieved, [requestingUserUid]: {
                    name: requestingUser.data().mainInfo.username,
                    age: requestingUser.data().mainInfo.age,
                    message: requestMessageRef.current.value,
                    gender: requestingUser.data().mainInfo.gender,
                    listingId: requestingUser.data().listing.id, 
                    type: requestingUser.data().mainInfo.type,
                    status: "pending"
                }}
            })
        }).then(res => {
            
            return updateUser(currentUser.uid, {
                "requests.sent": {...requestingUser.data().requests.sent, [requestedUserUid]: {
                    name: requestedUser.data().mainInfo.username,
                    age: requestedUser.data().mainInfo.age,
                    listingId: requestedUser.data().listing.id,
                    status: "pending"
                }}
            })
        }).then((res) => {
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setReqDialogOpen(true);
            setLoading(false);
        })
    }


//Return---
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
                <ReqDialog messageRef={requestMessageRef} setOpen={setReqDialogOpen} handleSend={handleRequest}/>
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
                                            <p>Stodolní, Ostrava, Moravskoslezský kraj</p>
                                        </div>
                                    </div>
                                    <div className="info-important">
                                        <div className="important-item">
                                            <div className="item-header">
                                                <i className="header-icon fas fa-coins"></i>
                                               {editListing ? <div className="header-value header-value-edit-slider"><p>{budget} 000 Kč</p><i onClick={() => setSliderDialog(true)} className="fas fa-gear"></i></div>  : <div className="header-value">{listingInfo.data().mainInfo.price} 000 Kč</div>}
                                            </div>
                                            <div className="item-description">Měsíční nájemné</div>
                                        </div>
                                        <div className="important-item">
                                        <div className="item-header">
                                                <i className="header-icon fas fa-calendar-alt"></i>
                                                {editListing ? 
                                                <FormControl className="select" size="small" error={!stayTime || stayTime == ""}>
                                                    <InputLabel className="input-label" >Doba bydlení</InputLabel>
                                                    <Select onChange={(e) => setStartTime(e.target.value)} label="Doba bydlení" defaultValue={listingInfo.data().mainInfo.startTime}>
                                                        <MenuItem value="Krátkodobá">Krátkodobá</MenuItem>
                                                        <MenuItem value="1 rok">1 rok</MenuItem>
                                                        <MenuItem value="Dlouhodobá">Dlouhodobá</MenuItem>
                                                        <MenuItem value="Neurčito">Neurčito</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                :
                                                <div className="header-value">{listingInfo.data().mainInfo.startTime}</div>}
                                        </div>
                                            <div className="item-description">Doba bydlení</div>
                                        </div>
                                        <div className="important-item">
                                            <div className="item-header">
                                                <i className="header-icon fas fa-shuttle-van"></i>
                                               {editListing ? 
                                                <FormControl className="select" size="small" error={!startTime || startTime == ""}>
                                                    <InputLabel className="input-label" >Doba nas.</InputLabel>
                                                    <Select onChange={(e) => setStayTime(e.target.value)} label="Doba bydlení" defaultValue={listingInfo.data().mainInfo.stayTime}>
                                                        <MenuItem value="Okamžitě">Okamžitě</MenuItem>
                                                        <MenuItem value="Příští měsíc">Příští měsíc</MenuItem>
                                                        <MenuItem value="Příští rok">Příští rok</MenuItem>
                                                        <MenuItem value="Neurčito">Neurčito</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                :
                                                <div className="header-value">{listingInfo.data().mainInfo.startTime}</div>
                                                } 
                                            </div>
                                            <div className="item-description">Doba nastěhování</div>
                                        </div>
                                    </div>
                                    {listingInfo && currentUser && listingInfo.data().friends.includes(currentUser.uid) ? 
                                    <div className="info-contact unlocked">
                                         <div className="contact-icons">
                                            <i className="icons-icon fas fa-envelope"></i>
                                            <i className="icons-icon fas fa-phone"></i>
                                            <i className="icons-icon fab fa-instagram"></i>
                                            <i className="icons-icon fab fa-facebook"></i>
                                        </div>
                                        <div className="contact-boxes">
                                            <div className="boxes-email">
                                                <i className="fas fa-phone"></i>
                                               <p>email@email.com</p>
                                            </div>
                                            <div className="boxes-phone">
                                                <i className="fas fa-envelope"></i>
                                                <p>731011045</p>
                                            </div>
                                        </div>
                                        <div className="contact-state">
                                            <i className="state-icon fas fa-users"></i>
                                            <div className="state-description">
                                                Vy a {listingInfo.data().userInfo.name} jste ve spojení.
                                            </div>
                                        </div>
                                
                                    </div>
                                    :
                                    listingInfo.data().userInfo.uid === currentUser.uid ?
                                    <div className="info-contact unlocked">
                                        <div className="contact-icons">
                                            <i className="icons-icon fab fa-instagram"></i>
                                            <i className="icons-icon fab fa-facebook"></i>
                                        </div>
                                        <div className="contact-boxes">
                                            <div className="boxes-email">
                                                <i className="fas fa-phone"></i>
                                                <p>email@email.com</p>
                                            </div>
                                            <div className="boxes-phone">
                                                <i className="fas fa-envelope"></i>
                                                <p>731011045</p>
                                            </div>
                                        </div>
                                        <div className="contact-button-wrapper">
                                            <button onClick={() => router.push("/requests/recieved")} className="contact-button">Zobrazit žádosti</button>
                                        </div>
                                       
                           
                                    </div>
                               :
                                    <div className="info-contact">
                                        <div className="contact-icons">
                                            <i className="icons-icon fas fa-envelope"></i>
                                            <i className="icons-icon fas fa-phone"></i>
                                            <i className="icons-icon fab fa-instagram"></i>
                                            <i className="icons-icon fab fa-facebook"></i>
                                        </div>
                                        <div className="contact-state">
                                            <i className="state-icon fas fa-lock"></i>
                                            <p className="state-description">{listingInfo && currentUser && listingInfo.data().userInfo.uid === currentUser.uid ? "Vaše kontaktní údaje jsou skryté" : "Požádejte uživatele o přístup ke kontaktním údajům"}.</p>
                                        </div>
                                    
                                        <div className="contact-button-wrapper">
                                        {listingInfo && currentUser && listingInfo.data().userInfo.uid === currentUser.uid ? <button onClick={() => router.push("/requests/recieved")} className="contact-button">Zobrazit žádosti</button> : <button onClick={() => !currentUser ? router.push("/login") : setReqDialogOpen(true)} className="contact-button">Požádat o kontaktní údaje</button>}
                                        </div>
                                        </div>
                                }
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
                                 {editListing && <div class="info-edit-boxes">
                                    <button onClick={() => setFlatBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                </div>}
                                <ListingBoxesContainer existingBoxes={listingInfo &&listingInfo.data().personBoxes} addedBoxes={addedPersonBoxes} editListing={editListing} type="flatmate" />
                                {editListing && <div class="info-edit-boxes">
                                    <button onClick={() => setPersonBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                </div>}
                            </div>
                            
                        </div> 
                        <div className="body-about">
                            <div className="about-bio">
                                <div className="bio-header">
                                    Podrobnosti o bydlení
                                </div>
                                <div className="bio-content">
                                    {editListing ?
                                    <textarea ref={flatBioRef} type="text" rows="5" className="bio-content" placeholder="Zadejte něco o svém bydlení..."></textarea>
                                    :
                                    listingInfo ? 
                                    listingInfo.data().flatBio === "" ? "Toto bydlení nemá popis..." : listingInfo.data().flatBio
                                    :
                                    <div className="skeletons">
                                        <Skeleton variant="text" sx={{width: "100%"}}/>
                                        <Skeleton variant="text" sx={{width: "50%"}}/>
                                    </div>
                                    } 
                                </div>
                                
                            </div>
                            <div className="about-bio">
                                <div className="bio-header">
                                    Podrobnosti o inzeranotvi
                                </div>
                                <div className="bio-content">
                                    {editListing ?
                                    <textarea ref={personBioRef} type="text" rows="5" className="bio-content" placeholder="Zadejte něco o sobě..."></textarea>
                                    :
                                    listingInfo ? 
                                    listingInfo.data().personBio === "" ? "Tento uživatel nemá bio..." : listingInfo.data().personBio
                                    :
                                    <div className="skeletons">
                                        <Skeleton variant="text" sx={{width: "100%"}}/>
                                        <Skeleton variant="text" sx={{width: "50%"}}/>
                                    </div>
                                    } 
                                </div>
                                
                            </div>
                            <div className="about-preferences">
                                <div className="preferences-header">
                                    Koho hledám?
                                </div>
                                <div className="preferences-content">
                                {listingInfo && !editListing && Object.keys(listingInfo.data().personTags).map(tag => (
                                        listingInfo.data().personTags[tag] != "" && <Tag>{listingInfo.data().personTags[tag]}</Tag> 
                                ))}
                                {addedPersonTags && editListing && Object.keys(addedPersonTags).map(tag => (
                                    addedPersonTags[tag] != "" && <Tag>{addedPersonTags[tag]}</Tag>
                                ))}
                                   {editListing &&<Tag plus={true} onClick={() => setPersonTagOverlay(true)}/>}
                                </div>
                            </div>
                        </div>
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

export default FlatListing
