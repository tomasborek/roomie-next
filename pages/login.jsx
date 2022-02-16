import React, {useEffect} from 'react';
//next
import Link from "next/link"
import Head from "next/head";
import { useRouter } from 'next/router';

//Components
import LoginBox from '../components/LoginBox/LoginBox';
//Context
import { useAuth } from '../contexts/AuthContext';
import { useLoading } from '../contexts/LoadingContext';

const Login = () => {
    const {currentUser} = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useLoading();
    useEffect(() => {
        if(currentUser && !loading){
            router.push("/explore/flatmates");
        }
    }, [currentUser])
    return (
        <>
        <Head>
            {/* Primary meta tags */}
            <title>Přihlásit se | Roomie</title>
            <meta name="title" content="Přihlásit se | Roomie" />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:title" content="Přihlásit se | Roomie" />
            <meta property="og:url" content="https://roomie.cz/login"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:title" content="Přihlásit se | Roomie" />
            <meta property="twitter:url" content="https://roomie.cz/login"></meta>
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