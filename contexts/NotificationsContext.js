import React,{useState, createContext, useContext, useEffect} from 'react'
import {db} from "../Firebase";
import { onSnapshot, collection } from 'firebase/firestore';
//COntexts
import { useAuth } from './AuthContext';
import { useDb } from './DbContext';



const NotificationsContext = createContext();
export const useNotifications = () => {
    return useContext(NotificationsContext);
}

export const NotificationsProvider = ({children}) => {
    const {currentUser} = useAuth();
    const {getNotifications} = useDb();
    const [notifications, setNotifications] = useState(null);
    useEffect(() => {
        if(currentUser){
            let newNotifications = [];
           getNotifications(currentUser.uid)
           .then((docs) => {
                docs.docs.forEach(doc => {
                    newNotifications.push(doc.data());
                })
                setNotifications(newNotifications);
           })
        }else{
            setNotifications(null);
        }
    }, [currentUser])
  
    return (
        <NotificationsContext.Provider value={[notifications, setNotifications]}>
            {children}
        </NotificationsContext.Provider>
    )
}


