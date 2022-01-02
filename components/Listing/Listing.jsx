import React, {useEffect, useState, useRef} from 'react'
//next
import { useRouter } from 'next/dist/client/router';
import Head from "next/head";
import Link from "next/link";


//Contexts
import { useDb } from '../../contexts/DbContext';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { useSnackBar } from '../../contexts/SnackBarContext';
import { useFunctions } from "../../contexts/FunctionsContext";
import { arrayUnion } from '@firebase/firestore';
import { useStorage } from '../../contexts/StorageContext';

//Components
import Header from '../Header/Header'
import ListingBoxesContainer from "../ListingBoxesContainer/ListingBoxesContainer";
import Tag from '../Tag/Tag';
import Footer from "../Footer/Footer";
import Tagger from '../Tagger/Tagger';
import Boxer from '../Boxer/Boxer';
import InputDialog from '../InputDialog/InputDialog';
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






const Listing = (props) => {
    //Variables---
    //Contexts
    const type = props.type;
    const router = useRouter();
    const {id} = router.query;
    const {getListing, updateUser, getUser, addNotification, deleteNotification} = useDb();
    const {currentUser} = useAuth();
    const [loading, setLoading] = useLoading();
    const {snackBar} = useSnackBar();
    const {callable} = useFunctions();
    const {uploadImg} = useStorage();
    //States
    //Listing data obj
    //Listing info
    const [listingInfo, setListingInfo] = useState(null);
    //ListingId
    const [listingId, setListingId] = useState(null);
    //imgs
    const [listingImgs, setListingImgs] = useState([]);
    const [pfp, setPfp] = useState(null);
    //
    const [listingName, setListingName] = useState(props.listingName);
    const [listingBio, setListingBio] = useState(type === "flatmate" ? props.listingBio : null);
    const [listingFlatBio, setListingFlatBio] = useState(type === "flat" ? props.listingFlatBio : null);
    const [listingPersonBio, setListingPersonBio] = useState(type === "flat" ? props.listingPersonBio : null);
    const [listingPersonBoxes, setListingPersonBoxes] = useState(props.listingPersonBoxes);
    const [listingPersonTags, setListingPersonTags] = useState(props.listingPersonTags);
    const [listingFlatBoxes, setListingFlatBoxes] = useState(type === "flat" ? props.listingFlatBoxes : null);
    const [listingFlatTags, setListingFlatTags] = useState(type === "flatmate" ? props.listingFlatTags : null);
    //Edit mode
    const [editListing, setEditListing] = useState(false);
    const [addedListingImgs, setAddedListingImgs] = useState(["", "", "", "", "", ""]);
    const [addedPfp, setAddedPfp] = useState(null);
    // Contact loading (after request)
    const [contactLoading, setContactLoading] = useState(false);
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
    const [moreInfoOpen, setMoreInfoOpen] = useState(false);
    const [reportDialog, setReportDialog] = useState(false);
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
    //Refs
    const [bio, setBio] = useState(null);
    const [flatBio, setFlatBio] = useState(null);
    const [personBio, setPersonBio] = useState(null);
    const [requestMessage, setRequestMessage] = useState(null);
    const [reportMessage, setReportMessage] = useState(null);
        
    
    useEffect(() => {
        setListingInfo(null);
        reloadProps();
        if(!router.isReady) return;
        if(props.statusCode != 200) return;
        getListing(id)
        .then(doc => {
            if(!checkAccess(doc.data().userInfo.uid, doc.data().visible, doc.data().userInfo.emailVerified)) return;
            setListingInfo(doc.data());
            setListingId(doc.id);
            setListingImgs(doc.data().userInfo.images.listingImgs);
            if(doc.data().userInfo.images.pfp){
                setPfp(doc.data().userInfo.images.pfp);
            }
        }).catch(error => {
            console.log(error);
        })
    }, [router.isReady, id])

    useEffect(() => {
        if(!(props.personTags === null) && listingPersonTags === null){
            setListingName(props.listingName);
            setListingBio(type === "flatmate" ? props.listingBio : null);
            setListingFlatBio(type === "flat" ? props.listingFlatBio : null);
            setListingPersonBio(type === "flat" ? props.listingPersonBio : null);
            setListingPersonBoxes(props.listingPersonBoxes);
            setListingPersonTags(props.listingPersonTags);
            setListingFlatBoxes(type === "flat" ? props.listingFlatBoxes : null);
            setListingFlatTags(type === "flatmate" ? props.listingFlatTags : null);
        }
    }, [props])

 

    //Fills edit inputs and pictures with default values
    useEffect(() => {
        if(listingInfo && editListing === true){
            if(type === "flatmate"){
                setBio(listingBio)
                setBudget(listingInfo.mainInfo.budget);
                setAddedPersonBoxes(listingPersonBoxes);
                setAddedPersonTags(listingPersonTags);
                setAddedFlatTags(listingFlatTags);
            }
            if(type === "flat"){
               setPersonBio(listingPersonBio);
               setFlatBio(listingFlatBio);
               setBudget(listingInfo.mainInfo.price);
               setAddedPersonBoxes(listingPersonBoxes);
               setAddedFlatBoxes(listingFlatBoxes);
               setAddedPersonTags(listingPersonTags);
            }

            
            setStayTime(listingInfo.mainInfo.stayTime);
            setStartTime(listingInfo.mainInfo.startTime);
        }
        
    }, [editListing])

    // Handle if user sign outs while editing
    useEffect(() =>{
        if(!currentUser){
            setEditListing(false);
        }
    }, [currentUser])


    //Resets changes if user goes back from editing
    useEffect(() => {
        if(!editListing){
            setAddedPersonTags(null);
            setAddedFlatTags(null);
            setAddedPersonBoxes(null);
            setAddedFlatBoxes(null);
            setAddedListingImgs(["", "", "", "", "", ""]);
            setAddedPfp(null);
        }
    }, [editListing])

    const reloadProps = () => {
        setListingName(props.listingName);
        setListingBio(type === "flatmate" ? props.listingBio : null);
        setListingFlatBio(type === "flat" ? props.listingFlatBio : null);
        setListingPersonBio(type === "flat" ? props.listingPersonBio : null);
        setListingPersonBoxes(props.listingPersonBoxes);
        setListingPersonTags(props.listingPersonTags);
        setListingFlatBoxes(type === "flat" ? props.listingFlatBoxes : null);
        setListingFlatTags(type === "flatmate" ? props.listingFlatTags : null);
    }

    //Functions
    const checkAccess = (uid, visible, emailVerified) => {
        if(currentUser && currentUser.uid === uid){
            return true;
        }else if(visible && emailVerified){
            return true;
        }else{
            return false;
        }
    }
    //Handles save in the edit
    const handleSave = () => {
        setLoading(true);
        const updateListing = callable("userUpdates-updateListing");
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
        if(!budget || budget < 1000 || budget > 60000){
            snackBar(`Prosím zadejte správnou hodnotu do ${listingInfo.type === "flatmate" ? "rozpočtu." : "nájemného."}`)
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
                bio: bio ? bio.trim() : "",
                visible: true,
            }
            if(addedPersonBoxes.job){
                params = {...params, "queryInfo.job": {
                    employed: addedPersonBoxes.job === "Zaměstnaný",
                    unemployed: addedPersonBoxes.job === "Nezaměstnaný",
                    student: addedPersonBoxes.job === "Student",
                }}
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
                flatBio: flatBio ? flatBio.trim() : "",
                personBio: personBio ? personBio.trim() : "",
                visible: true,
            }
            if(addedPersonBoxes.job){
                params = {...params, "queryInfo.job": {
                    employed: addedPersonBoxes.job === "Zaměstnaný",
                    unemployed: addedPersonBoxes.job === "Nezaměstnaný",
                    student: addedPersonBoxes.job === "Student",
                }}
            }
        }
        const updateListingInfo = {
            listingId: listingId,
            params: params,
        }
        updateListing(JSON.stringify(updateListingInfo)).then((response) => {
            if(addedPfp){
               return uploadImg(currentUser.uid, addedPfp, "pfp");
            }else{
                return Promise.resolve("No new pfp");
            }
        }).then((response) => {
            if(addedListingImgs.length){
                return uploadImg(currentUser.uid, addedListingImgs, "listingImgs");
            }else{
                return Promise.resolve("No new imgs");
            } 
        }).then((response) => {
            setLoading(false);
            setListingInfo(null);
            setListingBio(null);
            setListingFlatBio(null);
            setListingPersonBio(null);
            setListingPersonBoxes(null);
            setListingPersonTags(null);
            setListingFlatBoxes(null);
            setListingFlatTags(null);
            setEditListing(false);
            snackBar("Inzerát byl úspěšně upraven.", "success");
            window.scrollTo({top: 0, behavior: "smooth"});
            router.push(router.asPath);
            return getListing(listingId);
        }).then((doc) => {
            setListingInfo(doc.data());
        }).catch((error) => {
            setLoading(false);
            console.log(error);
            snackBar("Něco se pokazilo. Zkuste to prosím později.", "error");
        })
    }

    const handleRequest = () => {
        //Loading...
        setContactLoading(true);
        setReqDialogOpen(false);
        //Two people involved
        let reciever = listingInfo;
        let sender;
        //Callable functions
        const createRequest = callable("requests-createRequest");
        getUser(currentUser.uid)
        .then(user =>{
            const requestInfo = {
                sender: user,
                senderUid: user.id,
                reciever: reciever.userInfo,
                recieverListingId: reciever.id,
                recieverUid: reciever.userInfo.uid,
                message: requestMessage
            }
            return createRequest(JSON.stringify(requestInfo)); 
        }).then(res => {
            return getListing(id);
        }).then(doc => {
            setListingInfo(doc);
            setContactLoading(false);
            snackBar("Žádost byla odeslána.", "success");
        }).catch(error =>{
            setLoading(false);
            setReqDialogOpen(true);
            snackBar("Něco se nepovedlo. Zkuste to prosím později.", "error");
        })
    }

    const handleReport = () => {
        const message = reportMessage;

    }

    if(type === "flatmate"){
        return (
            <>
            <Head>
                <title>{listingName} | Roomie</title>
            </Head>
            <div className="Listing FlatMateListing">
                <Header variant="white" />
        {/*Taggers and boxer */}
                <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personTagOverlay}><Tagger variant="person" addedTags={addedPersonTags} existingTags={listingPersonTags} setTagOverlay={setPersonTagOverlay} setAddedTags={setAddedPersonTags}/></Backdrop>
                <Backdrop sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }} open={flatTagOverlay}><Tagger variant="flat" addedTags={addedFlatTags} existingTags={listingFlatTags} setTagOverlay={setFlatTagOverlay} setAddedTags={setAddedFlatTags}/></Backdrop>
                <Backdrop sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personBoxerOverlay}><Boxer setBoxerOverlay={setPersonBoxerOverlay} variant="person" existingBoxes={listingPersonBoxes} setAddedBoxes={setAddedPersonBoxes} addedBoxes={addedPersonBoxes}/></Backdrop>
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
        {/*Dialogs*/}
            {/*Budget edit Dialog*/}
                <Dialog
                open={sliderDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>Upravit rozpočet</DialogTitle>
                    <DialogContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Slider sx={{width: 250, marginTop: "1rem"}} min={1000} max={60000} onChange={(e) => setBudget(e.target.value)} step={1000} value={budget ? budget : 0}/>
                        <div style={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                            <i style={{marginRight: "0.5rem"}}className="fas fa-coins"></i>
                            <p> 
                                <input 
                                    maxLength={5} 
                                    type="text" 
                                    onChange={(e) => (e.target.value.match(/^[0-9]+$/) || e.target.value === "") ? setBudget(e.target.value) : ""} 
                                    value={budget} 
                                    className='range-input' /> 
                                {budget == 60000 ? " +" : ""} Kč</p>
                        </div>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            sx={(!budget || budget < 1000 || budget > 60000) ? {opacity: 0.2, pointerEvents: "none"} : {opacity: 1, pointerEvents: "all"}} 
                            onClick={() => setSliderDialog(false)}>
                                Uložit
                            </Button>
                    </DialogActions>
                </Dialog>
            {/* Contatc request dialog */}
                <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={reqDialogOpen}>
                    <InputDialog
                        heading="Odelsat žádost o kontakt"
                        description="Inzerant uvidí vaší žádost s vaší zprávou a může se rozhodnout zda vaší žádost přijme a poskytne vám své kontaktní údaje."
                        setMessage={setRequestMessage} 
                        message={requestMessage} 
                        setOpen={setReqDialogOpen} 
                        handleSend={handleRequest}/>
                </Backdrop>
                <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={reportDialog}>
                    <InputDialog
                        heading={`Nahlásit uživatele ${listingInfo && listingInfo.userInfo.username}`}
                        description="Prosím popište důvody nahlášení."
                        setMessage={setReportMessage} 
                        message={reportMessage} 
                        setOpen={setReportDialog} 
                        handleSend={handleReport}/>
                </Backdrop>
            
                {/*main*/}
                <div className="listing-banner"></div>
                    <div className="listing-content">
                {/* content header*/}
                            <div className="content-header">
                                <div className="mid-container">
                                    <div className="header-pfp-container">
                                        {editListing &&
                                            <div onClick={() => {
                                                setGalleryInput({
                                                    open: true,
                                                    index: -1,
                                                })
                                            }} className={`container-edit-icon ${editListing && "active"}`}>
                                                <i className="fas fa-pen"></i>
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
                                                    {listingInfo.userInfo.images.pfp ?
                                                        <img className='header-pfp' src={listingInfo.userInfo.images.pfp} alt="" />
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
    
                                    {!listingInfo ? 
    
                                    <div className="header-info-loading">
                                        <CircularProgress/>
                                    </div>
                                    :   
                                    <div className="header-info">
                                        <div className="info-main">
                                            <h1 className="main-name">{listingInfo.userInfo.username}</h1>
                                            {((currentUser && currentUser.uid == listingInfo.userInfo.uid) && (listingInfo && listingInfo.visible)) && 
                                                <button onClick={() => setEditListing(prevState => !prevState)}className="main-edit-profile">{editListing ? "Zpět" : "Upravit inzerát"}</button>
                                            }
                                            <i onClick={() => setMoreInfoOpen(prevState => !prevState)} className="main-more fas fa-ellipsis-h"></i>
                                            <ul className={`main-more-list ${moreInfoOpen && "active"}`}>
                                                <li onClick={() => setReportDialog(true)}>Nahlásit uživatele</li>
                                            </ul>
                                            <div className="main-description">
                                                <p>{listingInfo.userInfo.age}, {listingInfo.userInfo.gender === "male" ? "muž" : listingInfo.userInfo.gender === "female" ? "žena" : "jiné"}</p>
                                            </div>
                                        </div>
                                        <ListingInfoImportant type="flatmate" listingInfo={listingInfo} editListing={editListing} state={{budget, startTime, stayTime, setBudget, setStayTime, setStartTime, setSliderDialog}}/>
                                        <ListingContact listingInfo={listingInfo} editListing={editListing} state={{setReqDialogOpen, contactLoading}}/>
                                    </div>
                                    }
                                </div>
                            </div>
                        
        {/*About*/}
                    
                    <div className="mid-container">
                        <div className="content-body">
                            <div className="body-messages">
                                {(listingInfo && !listingInfo.visible )&&
                                        <div className="messages-message">
                                            <i className="fas fa-info"></i>
                                            <p>
                                                Váš inzerát je nedokončený, prosím dokončete jej 
                                                <Link href={`/cr/${listingInfo.type}/${listingId}`}><a style={{textDecoration: "underline"}}> zde</a></Link>
                                            </p> 
                                        </div>
                                }
                                {(listingInfo && !listingInfo.userInfo.emailVerified) &&
                                    <div className="messages-message">
                                    <i className="fas fa-info"></i>
                                    <p>
                                        Váš účet není ověřený - pro používání Roomie si jej prosím ověřte pomocí odkazu zaslaného na váš e-mail.
                                    </p> 
                                </div>
                                }
                            </div>
                            <div className="body-info">
                                <div className="container">
                                    <ListingBoxesContainer type="flatmate" addedBoxes={addedPersonBoxes} existingBoxes={listingPersonBoxes} editListing={editListing} />
                                    {editListing && <div className="info-edit-boxes">
                                        <button onClick={() => setPersonBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                    </div>}
                                </div>
                            </div> 
                            <ListingAbout type="flatmate" 
                                listingInfo={listingInfo} 
                                existingBio={listingBio}
                                existingFlatBio={listingFlatBio}
                                existingPersonBio={listingPersonBio}
                                existingFlatTags={listingFlatTags}
                                existingPersonTags={listingPersonTags}
                                editListing={editListing} 
                                state={{addedFlatTags, addedPersonTags, bio, setBio, personBio, setPersonBio, flatBio, setFlatBio, setPersonTagOverlay, setFlatTagOverlay, setPersonBoxerOverlay, setFlatBoxerOverlay}}/>
                            <Gallery 
                                    type={"flatmate"}
                                    listingImgs={listingImgs} 
                                    setListingImgs={setListingImgs}
                                    addedListingImgs={addedListingImgs}
                                    setAddedListingImgs={setAddedListingImgs}
                                    pfp={pfp && pfp}
                                    setPfp={setPfp}
                                    setAddedPfp={setAddedPfp}
                                    addedPfp={addedPfp} 
                                    state={{setGalleryInput, editListing, listingInfo, listingId}} />
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
            <>
                <Head>
                    <title>Byt {listingName} | Roomie</title>
                </Head>

                <div className="Listing FlatListing">
                <Header variant="white" />
        {/* Boxers and tags */}
                <Backdrop  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personTagOverlay}><Tagger variant="person" addedTags={addedPersonTags} existingTags={listingInfo ? listingInfo.personTags : null} setTagOverlay={setPersonTagOverlay} setAddedTags={setAddedPersonTags}/></Backdrop>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={personBoxerOverlay}><Boxer setBoxerOverlay={setPersonBoxerOverlay} variant="person" existingBoxes={listingInfo && listingInfo.personBoxes} setAddedBoxes={setAddedPersonBoxes} addedBoxes={addedPersonBoxes}/></Backdrop>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={flatBoxerOverlay}><Boxer setBoxerOverlay={setFlatBoxerOverlay} variant="flat" existingBoxes={listingInfo && listingInfo.flatBoxes} setAddedBoxes={setAddedFlatBoxes} addedBoxes={addedFlatBoxes}/></Backdrop>
        {/* Dialogs */}
                <Dialog
                    open={sliderDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle>Upravit rozpočet</DialogTitle>
                        <DialogContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Slider sx={{width: 250, marginTop: "1rem"}} min={1000} max={60000} onChange={(e) => setBudget(e.target.value)} step={1000} value={budget ? budget : 0}/>
                            <div style={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                                <i style={{marginRight: "0.5rem"}}className="fas fa-coins"></i>
                                <p> 
                                    <input 
                                        maxLength={5} 
                                        type="text" 
                                        onChange={(e) => (e.target.value.match(/^[0-9]+$/) || e.target.value === "") ? setBudget(e.target.value) : ""} 
                                        value={budget} 
                                        className='range-input' /> 
                                    {budget == 6000 && "+"} Kč</p>
                            </div>
                            
                        </DialogContent>
                        <DialogActions>
                            <Button 
                                sx={(!budget || budget < 1000 || budget > 60000) ? {opacity: 0.2, pointerEvents: "none"} : {opacity: 1, pointerEvents: "all"}} 
                                onClick={() => setSliderDialog(false)}>
                                    Uložit
                                </Button>
                        </DialogActions>
                    </Dialog>

                    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={reqDialogOpen}>
                        <InputDialog
                            heading="Odelsat žádost o kontakt"
                            description="Inzerant uvidí vaší žádost s vaší zprávou a může se rozhodnout zda vaší žádost přijme a poskytne vám své kontaktní údaje."
                            setMessage={setRequestMessage} 
                            message={requestMessage} 
                            setOpen={setReqDialogOpen} 
                            handleSend={handleRequest}/>
                    </Backdrop>

                    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={reportDialog}>
                        <InputDialog
                            heading={`Nahlásit uživatele ${listingInfo && listingInfo.userInfo.username}`}
                            description="Prosím popište důvody nahlášení."
                            setMessage={setReportMessage} 
                            message={reportMessage} 
                            setOpen={setReportDialog} 
                            handleSend={handleReport}/>
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
        {/*Listing content */}
                    <div className="listing-content">
        {/*Content header */}
                            <div className="content-header">
                                <div className="mid-container">
                                    <div className="header-pfp-container">
                                        {editListing && 
                                            <div onClick={() => {
                                                setGalleryInput({
                                                    open: true,
                                                    index: 0,
                                                })
                                            }} className={`container-edit-icon`}>
                                                <i className="fas fa-pen"></i>
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

                                    {!listingInfo ? 
                                        <div className="header-info-loading">
                                            <CircularProgress />
                                        </div>
                                    :
                                    
                                    <div className="header-info">
                                        <div className="info-main">
                                            <h1 className="main-name">Byt {listingInfo && listingInfo.flatBoxes.layout && listingInfo.flatBoxes.layout}</h1>
                                        {((currentUser && currentUser.uid == listingInfo.userInfo.uid) && (listingInfo && listingInfo.visible)) && 
                                            <button onClick={() => setEditListing(prevState => !prevState)} className="main-edit-profile">{editListing ? "Zpět" : "Upravit inzerát"}</button>
                                        }  
                                            <i onClick={() => setMoreInfoOpen(prevState => !prevState)} className="main-more fas fa-ellipsis-h"></i>
                                            <ul className={`main-more-list ${moreInfoOpen && "active"}`}>
                                                <li onClick={() => setReportDialog(true)}>Nahlásit uživatele</li>
                                            </ul>
                                            <div className="main-description">
                                                <p>{listingInfo && listingInfo.flatBoxes.location}</p>
                                            </div>
                                        </div>
                                        
                                        <ListingInfoImportant type="flat" listingInfo={listingInfo} editListing={editListing} state={{budget, startTime, stayTime, setBudget, setStayTime, setStartTime, setSliderDialog}}/>
                                        <ListingContact listingInfo={listingInfo} editListing={editListing} state={{setReqDialogOpen, contactLoading}}/>
                                </div>
                            }
                            </div>
                        </div>
                
        {/*Content about  */}                  
                    <div className="mid-container">
                        <div className="content-body">
                            <div className="body-messages">
                                {(listingInfo && !listingInfo.visible )&&
                                        <div className="messages-message">
                                            <i className="fas fa-info"></i>
                                            <p>
                                                Váš inzerát je nedokončený, prosím dokončete jej  
                                                <Link href={`/cr/${listingInfo.type}/${listingId}`}><a style={{textDecoration: "underline"}}> zde</a></Link>
                                            </p> 
                                        </div>
                                }
                                {(listingInfo && !listingInfo.userInfo.emailVerified) &&
                                    <div className="messages-message">
                                        <i className="fas fa-info"></i>
                                        <p>
                                            Váš účet není ověřený - pro používání Roomie si jej prosím ověřte pomocí odkazu zaslaného na váš e-mail.
                                        </p> 
                                    </div>
                                }
                            </div>
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
                                                            <img src={`/img/pfps/${(listingInfo && listingInfo.userInfo.gender === "male") ? "radek" : "radka"}-pfp.png`} className="profile-info-pfp" /> 
                                                            : 
                                                            <div className="profile-info-pfp"></div>
                                                        }
                                                    </>
                                                }
                                            </div>
                                            <div className="profile-info-text">
                                            {!listingInfo ? <Skeleton variant="text" sx={{width: 50}}/>: <p className="text-name">{listingInfo.userInfo.username}</p> } 
                                            {!listingInfo ? <Skeleton variant="text" sx={{width: 30}} />:  <p className="text-description">{listingInfo.userInfo.gender === "male" ? "Muž" : listingInfo.userInfo.gender === "female" ? "Žena" : listingInfo.userInfo.gender === "other" ? "Jiné" : ""}, {listingInfo.userInfo.age}</p>}
                                            </div>
                                            
                                        </div>
                                        <div alt="" className="boxes-map-container" >
                                            <img src="/img/listing/mapa.png" alt="" className="boxes-map" />
                                        </div>
                                    </div>
                                    <ListingBoxesContainer existingBoxes={listingFlatBoxes} addedBoxes={addedFlatBoxes} editListing={editListing} type="flat" /> 
                                    {editListing && <div className="info-edit-boxes">
                                        <button onClick={() => setFlatBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                    </div>}
                                    <ListingBoxesContainer existingBoxes={listingPersonBoxes} addedBoxes={addedPersonBoxes} editListing={editListing} type="flatmate" />
                                    {editListing && <div className="info-edit-boxes">
                                        <button onClick={() => setPersonBoxerOverlay(true)}> <i className="fas fa-plus"></i> </button>
                                    </div>}
                                </div>
                                
                            </div> 
                            <ListingAbout type="flat" 
                                listingInfo={listingInfo} 
                                existingBio={listingBio}
                                existingFlatBio={listingFlatBio}
                                existingPersonBio={listingPersonBio}
                                existingFlatTags={listingFlatTags}
                                existingPersonTags={listingPersonTags}
                                editListing={editListing} 
                                state={{addedFlatTags, addedPersonTags, bio, setBio, personBio, setPersonBio, flatBio, setFlatBio, setPersonTagOverlay, setFlatTagOverlay, setPersonBoxerOverlay, setFlatBoxerOverlay}}/>
                            <Gallery 
                                type={"flat"}
                                listingImgs={listingImgs} 
                                setListingImgs={setListingImgs}
                                addedListingImgs={addedListingImgs}
                                setAddedListingImgs={setAddedListingImgs}
                                pfp={pfp && pfp}
                                setPfp={setPfp}
                                addedPfp={addedPfp}
                                setAddedPfp={setAddedPfp} 
                                state={{setGalleryInput, editListing, listingInfo, listingId}} />
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
    </>
        )
    }

}



export default Listing
