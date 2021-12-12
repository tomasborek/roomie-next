import React, {useEffect, useState} from 'react'
//next
import { useRouter } from 'next/router';
//COntexts
import { useAuth } from '../contexts/AuthContext';
import { useDb } from '../contexts/DbContext';

//Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Friend from '../components/Friend/Friend';
//MUI
import { CircularProgress } from '@mui/material';

const Friends = () => {
    //Variables
    const {currentUser} = useAuth();
    const {getUser, getFriends} = useDb();
    const [friends, setFriends] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if(currentUser){
            let friendsObject = {};
            getFriends(currentUser.uid)
            .then(docs => {
                docs.forEach(doc => {
                    friendsObject = {...friendsObject, [doc.id]: doc.data()};
                })
                setFriends(friendsObject);
    
            })
        }
    }, [currentUser])

    useEffect(() => {
        if(!currentUser){
            router.back();
        }
    }, [currentUser])
    return (
        <div className="Friends">
            <Header variant="white"/>
            <div className="friends-banner"></div>
            <div className="container">
                <div className="friends-content">
                    <h2 className="content-heading">Přátelé</h2>
                    {friends ?
                    <>
                        {Object.keys(friends).length > 0 ?
                            <div className="content-list">
                            {Object.keys(friends).map((friend, id) => (
                                <Friend key={id} info={friends[friend]}>{friends[friend].username}</Friend>
                            ))}
                            </div>
                        :
                        <div className="content-empty">
                            <img src="/img/bad-results/notfound.png" />
                            <p className="empty-description">Dosud nemáte žádné přátele.</p>
                        </div>
                        
                        }
                    </>
                    
                :
                <div className="content-loading">
                    <CircularProgress/>
                </div>
                    }
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Friends
