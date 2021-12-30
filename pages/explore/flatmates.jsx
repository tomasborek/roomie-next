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
            <title>Prohlížet spolubydlící | Roomie</title>
        </Head>
        <Explore>
            <ExploreFeed variant="flatmate" />
        </Explore>
        </>
    )
}

export default Flatmates
