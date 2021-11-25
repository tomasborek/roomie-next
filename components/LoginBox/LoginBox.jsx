import React, { useRef, useState } from 'react'
//next
import {useRouter} from "next/router";
import Link from "next/link";
//Contexts
import { useAuth } from '../../contexts/AuthContext'  ;  
import {useLoading} from "../../contexts/LoadingContext";

//Components
//MUI components
import Alert from "@mui/material/Alert";

const LoginBox = () => {
    //State
    const [error, setError] = useState(null);
    //Context variables
    const {logIn} = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useLoading();
    //Refs
    const emailRef = useRef();
    const passwordRef = useRef();
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
    return (
        <div className="login-box">
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
            <a className="box-forgot-password-link" href="">Zapomenuté heslo...</a>
        </div>
    )
}

export default LoginBox
