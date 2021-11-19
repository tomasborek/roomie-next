import React, {useState, useEffect} from 'react'
//next
import Link from "next/link";
import { useRouter } from 'next/dist/client/router';
//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPen, faSignOutAlt, faHome, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

//Framer
import { motion } from 'framer-motion';

//Contexts
import { useAuth } from '../../contexts/AuthContext';
import { useDb } from '../../contexts/DbContext';
import { useLoading } from '../../contexts/LoadingContext';
import { useNavOverlay } from '../../contexts/NavOverlayContext';
//Components
import Dropdown from '../Dropdown/Dropdown';
//MUI
import { CircularProgress } from '@mui/material';


const Header = ({variant}) => {
    //Variables
    //Contexts
    const {currentUser, logOut, userLoaded} = useAuth();
    const {getUser} = useDb();
    const router = useRouter();
    const [loading, setLoading] = useLoading();
    const [navOverlay, setNavOverlay] = useNavOverlay();

     //State
     const [isDropdownActive, setIsDropdownActive] = useState(false);
     const [notificationDropdown, setNotificationDropdown] = useState(false);
     const [notifications, setNotifications] = useState(null);

     //UseEffect
    useEffect(() => {
        if(notificationDropdown && !notifications){
            getUser(currentUser.uid)
            .then(doc => {
                setNotifications(doc.data().requests.recieved);
            })
        }
    }, [notificationDropdown])

    //Functions
    const handleMyListing = () => {
        setLoading(true);
        getUser(currentUser.uid)
        .then(doc =>{
            router.push(`/${doc.data().mainInfo.type === "offerer" ? "flat" : doc.data().mainInfo.type === "flatmate" ? "flatmate" : ""}/${doc.data().listing.id}`);
            setLoading(false);
        }).catch(error => {
            setLoading(false);
        })
    }
    return (
        <header className={`main-header ${variant}`}>
            <div className="brand">
                <div className="brand-logo">
                        <img src={variant === "gradient" ? "/img/logos/logo-white-small.png" : "/img/logos/logo-small.png"} alt="" />
                </div>

               <h2 onClick={() => {
                   setNavOverlay(false);
                   currentUser ? router.push(`/explore/flatmates`) : router.push("/");
               }}>Roomie</h2>
            </div>

            
            {userLoaded ?
            currentUser ? 
            <div className="navbar navbar-logged">
                <FontAwesomeIcon onClick={() => setNotificationDropdown(prevState =>!prevState)} icon={faBell} className="navbar-notifications"/>
                <div className="navbar-profile"></div>
                <motion.span animate={isDropdownActive ? {rotate: -180}: ""} initial={{rotate:0}} transition={{duration: 0.4}} onClick={() => setIsDropdownActive(!isDropdownActive)} className="navbar-dropdown-icon-wrapper">
                    <FontAwesomeIcon onClick={() => setIsDropdownActive(!isDropdownActive)} icon={faChevronDown} className="navbar-dropdown-icon" />
                </motion.span>
                
                {/* <motion.i animate={isDropdownActive ? {rotate: -180}: ""} initial={{rotate:0}} transition={{duration: 0.4}} onClick={() => setIsDropdownActive(!isDropdownActive)} className="fas fa-chevron-down navbar-dropdown-icon"></motion.i> */}
               <Dropdown className="main-header-dropdown" open={isDropdownActive}>
                <ul className="dropdown-list">
                    <li onClick={() => router.push("/edit-profile")} className="list-item"> <FontAwesomeIcon icon={faPen} className="item-icon"/> Upravit účet</li>
                    <li onClick={handleMyListing}  className="list-item"><FontAwesomeIcon icon={faHome} className="item-icon"/> Můj inzerát</li>
                    <li onClick={() => {
                        setLoading(true);
                        logOut()
                        .then(res => {
                            router.push("/");
                            setLoading(false);
                        })
                        .catch(error => {
                            console.log(error);
                            setLoading(false);
                        })
                    }} className="list-item"><FontAwesomeIcon icon={faSignOutAlt} className="item-icon"/> Odhlásit</li>
                </ul>
               </Dropdown>
               <Dropdown open={notificationDropdown}>
                   <ul className="notifications-dropdown">
                      {notifications ? 
                      Object.keys(notifications).map(not => (
                          <li onClick={() => router.push("/requests/recieved")}>{notifications[not].name} vás žádá o navázání kontaktu.</li>
                      ))
                      :
                      <li><CircularProgress/></li>
                      
                    }
                   </ul>
               </Dropdown>
                
            </div>
           :
           <ul className="navbar">
               <li className="navbar-login"><Link href="/login">Přihlásit se</Link></li>
               <li className="navbar-login"><Link href="/register">Registrovat</Link></li>
           </ul>
           :""
        }
            
        <FontAwesomeIcon onClick={() => setNavOverlay(!navOverlay)} className={`hamburger `}  icon={navOverlay === true ? faTimes : faBars}/>
        
        
          
        </header>
    )
}

export default Header
