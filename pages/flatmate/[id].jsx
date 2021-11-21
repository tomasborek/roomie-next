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
import Header from '../../components/Header/Header'
import ListingBoxesContainer from "../../components/ListingBoxesContainer/ListingBoxesContainer";
import Tag from '../../components/Tag/Tag';
import Footer from "../../components/Footer/Footer";
import Tagger from '../../components/Tagger/Tagger';
import Boxer from '../../components/Boxer/Boxer';
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


const FlatmateListing = () => {
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
    const [personBoxerOverlay, setPersonBoxerOverlay] = useState(false);
    //Added boxes
    const [addedPersonTags, setAddedPersonTags] = useState(null);
    const [addedFlatTags, setAddedFlatTags] = useState(null);
    const [addedPersonBoxes, setAddedPersonBoxes] = useState(null)
    //Refs
    const bioRef = useRef();
    const startTimeRef = useRef();
    const stayTimeRef = useRef();
    const requestMessageRef = useRef();
    
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
            bioRef.current.value = listingInfo.data().bio;
            setBudget(listingInfo.data().mainInfo.budget);
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
        updateListing(id, {
            mainInfo: {
                budget: budget,
                startTime: startTime,
                stayTime: stayTime
            },
            personBoxes: addedPersonBoxes,
            personTags: addedPersonTags,
            flatTags: addedFlatTags,
            bio: bioRef.current.value
        })
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
                 message: requestMessageRef.current.value,
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
                requests: arrayUnion(currentUser.uid)
            })
        }) .then(res => {
            setLoading(false);
            snackBar("Žádost byla odeslána.", "success");
        }).catch(error =>{
            setLoading(false);
            setReqDialogOpen(true);
            snackBar("Něco se nepovedlo. Zkuste to prosím později.", "error");
        })
    }

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
                <ReqDialog messageRef={requestMessageRef} setOpen={setReqDialogOpen} handleSend={handleRequest}/>
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
                                    <div className={`info-important ${editListing ? "edit" : ""}`}>
                                        <div className="important-item">
                                            <div className="item-header">
                                            <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-coins`}></i>
                                               {editListing ?  <div className="header-value header-value-edit-slider"><p>{budget} 000 Kč</p><i onClick={() => setSliderDialog(true)} class="fas fa-gear"></i></div> : <div class="header-value"> {listingInfo.data().mainInfo.budget} 000 Kč</div>}
                                            </div>
                                            <div className="item-description">Rozpočet</div>
                                        </div>
                                        <div className="important-item">
                                        <div className="item-header">
                                                <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-calendar-alt`}></i>
                                               {editListing ? 
                                            <FormControl className="select" size="small" error={!stayTime || stayTime == ""}>
                                                 <InputLabel className="input-label" >Doba bydlení</InputLabel>
                                                <Select onChange={(e) => setStayTime(e.target.value)} label="Doba bydlení" defaultValue={listingInfo.data().mainInfo.stayTime}>
                                                    <MenuItem value="Krátkodobá">Krátkodobá</MenuItem>
                                                    <MenuItem value="1 rok">1 rok</MenuItem>
                                                    <MenuItem value="Dlouhodobá">Dlouhodobá</MenuItem>
                                                    <MenuItem value="Neurčito">Neurčito</MenuItem>
                                                </Select>
                                            </FormControl>
                                               :
                                                <div className="header-value">{listingInfo.data().mainInfo.stayTime}</div>}
                                        </div>
                                            <div className="item-description">Doba bydlení</div>
                                        </div>
                                        <div className="important-item">
                                            <div className="item-header">
                                                <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-shuttle-van`}></i>
                                                {editListing ? 
                                                <FormControl className="select" size="small" error={!startTime || startTime == ""}>
                                                    <InputLabel className="input-label" >Doba nas.</InputLabel>
                                                    <Select onChange={(e) => setStartTime(e.target.value)} label="Doba bydlení"  defaultValue={listingInfo.data().mainInfo.startTime}>
                                                        <MenuItem value="Okamžitě">Okamžitě</MenuItem>
                                                        <MenuItem value="Příští měsíc">Příští měsíc</MenuItem>
                                                        <MenuItem value="Příští rok">Příští rok</MenuItem>
                                                        <MenuItem value="Neurčito">Neurčito</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                :
                                                <div className="header-value">{listingInfo.data().mainInfo.startTime}</div>}
                                            </div>
                                            <div className="item-description">Doba nastěhování</div>
                                        </div>
                                    </div>
    {/*Info contact section*/}
    {/*Unlocked version (for friends or user himself) */}
                         
                                    {currentUser && listingInfo.data().friends.includes(currentUser.uid) || listingInfo.data().userInfo.uid === currentUser.uid ?
                                    <div className={`info-contact unlocked`}>
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
                                        {listingInfo.data().userInfo.uid === currentUser.uid ?
                                        <div className="contact-button-wrapper">
                                            <button onClick={() => router.push("/requests/recieved")} className="contact-button">Zobrazit žádosti</button>
                                        </div>  
                                        :
                                        <div className="contact-state">
                                            <i className="state-icon fas fa-users"></i>
                                            <p className="state-description">{`Vy a ${listingInfo.data().userInfo.name} jste ve spojení.`}</p>
                                        </div>  
                                        }
                                    </div>
    //Locked version, for strangers or people awaiting request reslove
                                    :
                                    <div className="info-contact">
                                        {!listingInfo.data().requests.includes(currentUser.uid) &&
                                        <div className="contact-icons">
                                            <i className="icons-icon fas fa-envelope"></i>
                                            <i className="icons-icon fas fa-phone"></i>
                                            <i className="icons-icon fab fa-instagram"></i>
                                            <i className="icons-icon fab fa-facebook"></i>
                                        </div>
                                        }
                                        <div className="contact-state">
                                            <i className={`state-icon fas fa-${listingInfo.data().requests.includes(currentUser.uid) ? "hourglass-half" : "lock"}`}></i>
                                            <p className="state-description">
                                                {listingInfo.data().requests.includes(currentUser.uid) ? "Vaše žádost čeká na vyřízení." : "Pošlete uživateli žádost o přístup ke kontaktním údajům."}
                                            </p>
                                        </div>
                                    
                                        <div className="contact-button-wrapper">
                                            {listingInfo.data().requests.includes(currentUser.uid) ? "" : <button className="contact-button">Poslat žádost</button>}
                                        </div>
                                    </div>
                                    }
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
                                {editListing && <div class="info-edit-boxes">
                                    <button onClick={() => setPersonBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                </div>}
                            </div>
                            
                        </div> 
                        <div className="body-about">
                            <div className="about-bio">
                                <div className="bio-header">
                                    O mně
                                </div>
                                {editListing ? 
                                <textarea ref={bioRef} type="text" rows="5" className="bio-content" placeholder="Zadejte něco o sobě..."></textarea>
                                :
                                <div className="bio-content">
                                {listingInfo ? listingInfo.data().bio === "" ? "Tento uživatel nemá bio" : listingInfo.data().bio
                                : 
                                <div className="skeletons">
                                    <Skeleton variant="text"/>
                                    <Skeleton variant="text"/>
                                    <Skeleton sx={{width: "50%"}} variant="text"/>
                                </div>  }
                                </div>
                            }
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
                                    {editListing && <Tag onClick={() => setPersonTagOverlay(true)} plus={true}></Tag>}
                                    
                                </div>
                            </div>
                             <div className="about-preferences">
                                <div className="preferences-header">Jaké bydlení hledám?</div>
                                <div className="preferences-content">
                                    {listingInfo && !editListing && Object.keys(listingInfo.data().flatTags).map(tag => (
                                        listingInfo.data().flatTags[tag] != "" && <Tag>{listingInfo.data().flatTags[tag]}</Tag>
                                    ))}
                                    {addedFlatTags && editListing && Object.keys(addedFlatTags).map(tag => (
                                        addedFlatTags[tag] != "" && <Tag>{addedFlatTags[tag]}</Tag>
                                    ))}
                                     {editListing && <Tag onClick={() => setFlatTagOverlay(true)} plus={true}></Tag>}
                                </div>
                            </div> 
                        </div>
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

export default FlatmateListing
