import React from 'react'
import {AuthProvider} from "../../contexts/AuthContext";
import {DbProvider} from "../../contexts/DbContext";
import { LoadingProvider } from "../../contexts/LoadingContext";
import {NavOverlayProvider} from "../../contexts/NavOverlayContext";
import { RegisterProvider } from '../../contexts/RegisterContext';
//use Contexts
import { useSnackBar } from '../../contexts/SnackBarContext';
import { useLoading } from '../../contexts/LoadingContext';
//Components
import NavOverlay from '../NavOverlay/NavOverlay';
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import {Snackbar, Alert} from "@mui/material"
//MUI



const Layout = ({children}) => {
    const {isSnackBarOpen, snackBarSeverity, snackBarMsg} = useSnackBar();
    const [loading, setLoading] = useLoading();
    return (
        <>
        <LoadingProvider>
            <DbProvider>
                <AuthProvider>
                    <NavOverlayProvider>
                        <RegisterProvider>
                            <NavOverlay></NavOverlay>
                            <LoadingOverlay/>
                            <Snackbar open={isSnackBarOpen}><Alert sx={{width: "100%"}} severity={snackBarSeverity}>{snackBarMsg}</Alert></Snackbar>
                            {children}
                        </RegisterProvider>
                    </NavOverlayProvider>
                </AuthProvider>
            </DbProvider>   
        </LoadingProvider>         
        </>
    )
}

export default Layout
