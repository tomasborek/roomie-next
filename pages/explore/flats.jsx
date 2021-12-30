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
            <title>Prohlížet byty | Roomie</title>
        </Head>
        <Explore>
            <ExploreFeed variant="flat"/>
        </Explore>
        </>
    )
}

export default Flats
