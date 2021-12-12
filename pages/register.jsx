import React from 'react'
//next
import  Link  from 'next/link';
import Head from "next/head";
//Components
import RegisterBox from '../components/RegisterBox/RegisterBox';

const Register = () => {
    return (
        <>
        <Head>
            <title>Registrace | Roomie</title>
        </Head>
        <div className="Register">
            <div className="blue-overlay"></div>
            <Link href="/"><i  className=" step-back fas fa-chevron-left"></i></Link>
            <div className="register-content">
                    <RegisterBox />
            </div>
        </div>
        </>
    )
}

export default Register
