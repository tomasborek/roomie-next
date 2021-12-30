import React  from 'react';
//Layout
import Requests from '../../components/Requests/Requests';
//next
import Head from "next/head";
//COmponents
import ReqFeed from '../../components/ReqFeed/ReqFeed';
// Context

const RecievedRequests = () => {
    return (
        <>
            <Head>
                <title>Příchozí žádosti | Roomie</title>
            </Head>
            <Requests>
                <ReqFeed type="recieved"/>
            </Requests>
        </>
    )
}

export default RecievedRequests
