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
            {/* Primary meta tags */}
            <title>Registrace | Roomie</title>
            <meta name="title" content="Registrace | Roomie" />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:title" content="Registrace | Roomie" />
            <meta property="og:url" content="https://roomie.cz/obchodni-podminky"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:title" content="Registrace | Roomie" />
            <meta property="twitter:url" content="https://roomie.cz/register"></meta>
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
