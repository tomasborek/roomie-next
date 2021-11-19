import React from 'react'
//Layout
import Requests from '../../components/Requests/Requests'
//COmponents
import ReqFeed from '../../components/ReqFeed/ReqFeed'

const RecievedRequests = () => {
    return (
        <Requests>
            <ReqFeed type="recieved"/>
        </Requests>
    )
}

export default RecievedRequests
