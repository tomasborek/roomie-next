import React, {useEffect} from 'react'
//Next
import Link from "next/link";
import { useRouter } from 'next/dist/client/router';
//Framer motion
import { motion } from 'framer-motion';

//Contexts
import { useAuth } from '../../contexts/AuthContext';
import { useDb } from '../../contexts/DbContext';
import { useNavOverlay } from '../../contexts/NavOverlayContext';
import { useLoading } from '../../contexts/LoadingContext';
const NavOverlay = () => {
    //Variable
    const  router = useRouter();
    const {currentUser, currentUserInfo, logOut} = useAuth();
    const [navOverlay, setNavOverlay] = useNavOverlay();
    const {getUser} = useDb();
    const [loading, setLoading] = useLoading();
    //Functions
    const handleMyListing = () => {
        router.push(`/${currentUserInfo.mainInfo.type === "offerer" ? "flat" : currentUserInfo.mainInfo.type === "flatmate" ? "flatmate" : ""}/${currentUserInfo.listing.id}`);
    }

    const handleLogOut = () => {
        setLoading(true);
        setNavOverlay(false);
        logOut()
        .then(res => {
            router.push("/");
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }

    useEffect(() => {
        if(navOverlay){
            window.scrollTo(0,0);
            document.body.classList.add("lock-scroll");
        }else{
            document.body.classList.remove("lock-scroll");
        }
    }, [navOverlay])

    return (
       
        <motion.div
        animate={ navOverlay ? {
            y: 0,
            opacity: 1,
            display: "flex",
            pointerEvents: "all"
        } : ""}
        initial={{
            y: "-100px",
            opacity: 0,
            display: "none",
            pointerEvents: "none"
                    
        }}
        transition={{
            duration: 0.5
        }}


        className="nav-overlay">
            {!currentUser ?
                <ul className="overlay-nav">
                        <li onClick={() => {
                            router.push("/login");
                            setNavOverlay(false);
                        }}>Přihlásit se</li>
                        <li onClick={() => {
                            router.push("/register");
                            setNavOverlay(false);
                        }}>Registrovat</li>
                </ul>
                :
                <ul className="overlay-nav-logged">
                    <li onClick={() => {
                        handleMyListing();
                        setNavOverlay(false);
                    }} className="nav-logged-item"><i className="item-icon fas fa-home"></i>Můj inzerát</li>
                    <li onClick={() => {
                        setNavOverlay(false);
                        router.push("/friends");
                    }}  className="nav-logged-item"><i className="fas fa-users item-icon"></i> Přátelé</li>
                    <li onClick={() => {
                        setNavOverlay(false);
                        router.push("/requests/recieved");  
                    }}  className="nav-logged-item"><i className="fas fa-envelope item-icon"></i> Žádosti</li>
                    <li onClick={() => {
                        setNavOverlay(false);
                        router.push("/liked");
                    }} className="nav-logged-item"><i className="fas fa-heart"></i> Oblíbené</li>
                     <li className="nav-logged-item" onClick={() =>{
                         router.push("/edit-profile");
                         setNavOverlay(false);
                     }}> <i className="item-icon fas fa-pen"></i> Účet a soukromí</li>
                    <li onClick={() => {
                       handleLogOut();
                    }} className="nav-logged-item"><i className="item-icon fas fa-sign-out-alt"></i>Odhlásit</li>
                </ul>
            }
        </motion.div>
      
    )
}

export default NavOverlay
