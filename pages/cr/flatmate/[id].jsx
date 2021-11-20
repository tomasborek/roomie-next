import React, {useEffect, useState, useRef} from 'react'
//next
import { useRouter } from 'next/dist/client/router';
import Head from "next/head"


//Contexts
import { useDb } from '../../../contexts/DbContext';
import { useAuth } from '../../../contexts/AuthContext';
import { useLoading } from '../../../contexts/LoadingContext';
import { useSnackBar } from '../../../contexts/SnackBarContext';

//Components
import Header from '../../../components/Header/Header'
import ListingBoxesContainer from "../../../components/ListingBoxesContainer/ListingBoxesContainer";
import Tag from '../../../components/Tag/Tag';
import Footer from "../../../components/Footer/Footer";
import Tagger from '../../../components/Tagger/Tagger';
import Boxer from '../../../components/Boxer/Boxer';
import ReqDialog from '../../../components/ReqDialog/ReqDialog';
import InfoArrow from '../../../components/InfoArrow/InfoArrow';
//Mui components
import { CircularProgress, Skeleton, Backdrop, Slider, Button, Alert, Collapse, IconButton, CloseIcon } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const CreateFlatmateListing = () => {
//Variables---
    //Contexts
    const router = useRouter();
    const {id} = router.query;
    const {getListing, updateListing, updateUser, getUser} = useDb();
    const {currentUser} = useAuth();
    const [loading, setLoading] = useLoading();
    const {snackBar} = useSnackBar();
    //States
    //Listing data obj
    const [listingInfo, setListingInfo] = useState(null);
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
    const [personBoxerOverlay, setPersonBoxerOverlay] = useState(false);
    const [welcomeDialog, setWelcomeDialog] = useState(false);
    //Added boxes
    const [addedPersonTags, setAddedPersonTags] = useState(null);
    const [addedFlatTags, setAddedFlatTags] = useState(null);
    const [addedPersonBoxes, setAddedPersonBoxes] = useState(null);
    //Info alerts
    const [boxesInfoAlert, setBoxesInfoAlert] = useState(true);
    const [tagsInfoAlert, setTagsInfoAlert] = useState(true);
    //Refs
    const bioRef = useRef();
    const startTimeRef = useRef();
    const stayTimeRef = useRef();
    const requestMessageRef = useRef();
    
    //Gets listing based on url id and sets the listingInfo state
    useEffect(() => {
        //Checks if the url is ready
        if(!router.isReady) return;
        getListing(id)
        .then(doc => {
            if(!currentUser || currentUser.uid != doc.data().userInfo.uid || doc.data().mainInfo.startTime != ""){
                router.push(`/flatmate/${doc.id}`);
                return;
            }
            setListingInfo(doc);
            setWelcomeDialog(true);
        }).catch(error => {
            console.log(error.code);
        })
    }, [router.isReady])

    //Fills edit inputs with default values
    useEffect(() => {
        if(listingInfo && editListing === true){
            bioRef.current.value = listingInfo.data().bio;
            setBudget(listingInfo.data().mainInfo.budget);
            setStayTime(listingInfo.data().mainInfo.stayTime);
            setStartTime(listingInfo.data().mainInfo.startTime);
        }
        
    }, [listingInfo])

    useEffect(() =>{
        if(addedPersonBoxes && Object.keys(addedPersonBoxes).length){
            setBoxesInfoAlert(false);
        }
    }, [addedPersonBoxes])

    useEffect(() =>{
        if(addedPersonTags && Object.keys(addedPersonTags).length){
            setTagsInfoAlert(false);
        }
    }, [addedPersonTags])




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
            bio: bioRef.current.value
        })
        .then(res => {
            setLoading(false);
            snackBar("Inzerát byl úspěšně upraven.", "success");
            window.scrollTo(0,0);
            router.push(`/flatmate/${listingInfo.id}`)
        }).catch(error => {
            snackBar("Něco se pokazilo. Zkuste to prosím později.", "error")
            setLoading(false);
        })
    }

   
    return (
        <>
        <Head>
            <title>Vytvořte svůj inzerát | Roomie</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <div className="Listing FlatMateListing">
            <Header variant="white" />
          {/*Taggers and boxer */}
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personTagOverlay}><Tagger variant="person" addedTags={addedPersonTags} existingTags={listingInfo ? listingInfo.data().personTags : null} setTagOverlay={setPersonTagOverlay} setAddedTags={setAddedPersonTags}/></Backdrop>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personBoxerOverlay}><Boxer setBoxerOverlay={setPersonBoxerOverlay} variant="person" existingBoxes={listingInfo && listingInfo.data().personBoxes} setAddedBoxes={setAddedPersonBoxes} addedBoxes={addedPersonBoxes}/></Backdrop>
           
           {/*Dialogs*/}
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
                       <b>Vítejte v Roomie!</b> Jste připraveni vytvořit si váš <b>inzerát</b>? Není na tom nic těžkého.
                        Váš inzerát uvidí jiní lidé a prezentujete se ním. Červeně svítící infomace jsou povinné,
                        ale v dalších polích můžete uvézt kolik jen informací o sobě chcete, ale pamatujte, <b> čím více, tím lépe.</b>
                    </p>
                    <div className="welcome-dialog-action">
                        <button onClick={() => setWelcomeDialog(false)} className="main-btn">Chápu</button>
                    </div>
                    
                </div>
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
                                        <i className="main-more fas fa-ellipsis-h"></i>
                                        <div className="main-description">
                                            <p>{listingInfo.data().userInfo.age}, {listingInfo.data().userInfo.gender === "male" ? "muž" : listingInfo.data().userInfo.gender === "female" ? "žena" : "jiné"}</p>
                                        </div>
                                    </div>
                                    <div className="info-important">
                                        <div className="important-item">
                                            <div className="item-header">
                                            <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-coins`}></i>
                                               <div className="header-value header-value-edit-slider"><p>{budget} 000 Kč</p><i onClick={() => setSliderDialog(true)} class="fas fa-gear"></i></div>
                                            </div>
                                            <div className="item-description">Rozpočet</div>
                                        </div>
                                        <div className="important-item">
                                        <div className="item-header">
                                                <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-calendar-alt`}></i>
                                            <FormControl className="select" size="small" error={!stayTime || stayTime == ""}>
                                                 <InputLabel className="input-label" >Doba bydlení</InputLabel>
                                                <Select onChange={(e) => setStayTime(e.target.value)} label="Doba bydlení" defaultValue={listingInfo.data().mainInfo.stayTime}>
                                                    <MenuItem value="Krátkodobá">Krátkodobá</MenuItem>
                                                    <MenuItem value="1 rok">1 rok</MenuItem>
                                                    <MenuItem value="Dlouhodobá">Dlouhodobá</MenuItem>
                                                    <MenuItem value="Neurčito">Neurčito</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                            <div className="item-description">Doba bydlení</div>
                                        </div>
                                        <div className="important-item">
                                            <div className="item-header">
                                                <i className={`header-icon "header-edit-icon" fas fa-shuttle-van`}></i>
                                                <FormControl className="select" size="small" error={!startTime || startTime == ""}>
                                                    <InputLabel className="input-label" >Doba nas.</InputLabel>
                                                    <Select onChange={(e) => setStartTime(e.target.value)} label="Doba bydlení"  defaultValue={listingInfo.data().mainInfo.startTime}>
                                                        <MenuItem value="Okamžitě">Okamžitě</MenuItem>
                                                        <MenuItem value="Příští měsíc">Příští měsíc</MenuItem>
                                                        <MenuItem value="Příští rok">Příští rok</MenuItem>
                                                        <MenuItem value="Neurčito">Neurčito</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="item-description">Doba nastěhování</div>
                                        </div>
                                    </div>
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
                    
            {/*About*/}
                
                <div className="mid-container">
                    <div className="content-body">
                        <div className="body-info">
                            <div className="container">
                                <ListingBoxesContainer type="flatmate" addedBoxes={addedPersonBoxes} existingBoxes={listingInfo && listingInfo.data().personBoxes} editListing={editListing} />
                                <Collapse in={boxesInfoAlert}>
                                        <Alert sx={{marginTop: "1rem"}} severity="info">Přidejte o sobě info.</Alert>
                                </Collapse> 
                                <div class="info-edit-boxes">
                                    <button onClick={() => setPersonBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                </div>
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
                                <Collapse in={tagsInfoAlert}>
                                        <Alert  severity="info">Přidejte své preference.</Alert>
                                </Collapse> 
                                <div className="preferences-content">

                                {addedPersonTags  && Object.keys(addedPersonTags).map(tag => (
                                    addedPersonTags[tag] != "" && <Tag>{addedPersonTags[tag]}</Tag>
                                ))}
                                    <Tag onClick={() => setPersonTagOverlay(true)} plus={true}></Tag>
                                    
                                </div>
                            </div>
                             <div className="about-preferences">
                                <div className="preferences-header">Jaké bydlení hledám?</div>
                                <div className="preferences-content">
                                     <Tag onClick={() => setFlatTagOverlay(true)} plus={true}></Tag>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="content-edit-buttons">
                    <button onClick={() => handleSave()} className="main-btn">Uložit změny</button>
                </div>
        </div>
        <Footer />
    </div>
    </>
    )
}

export default CreateFlatmateListing
