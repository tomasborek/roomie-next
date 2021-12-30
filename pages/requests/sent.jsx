import React, {useEffect} from 'react';
//Layout
import Requests from '../../components/Requests/Requests';
//next
import { useRouter } from 'next/router';
import Head from "next/head";
//COmponents
import ReqFeed from '../../components/ReqFeed/ReqFeed';
// Context
import { useAuth } from '../../contexts/AuthContext';

const SentRequests = () => {
    const {currentUser} = useAuth();
    const router = useRouter();
    useEffect(() => {
        if(!currentUser){
            router.back();
        }
    }, [currentUser])
    return (
        <>
            <Head>
                <title>Odeslané žádosti | Roomie</title>
            </Head>
            <Requests>
                <ReqFeed type="sent"/>
            </Requests>
        </>
    )
}

export default SentRequests
