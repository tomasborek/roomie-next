import React from 'react'
//next
import Link from "next/link"
import Head from "next/head";

//Components
import LoginBox from '../components/LoginBox/LoginBox'

const Login = () => {
    return (
        <>
        <Head>
            <title>Přihlásit se | Roomie</title>
        </Head>
        <div className="Login">
            <Link href="/"><i className="step-back fas fa-chevron-left"></i></Link>
            <div className="blue-overlay"></div>
            <div className="login-content">
                <LoginBox />
            </div>
            
        </div>
        </>
    )
}

export default Login