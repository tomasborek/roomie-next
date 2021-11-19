import React from 'react'
//Framer motion
import {motion} from "framer-motion";
//Contexts
import { useLoading } from '../../contexts/LoadingContext'

//Components
//MUI components
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingOverlay = () => {
    const [loading, setLoading] = useLoading();
    return (
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
    )
}

export default LoadingOverlay
