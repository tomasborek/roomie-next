import React from 'react'
//Next
import Link from "next/link";
import { useRouter } from 'next/dist/client/router';
//Framer motion
import { motion } from 'framer-motion';

//Contexts
import { useAuth } from '../../contexts/AuthContext';
import { useNavOverlay } from '../../contexts/NavOverlayContext';
import { useLoading } from '../../contexts/LoadingContext';
const NavOverlay = () => {
    //Variable
    const  router = useRouter();
    const {currentUser, logOut} = useAuth();
    const [navOverlay, setNavOverlay] = useNavOverlay();
    const [loading, setLoading] = useLoading();
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
                     <li className="nav-logged-item" onClick={() =>{
                         router.push("/edit-profile");
                         setNavOverlay(false);
                     }}> <i className="item-icon fas fa-pen"></i> Upravit účet</li>
                    <li className="nav-logged-item"><i className="item-icon fas fa-home"></i>Můj inzerát</li>
                    <li onClick={() => {
                        setLoading(true);
                        logOut()
                        .then(res => {
                            router.push("/");
                            setLoading(false);
                            setNavOverlay(false);
                        })
                        .catch(error => {
                            console.log(error.code);
                            setLoading(false);
                            setNavOverlay(false);
                        })
                    }} className="nav-logged-item"><i className="item-icon fas fa-sign-out-alt"></i>Odhlásit</li>
                </ul>
            }
        </motion.div>
      
    )
}

export default NavOverlay
