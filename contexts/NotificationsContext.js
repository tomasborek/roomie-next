import React,{useState, createContext, useContext} from 'react'
const NotificationsContext = createContext();
export const useNotifications = () => {
    return useContext(NotificationsContext);
}

export const NotificationsProvider = ({children}) => {
    const [notifications, setNotifications] = useState(null);
    return (
        <NotificationsContext.Provider value={[notifications, setNotifications]}>
            {children}
        </NotificationsContext.Provider>
    )
}


