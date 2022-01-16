import React from 'react';
//Layout
import PageFeedLayout from '../../components/PageFeedLayout/PageFeedLayout';
//next
import Head from "next/head";
import { useRouter } from 'next/router';
//COmponents
import ReqFeed from '../../components/ReqFeed/ReqFeed';
// Context


const SentRequests = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Odeslané žádosti | Roomie</title>
            </Head>
            <PageFeedLayout heading={"Žádosti"}>
                    <ul className="content-nav">
                        <li onClick={() => router.push("/requests/recieved")} className={`nav-link ${router.pathname === "/requests/recieved" && "active"}`}>Příchozí</li>
                        <li onClick={() => router.push("/requests/sent")} className={`nav-link ${router.pathname === "/requests/sent" && "active"}`}>Odeslané</li>
                    </ul>
                    <div className="content-feed">
                        <ReqFeed type="sent"/>
                    </div>
            </PageFeedLayout>
        </>
    )
}

export default SentRequests
