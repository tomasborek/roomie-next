import React from 'react'
//Layout
import Requests from '../../components/Requests/Requests'
//COmponents
import ReqFeed from '../../components/ReqFeed/ReqFeed'

const SentRequests = () => {
    return (
        <Requests>
            <ReqFeed type="sent"/>
        </Requests>
    )
}

export default SentRequests
