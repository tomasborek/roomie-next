import React from 'react';
//Layout
import Requests from '../../components/Requests/Requests';
//next
import Head from "next/head";
//COmponents
import ReqFeed from '../../components/ReqFeed/ReqFeed';
// Context


const SentRequests = () => {
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
