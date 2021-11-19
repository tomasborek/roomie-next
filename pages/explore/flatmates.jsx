import React from 'react'
//Layout
import Explore from '../../components/Explore/Explore'
//Components
import ExploreFeed from '../../components/ExploreFeed/ExploreFeed'

const Flatmates = () => {
    return (
        <>
        <Explore>
            <ExploreFeed variant="flatmate" />
        </Explore>
        </>
    )
}

export default Flatmates
