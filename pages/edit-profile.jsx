import React, {useEffect, useRef, useState} from 'react'
//Router
import { useRouter } from 'next/dist/client/router';
//Contexts
import { useAuth } from '../contexts/AuthContext';
import {useDb} from "../contexts/DbContext";
import { useLoading } from '../contexts/LoadingContext';
import {useFunctions} from "../contexts/FunctionsContext";
import {useSnackBar} from "../contexts/SnackBarContext";


//Components
import Header from "../components/Header/Header";
import Switcher from "../components/Switcher/Switcher";
import Footer from "../components/Footer/Footer"
//MUI components
import Skeleton from "@mui/material/Skeleton";
import { Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { Alert } from '@mui/material';

const EditProfile = () => {
    //Variables
    const {currentUser, delUser, reAuth} = useAuth();
    const {getUser, updateUser, updateListing, getListingByUser} = useDb();
    const router = useRouter();
    const [loading, setLoading] = useLoading();
    const {callable} = useFunctions();
    const {snackBar} = useSnackBar();
    //State
    const [userData, setUserData] = useState();
    const [dDialogOpen, setDDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [error, setError] = useState(null);
    //refs
    const usernameRef = useRef();   
    const emailRef = useRef();   
    const phoneRef = useRef();   
    const igRef = useRef();   
    const fbRef = useRef();   
    const ttRef = useRef();   
    const passwordRef = useRef();   

    const confirmEmailRef = useRef();
    const confirmPasswordRef = useRef();
    //Side effects

    //When current user is loaded, it sets userData state by getting the user's document from db
    useEffect(() => {
        if(currentUser){
            getUser(currentUser.uid)
            .then(user =>{
            setUserData(user);
            })
            .catch(error =>{
            console.log(error.message);
            })
        }else{
            setUserData(null);
        }
        
    }, [currentUser])

    //Fills input with user's data after userData has been fetched
    useEffect(() => {
        if(userData){
            usernameRef.current.value = userData.data().mainInfo.username;
            emailRef.current.value = userData.data().contact.email;
            phoneRef.current.value = userData.data().contact.phone;
            igRef.current.value = userData.data().contact.socials.ig;
            fbRef.current.value = userData.data().contact.socials.fb;
            ttRef.current.value = userData.data().contact.socials.tt;
        }
        
    }, [userData])

    //Functions
    //Action handlers
    const handleSave = () =>{
        const username = usernameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const phone = phoneRef.current.value.trim();
        const updateProfile = callable("updateProfile");
        if(username == null || email == null || phone == null) return;
        if(username.length <= 2) return;
        if(phone.length < 9) return;
        if(email.length < 3) return;
        if(!handleSocials()) return;
        setLoading(true);
        const profileInfo = {
            uid: currentUser.uid,
            listingId: userData.data().listing.id,
            userParams: {
                contact: {
                    email: email,
                    phone: phone,
                    socials: {
                        fb: fbRef.current.value,
                        tt: ttRef.current.value,
                        ig: igRef.current.value
                    }
                },
                "mainInfo.username": username
            },
            listingParams: {
                userInfo: {
                    name: usernameRef.current.value,
                    age: userData.data().mainInfo.age,
                    gender: userData.data().mainInfo.gender,
                    contact: {
                        email: emailRef.current.value,
                        phone: phoneRef.current.value,
                        fb: fbRef.current.value,
                        tt: ttRef.current.value,
                        ig: igRef.current.value
                    },
                    uid: currentUser.uid
                },
            }
        }
        updateProfile(JSON.stringify(profileInfo)).then((response) => {
            setLoading(false);
            router.back();
            snackBar("Úprava proběhla úspěšně.", "success");
        }).catch((error) => {
            setLoading(false);
            snackBar("Něco se nepovedlo. Zkuste to prosím později.", "error");
        })
    }

    const handleDiscard = () => {
        setDDialogOpen(false);
        router.back();
    }

    const handleDelete = () => {
        
        setLoading(true);
        setDeleteDialogOpen(false);
        reAuth(currentUser, confirmPasswordRef.current.value)
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
                    setError("Zadané heslo není správné");
            }
            console.log(error);
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
          
    return (
        <div className="EditProfile">
            <Header variant="gradient" />
            <Dialog
            open={dDialogOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle>Neuložené změny</DialogTitle>
                <DialogContent>
                    <DialogContentText>Máte neuložené změny. Přejete si pokračovat?</DialogContentText>
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
                <DialogTitle>Přejete si smazat svůj účet?</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{marginBottom: "16px"}}>Potvrďte prosím své přihlašovací údaje</DialogContentText>
                    <input ref={confirmPasswordRef} style={{width: "100%"}} type="password" placeholder="Heslo..." />
                </DialogContent>
                <DialogActions>
                    <Button  onClick={handleDelete}>Smazat</Button>
                    <Button onClick={() => setDeleteDialogOpen(false)}>Ne</Button>
                </DialogActions>
            </Dialog>
            <div className="container">
                {userData ? 
                    <div className="edit-content">
                        <div className="content-header">
                            <div className="header-pfp"></div> 
                            <h2 className="header-name">{userData.data().mainInfo.username}</h2>
                            <a className="header-link">Změnit profilovou fotku</a>
                        </div>

                        <div className="content-form">
                            <div className="form-item">
                                <p className="item-description">Viditelnost profilu</p>
                            <Switcher/>
                            </div>
                            <p className="form-section-header">
                                Osobní a přihlašovací údaje
                            </p>
                            <div className="form-item">
                                <p className="item-description">Jméno</p>
                                <input maxLength={15} ref={usernameRef} type="text" className="item-input" />
                            </div>
                            <div className="form-item">
                                <p className="item-description">E-mail</p>
                                <input maxLength={30} ref={emailRef} type="text" className="item-input" />
                            </div>
                            <div className="form-item">
                                <p className="item-description"> Tel. číslo</p>
                                <input maxLength={9} ref={phoneRef} type="text" className="item-input" />
                            </div>
                            <p className="form-section-header">
                                Sociální sítě
                            </p>
                            <div className="form-item">
                                <p className="item-description">Instagram</p>
                                <input ref={igRef} type="text" className="item-input" />
                            </div>
                            <div className="form-item">
                                <p className="item-description">Facebook</p>
                                <input ref={fbRef} type="text" className="item-input" />
                            </div>
                            <div className="form-item">
                                <p className="item-description">Twitter</p>
                                <input ref={ttRef} type="text" className="item-input" />
                            </div>
                            <p className="form-section-header">
                            Účet a zabezpečení
                            </p>
                            <div className="form-item">
                                <p className="item-description">Heslo</p>
                                <input maxLength={30} ref={passwordRef} type="text" className="item-input" />
                            </div>
                        </div>
        
                        <div className="content-account-links">
                            <a className="links-deactivate">dočasně deaktivovat účet</a>
                            <a onClick={() => setDeleteDialogOpen(true)} className="links-delete">smazat účet</a>
                        </div>
                        
                        <div className="content-btns">
                            <button onClick={handleSave} className="main-btn">Uložit změny</button>
                            <button onClick={() => setDDialogOpen(true)} className="acc-btn">Zahodit změny</button>
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
    )
}

export default EditProfile
