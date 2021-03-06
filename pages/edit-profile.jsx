import React, {useEffect, useRef, useState} from 'react'
//Router
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
//Contexts
import { useAuth } from '../contexts/AuthContext';
import {useDb} from "../contexts/DbContext";
import { useLoading } from '../contexts/LoadingContext';
import {useFunctions} from "../contexts/FunctionsContext";
import {useSnackBar} from "../contexts/SnackBarContext";
import { useStorage } from '../contexts/StorageContext';

//Components
import Header from "../components/Header/Header";
import Switcher from "../components/Switcher/Switcher";
import Footer from "../components/Footer/Footer"
import GalleryInput from "../components/GalleryInput/GalleryInput";
//MUI components
import  CircularProgress  from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import  Button  from '@mui/material/Button';
import Alert  from '@mui/material/Alert';

const EditProfile = () => {
    //Variables
    const {currentUser, delUser, reAuth, changePassword} = useAuth();
    const {getUser, updateUser, updateListing, getListingByUser} = useDb();
    const router = useRouter();
    const [loading, setLoading] = useLoading();
    const {callable} = useFunctions();
    const {snackBar} = useSnackBar();
    const {uploadImg} = useStorage();
    //State
    const [userData, setUserData] = useState();
    const [dDialogOpen, setDDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
    const [error, setError] = useState(null);
    const [addedPfp, setAddedPfp] = useState(null);
    const [pfp, setPfp] = useState("");
    const [galleryInput, setGalleryInput] = useState({
        index: -1,
        open: false,
    })
    const [listingVisible, setListingVisible] = useState(false);
    const [emailVisible, setEmailVisible] = useState(true);
    const [phoneVisible, setPhoneVisible] = useState(true);
    //refs
    const usernameRef = useRef();   
    const emailRef = useRef();   
    const phoneRef = useRef();   
    const igRef = useRef();   
    const fbRef = useRef();    
    const passwordRef = useRef();   

    const confirmEmailRef = useRef();
    const confirmPasswordForDeleteRef = useRef();
    const confirmPasswordForChangeRef = useRef();
    //Side effects

    //When current user is loaded, it sets userData state by getting the user's document from db
    useEffect(() => {
        if(currentUser){
            getUser(currentUser.uid)
            .then(user =>{
            setUserData(user);
            user.data().mainInfo.pfp && setPfp(user.data().mainInfo.pfp)
            })
            .catch(error =>{
            console.log(error.message);
            })
        }
    }, [currentUser])

    //Fills input with user's data after userData has been fetched
    useEffect(() => {
        if(userData){
            usernameRef.current.value = userData.data().mainInfo.username;
            emailRef.current.value = userData.data().contact.email;
            phoneRef.current.value = userData.data().contact.phone.substr(4);
            igRef.current.value = userData.data().contact.socials.ig;
            fbRef.current.value = userData.data().contact.socials.fb;
            setListingVisible(!userData.data().hiddenListing);
            setPhoneVisible(userData.data().contact.hidden != "phone");
            setEmailVisible(userData.data().contact.hidden != "email");
        }
        
    }, [userData])



    //Functions
    //Action handlers
    const handleSave = () =>{
        const username = usernameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const phone = phoneRef.current.value.trim();
        const updateProfile = callable("userUpdates-updateProfile");
        const hiddenContact = !phoneVisible ? "phone" : !emailVisible ? "email" : (phoneVisible && emailVisible) ? "" : "";
        if(username == null || email == null || phone == null){
            snackBar("N??kter?? d??le??it?? pole chyb??. Vypl??te je pros??m.", "error");
            return;
        };
        if(username.length <= 2) {
            snackBar("Pros??m, zadejte sv?? opravdov?? jm??no.", "error");
            return;
        };
        if(phone.includes("+")){
            snackBar("Pros??m zadejte ????slo bez p??edvolby");
            return;
        }
        if(phone.length < 9){
            snackBar("Pros??m, zadejte sv?? opravdov?? telefonn?? ????slo.", "error");
            return;
        };
        if(email.length < 3){
            snackBar("Pros??m, zadejte sv??j opravdov?? email.", "error");
            return;
        };
        if(!handleSocials()) {
            snackBar("Pros??m, zadejte opravdov?? odkazy na soci??ln?? sit??.", "error");
            return;
        };
        phone = userData.data().contact.phone.substr(0,4) + phone;
        setLoading(true);
        const profileInfo = {
            uid: currentUser.uid,
            listingId: userData.data().listing.id,
            userParams: {
                contact: {
                    email,
                    phone,
                    hidden: hiddenContact,
                    socials: {
                        fb: fbRef.current.value,
                        ig: igRef.current.value
                    }
                },
                hiddenListing: !listingVisible,
                "mainInfo.username": username,
            },
            listingParams: {
                email,
                phone,
                fb: fbRef.current.value,
                ig: igRef.current.value,
                hiddenByUser: !listingVisible,
                hiddenContact
            }
        }

        updateProfile(JSON.stringify(profileInfo)).then((response) => {
            if(addedPfp){
                return uploadImg(currentUser.uid, addedPfp, "pfp");
            }else{
                return new Promise((resolve, reject) => {
                    resolve("completed");
                })
            }
        }).then((snapshot) =>{
            setLoading(false);
            router.back();
            snackBar("??prava prob??hla ??sp????n??.", "success");
        }).catch((error) => {
            console.log(error);
            setLoading(false);
            snackBar("N??co se nepovedlo. Zkuste to pros??m pozd??ji.", "error");
        })
    }

    const handleDiscard = () => {
        setDDialogOpen(false);
        router.back();
    }

    const handleDelete = () => {
        console.log("DELETE");
        setLoading(true);
        setDeleteDialogOpen(false);
        reAuth(currentUser, confirmPasswordForDeleteRef.current.value)
        .then(res => {
            return delUser(currentUser);
        }).then(res => {
            setLoading(false);
            router.push("/");
            setDeleteDialogOpen(false);
        })
        .catch(error => {
            setDeleteDialogOpen(true);
            switch(error.code){
                case "auth/wrong-password":
                    setError("Zadan?? heslo nen?? spr??vn??");
                    break;
                default:
                    setError("N??co se nepovedlo.");
                    break;
            }
            setLoading(false);
        })
    }

    const handleSocials = () => {
        let fb = false;
        let ig = false;
        if(!fbRef.current.value == ""){
            fbRef.current.value =  fbRef.current.value.trim();
            if(!fbRef.current.value.includes("facebook.com")){
                fb =  false;
            }else if(!fbRef.current.value.includes("https://")){
                fbRef.current.value = "https://" + fbRef.current.value;
                fb = true;
            }else{
                fb = true;
            }
        }else{
            fb = true;
        }

        if(!igRef.current.value == ""){
            igRef.current.value =  igRef.current.value.trim();
            if(!igRef.current.value.includes("instagram.com")){
                ig = false;
            }else if(!igRef.current.value.includes("https://")){
                igRef.current.value = "https://" + igRef.current.value;
                ig = true;
            }else{
                ig = true;
            }
        }else{
            ig = true;
        }


        

        if(fb && ig){
            return true;
        }else{
            return false;
        }
    }

    const handlePfpChange = (e) => {
        if(e.target.files[0]){
            setAddedPfp(e.target.files[0]);
        }
    }

    const handlePasswordChange = () => {
        setLoading(true);
        setPasswordDialogOpen(false);
        reAuth(currentUser, confirmPasswordForChangeRef.current.value).then((res) => {
            return changePassword(currentUser, passwordRef.current.value);
        }).then((response) => {
            setLoading(false);
            handleSave();
        }).catch((error) => {
            setPasswordDialogOpen(true);
            switch(error.code){
                case "auth/wrong-password":
                    setError("Zadan?? heslo nen?? spr??vn??");
                    break;
                case "auth/weak-password":
                    setError("Va??e nov?? heslo by m??lo m??t alespo?? 6 znak??.");
                    break;
                default:
                    setError("N??co se nepovedlo.");
                    break;
            }
            setLoading(false);
            console.log(error);
        })
    }

    const handlePfpDelete = () => {
        if(addedPfp){
            setAddedPfp(null);
            return;
        }
        setLoading(true);
        const deleteImgs = callable("images-deleteImgs");
        const imageInfo = {
            url: pfp,
            uid: currentUser.uid,
            listingId: userData.data().listing.id,
        }
        deleteImgs(JSON.stringify(imageInfo)).then((response) => {
            setPfp(null);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
        })


    }
          
    return (
        <>
            <Head>
                <title>Upravit profil | Roomie</title>
            </Head>
            <div className="EditProfile">
                <Header variant="gradient" />
                <Dialog
                open={dDialogOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>Neulo??en?? zm??ny</DialogTitle>
                    <DialogContent>
                        <DialogContentText>M??te neulo??en?? zm??ny. P??ejete si pokra??ovat?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button  onClick={handleDiscard}>Ano</Button>
                        <Button onClick={() => setDDialogOpen(false)}>Ne</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                open={deleteDialogOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    {error && <Alert severity="error">{error}</Alert>}
                    <DialogTitle>P??ejete si smazat sv??j ????et?</DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{marginBottom: "16px"}}>Potvr??te pros??m sv?? p??ihla??ovac?? ??daje</DialogContentText>
                        <input ref={confirmPasswordForDeleteRef} style={{width: "100%"}} type="password" placeholder="Heslo..." />
                    </DialogContent>
                    <DialogActions>
                        <Button  onClick={handleDelete}>Smazat</Button>
                        <Button onClick={() => setDeleteDialogOpen(false)}>Ne</Button>
                    </DialogActions>
                </Dialog>


                <Dialog
                open={passwordDialogOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    {error && <Alert severity="error">{error}</Alert>}
                    <DialogTitle>Pro zm??nu hesla pros??m zadejte sv?? st??vaj??c?? heslo.</DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{marginBottom: "16px"}}>Potvr??te pros??m sv?? p??ihla??ovac?? ??daje</DialogContentText>
                        <input ref={confirmPasswordForChangeRef} style={{width: "100%"}} type="password" placeholder="Heslo..." />
                    </DialogContent>
                    <DialogActions>
                        <Button  onClick={handlePasswordChange}>Zm??nit</Button>
                        <Button onClick={() => setPasswordDialogOpen(false)}>Ne</Button>
                    </DialogActions>
                </Dialog>
                <GalleryInput object={galleryInput} setObject={setGalleryInput} addedPfp={addedPfp} setAddedPfp={setAddedPfp} pfp={pfp} />
                <div className="container">
                    {userData ? 
                        <div className="edit-content">
                            <div className="content-header">
                                {userData ? 
                                    <>
                                        {addedPfp ?
                                            <div className='header-pfp'>
                                                <img src={URL.createObjectURL(addedPfp)} alt="" />
                                                <div className="header-pfp-delete">
                                                    <i onClick={() => handlePfpDelete()} className="fas fa-trash"></i>
                                                </div>
                                            </div>
                                        :
                                        <>
                                            {pfp ?
                                                <div className='header-pfp'>
                                                    <img src={pfp} alt="" />
                                                    <div className="header-pfp-delete">
                                                        <i onClick={() => handlePfpDelete()} className="fas fa-trash"></i>
                                                    </div>
                                                </div>
                                                :
                                                <div className="header-pfp"></div> 
                                            }
                                        </>
                                        }
                                    </>
                                    :
                                    <div className="header-pfp"></div> 
                                }
                                <h2 className="header-name">{userData.data().mainInfo.username}</h2>
                                <a onClick={() => setGalleryInput({open: true, index: -1})} className="header-link">Zm??nit profilovou fotku</a>
                            </div>
                            {addedPfp != null &&
                                <div className="edit-file-uploaded">
                                        <i className="fas fa-check"></i>
                                        <p className="file-uploaded-description">Soubor nahr??n! ({addedPfp.name})</p>
                                </div> 
                            }

                            <div className="content-form">
                                <div className="form-item">
                                    <p className="item-description">Viditelnost profilu</p>
                                <Switcher activeRider={listingVisible} setActiveRider={setListingVisible}/>
                                </div>
                        
                                <p className="form-section-header">
                                    Osobn?? a p??ihla??ovac?? ??daje
                                </p>
                                <div className="form-item">
                                    <p className="item-description">Jm??no</p>
                                    <input disabled maxLength={15} ref={usernameRef} type="text" className="item-input" />
                                </div>
                                <div className="form-item">
                                    <p className="item-description">E-mail</p>
                                    <input disabled maxLength={30} ref={emailRef} type="text" className="item-input" />
                                    <i onClick={() => {
                                        if(emailVisible && !phoneVisible){
                                            setEmailVisible(false);
                                            setPhoneVisible(true);
                                        }else{
                                            setEmailVisible(prevState => !prevState)
                                        }
                                    }} style={{opacity: emailVisible ? 1 : 0.5}} className="fas fa-eye"></i>
                                </div>
                                <div className="form-item">
                                    <p className="item-description"> Tel. ????slo</p>
                                    <input maxLength={9} ref={phoneRef} type="text" className="item-input" />
                                    <i onClick={() => {
                                        if(phoneVisible && !emailVisible){
                                            setPhoneVisible(false);
                                            setEmailVisible(true);
                                        }else{
                                            setPhoneVisible(prevState => !prevState);
                                        }
                                    }} style={{opacity: phoneVisible ? 1 : 0.5}} className="fas fa-eye"></i>
                                </div>
                                <p className="form-section-header">
                                    Soci??ln?? s??t??
                                </p>
                                <div className="form-item">
                                    <p className="item-description">Instagram</p>
                                    <input ref={igRef} type="text" className="item-input" />
                                </div>
                                <div className="form-item">
                                    <p className="item-description">Facebook</p>
                                    <input ref={fbRef} type="text" className="item-input" />
                                </div>
                                <p className="form-section-header">
                                ????et a zabezpe??en??
                                </p>
                                <div className="form-item">
                                    <p className="item-description">Zm??nit heslo</p>
                                    <input maxLength={30} ref={passwordRef} type="password" placeholder='Zadejte nov?? heslo...' className="item-input" />
                                </div>
                            </div>
            
                            <div className="content-account-links">
                                <a className="links-deactivate">do??asn?? deaktivovat ????et</a>
                                <a onClick={() => setDeleteDialogOpen(true)} className="links-delete">smazat ????et</a>
                            </div>
                            
                            <div className="content-btns">
                                <button onClick={() => passwordRef.current.value ? setPasswordDialogOpen(true) : handleSave()} className="main-btn">Ulo??it zm??ny</button>
                                {/* <button onClick={() => setDDialogOpen(true)} className="acc-btn">Zahodit zm??ny</button> */}
                            </div>
                        
                    </div>
                    :
                    <div className="edit-loading">
                        <CircularProgress/>
                    </div>
                }
            
            </div>
            {userData &&<Footer/>}
        </div>
    </>
    )
}

export default EditProfile
