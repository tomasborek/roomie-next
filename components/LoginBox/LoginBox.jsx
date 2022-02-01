import React, { useRef, useState } from 'react'
//next
import {useRouter} from "next/router";
import Link from "next/link";
//Contexts
import { useAuth } from '../../contexts/AuthContext'  ;  
import {useLoading} from "../../contexts/LoadingContext";
import { useFunctions } from '../../contexts/FunctionsContext';
import { useSnackBar } from '../../contexts/SnackBarContext';
//MUI
import {Dialog, DialogContent} from "@mui/material"

//Components
//MUI components
import Alert from "@mui/material/Alert";

const LoginBox = () => {
    //State
    const [error, setError] = useState(null);
    const [resetPasswordDialog, setResetPasswordDialog] = useState(false);
    //Context variables
    const {logIn} = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useLoading();
    const {callable} = useFunctions();
    const {snackBar} = useSnackBar();
    //Refs
    const emailRef = useRef();
    const passwordRef = useRef();
    const resetPasswordEmailRef = useRef();
    //Callable
    const resetPasswordEmail = callable("userUpdates-resetPasswordEmail");
    //Functions
    const handleLogin = () => {
        setLoading(true);
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value;
        logIn(email, password)
        .then(user => {
            router.push("/explore/flats");
            setLoading(false);
        })
        .catch(error =>{
            setError("Nelze se přihlásit.");
            setLoading(false);
            console.log(error.message);
        })
    }

    const handleResetPassword = (e) => {
        e.preventDefault();
        setLoading(true);
        setResetPasswordDialog(false);
        resetPasswordEmail(JSON.stringify({email: resetPasswordEmailRef.current.value.trim()})).then((response) => {
            setLoading(false);
            snackBar("Email byl zaslán", "success");
        }).catch((error) => {
            setLoading(false);
            snackBar("Něco se nepovedlo", "error");
            setResetPasswordDialog(true);
        })
    }
    return (
        <div className="login-box">
            <Dialog open={resetPasswordDialog}>
                <DialogContent>
                    <form className="dialog-reset-password">
                        <h2 className='dialog-heading'>Zapomentué heslo</h2>
                        <input ref={resetPasswordEmailRef} placeholder='E-mail...' className='dialog-input' type="text" />
                        <button onClick={(e) => handleResetPassword(e)} className='btn'>Poslat e-mail</button>
                    </form>
                </DialogContent>
            </Dialog>
            {error && <Alert variant="filled" severity="error" sx={{width: "100%", marginBottom: "1rem"}}>{error}</Alert>} 
            <h1>Rádi Vás tu zase vidíme</h1>
            <h2>Přihlašte se</h2>
            <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input maxLength={30} ref={emailRef} type="text" placeholder="E-mailová schránka" />
            </div>

            <div className="input-box">
                <i className="fas fa-lock"></i>
                <input ref={passwordRef} type="password" placeholder="Heslo pro přihlášení" />
            </div>

           

            <button onClick={() => handleLogin()} className="acc-btn">Přihlásit</button>
            <p className="box-register-link">Ještě nemáte účet? <Link href="/register">Registrujte se.</Link></p>
            <a onClick={() => setResetPasswordDialog(true)} className="box-forgot-password-link">Zapomenuté heslo...</a>
        </div>
    )
}

export default LoginBox
