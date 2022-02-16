import React from 'react'
//next
import Head from "next/head";
//Layout
import Explore from '../../components/Explore/Explore'
//Components
import ExploreFeed from '../../components/ExploreFeed/ExploreFeed'

const Flatmates = () => {
    return (
        <>
        <Head>
            {/* Primary meta tags */}
            <title>Prohlížet spolubydlící | Roomie</title>
            <meta name="title" content="Prohlížet spolubydlící | Roomie" />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:title" content="Prohlížet spolubydlící | Roomie" />
            <meta property="og:url" content="https://roomie.cz/explore/flatmates"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:title" content="Prohlížet spolubydlící | Roomie" />
            <meta property="twitter:url" content="https://roomie.cz/explore/flatmates"></meta>
        </Head>
        <Explore>
            <ExploreFeed variant="flatmate" />
        </Explore>
        </>
    )
}

export default Flatmates
