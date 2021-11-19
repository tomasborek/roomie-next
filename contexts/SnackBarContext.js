import React, {createContext, useContext, useState} from 'react'

const SnackBarContext = createContext();

export const useSnackBar = () => {
    return useContext(SnackBarContext)
}
export function SnackBarProvider(props) {
    const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState("");
    const [snackBarSeverity, setSnackBarSeverity] = useState("");

    const snackBar = (message, severity) => {
        setIsSnackBarOpen(true);
        setSnackBarMsg(message);
        setSnackBarSeverity(severity)
        setTimeout(() => {
            setIsSnackBarOpen(false);
        }, 2000);
    }

    const value = {
        isSnackBarOpen,
        snackBar,
        snackBarMsg,
        snackBarSeverity
    }
    return (
        <SnackBarContext.Provider value={value}>
            {props.children}
        </SnackBarContext.Provider>
    )
}
