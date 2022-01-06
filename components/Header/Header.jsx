import React, {useState, useEffect} from 'react'
//next
import Link from "next/link";
import { useRouter } from 'next/dist/client/router';

//Framer
import { motion } from 'framer-motion';

//Contexts
import { useAuth } from '../../contexts/AuthContext';
import { useDb } from '../../contexts/DbContext';
import { useLoading } from '../../contexts/LoadingContext';
import { useNavOverlay } from '../../contexts/NavOverlayContext';
import { useNotifications } from '../../contexts/NotificationsContext';
//Components
import Dropdown from '../Dropdown/Dropdown';
//MUI
import { CircularProgress, Badge } from '@mui/material';


const Header = ({variant}) => {
    //Variables
    //Contexts
    const {currentUser, currentUserInfo, logOut, userLoaded} = useAuth();
    const {getUser, getRequests, getNotifications} = useDb();
    const router = useRouter();
    const [loading, setLoading] = useLoading();
    const [navOverlay, setNavOverlay] = useNavOverlay();

     //State
     const [isDropdownActive, setIsDropdownActive] = useState(false);
     const [notificationDropdown, setNotificationDropdown] = useState(false);
     const [notifications, setNotifications] = useNotifications();


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
                {(notifications && notifications.length) ?
                     <Badge sx={{pointerEvents: "none"}} badgeContent={notifications.length == 9 ? "9+" : notifications.length} color={"secondary"}>
                        <i onClick={() => {
                            setNotificationDropdown(prevState =>!prevState);
                            setNavOverlay(false);
                        }} className={`fa${notificationDropdown ? "s" : "r"} fa-bell navbar-notifications`}></i> 
                    </Badge>
                :
                (!notifications || !notifications.length) &&
                     <i onClick={() => {
                         setNotificationDropdown(prevState =>!prevState);
                         setNavOverlay(false);
                    }} className={`fa${notificationDropdown ? "s" : "r"} fa-bell navbar-notifications`}></i> 
                }
               
                {currentUserInfo && currentUserInfo.mainInfo.pfp ? <img onClick={handleMyListing} className="navbar-profile" src={currentUserInfo.mainInfo.pfp} alt=""></img> :  <div onClick={handleMyListing} className="navbar-profile"></div>}
                {currentUserInfo && <p onClick={handleMyListing} className="navbar-name">{currentUserInfo.mainInfo.username}</p>}
               
                  <motion.i onClick={() => setIsDropdownActive(prevState =>!prevState)} animate={isDropdownActive ? {rotate: -180}: ""} initial={{rotate:0}} transition={{duration: 0.4}}  tabIndex={0} className="fas fa-chevron-down navbar-dropdown-icon"></motion.i> 
 
               <Dropdown  className="main-header-dropdown" open={isDropdownActive} setOpen={setIsDropdownActive}>
                <ul className="dropdown-list">
                    <li onClick={() => router.push("/edit-profile")} className="list-item"> <i className="fas fa-pen item-icon"></i> Upravit účet</li>
                    <li onClick={handleMyListing}  className="list-item"><i className="fas fa-home item-icon"></i> Můj inzerát</li>
                    <li onClick={() => router.push("/friends")}  className="list-item"><i className="fas fa-users item-icon"></i> Přátelé</li>
                    <li onClick={() => router.push("/requests/recieved")}  className="list-item"><i className="fas fa-envelope item-icon"></i> Žádosti</li>
                    <li> <i className="fas fa-heart"></i> Oblíbené</li>
                    <li onClick={() => handleLogOut()} className="list-item" style={{color: "red"}}><i className="fas fa-sign-out-alt item-icon"></i> Odhlásit</li>
                </ul>
               </Dropdown>
               <Dropdown open={notificationDropdown} setOpen={setNotificationDropdown}>
                   <ul className="notifications-dropdown">
                      {notifications ? 
                      <>
                      {Object.keys(notifications).length > 0 ?
                      Object.keys(notifications).map((not,id) => (
                          <li key={id} onClick={() => notifications[not].type === "recievedRequest" ? router.push("/requests/recieved") : router.push("/friends")}> {notifications[not].message}</li>
                      ))
                      :
                      <li>Žádná oznámení</li>
                        }
                      </>
                      :
                      <li  className="dropdown-loading"><CircularProgress/></li>
                      
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
            
        <i onClick={() => setNavOverlay(!navOverlay)} className={`fas fa-${navOverlay ? "times" : "bars"} hamburger`}></i>
        
          
        </header>
    )
}

export default Header
