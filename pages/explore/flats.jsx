import React from 'react'
import Head from "next/head";
//Layout
import Explore from '../../components/Explore/Explore'
//Components
import ExploreFeed from '../../components/ExploreFeed/ExploreFeed'

const Flats = () => {
    return (
        <>
        <Head>
           {/* Primary meta tags */}
           <title>Prohlížet byty | Roomie</title>
            <meta name="title" content="Prohlížet byty | Roomie" />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:title" content="Prohlížet spolubydlící | Roomie" />
            <meta property="og:url" content="https://roomie.cz/explore/flats"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:title" content="Prohlížet byty | Roomie" />
            <meta property="twitter:url" content="https://roomie.cz/explore/flats"></meta>
        </Head>
        <Explore>
            <ExploreFeed variant="flat"/>
        </Explore>
        </>
    )
}

export default Flats
