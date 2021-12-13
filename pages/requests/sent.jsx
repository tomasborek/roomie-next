import React, {useEffect} from 'react';
//Layout
import Requests from '../../components/Requests/Requests';
//next
import { useRouter } from 'next/router';
//COmponents
import ReqFeed from '../../components/ReqFeed/ReqFeed';
// Context
import { useAuth } from '../../contexts/AuthContext';

const SentRequests = () => {
    const {currentUser} = useAuth();
    const router = useRouter();
    useEffect(() => {
        if(!currentUser){
            router.back();
        }
    }, [currentUser])
    return (
        <Requests>
            <ReqFeed type="sent"/>
        </Requests>
    )
}

export default SentRequests
