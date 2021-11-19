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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <div className="Login">
            <Link href="/"><i className="step-back fas fa-chevron-left"></i></Link>
            <div className="blue-overlay"></div>
            <div className="login-content">
                <div className="mid-container">
                    <LoginBox />
                </div>
                
            </div>
            
        </div>
        </>
    )
}

export default Login