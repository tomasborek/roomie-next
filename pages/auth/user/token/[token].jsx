import React,{useState, useEffect} from 'react'
//Next
import { useRouter } from 'next/router'
import Head from 'next/head';
//Contexts
import { useFunctions } from '../../../../contexts/FunctionsContext';
//Components
//MUI
import CircularProgress from '@mui/material/CircularProgress';

const VerifyEmail = () => {
    const {callable} = useFunctions();
    const verifyToken = callable("emailVerification-verifyToken");
    const router = useRouter();
    const {token} = router.query;
    // State
    const [isVerified, setIsVerified] = useState(false);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        if(router.isReady){

            verifyToken(JSON.stringify({token: token})).then((response) => {
                setIsVerified(true);
            }).catch((error) => {
                setFailed(true);
            })
        }
    }, [router.isReady])
    return (
        <>
            <Head>
                <title>Ověřit e-mail | Roomie</title>
            </Head>
            <div className='VerifyEmail'>
                <img src="/img/logos/logo-small.png"/>
                <h2>Roomie.cz</h2>
                {(!isVerified && !failed) ? <> <h3>Prosím vyčkejte...</h3> <CircularProgress/> </> : isVerified ? <h3>Váš e-mail byl ověřen</h3> : failed ? <h3>Něco se nepodařilo.</h3> : ""}
            </div>
        </>
    )
}

export default VerifyEmail
