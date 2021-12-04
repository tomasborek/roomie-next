import React, {useEffect, useState} from 'react'
//COntexts
import { useAuth } from '../contexts/AuthContext';
import { useDb } from '../contexts/DbContext';

//Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Friends = () => {
    //Variables
    const {currentUser} = useAuth();
    const {getUser, getFriends} = useDb();
    const [friends, setFriends] = useState(null);

    useEffect(() => {
        if(currentUser){
            let friendsArray = [];
            getFriends(currentUser.uid)
            .then(docs => {
                docs.forEach(doc => {
                    friendsArray = [...friendsArray, {[doc.id]: doc.data()}];
                })
                setFriends(friendsArray);
            })
        }
    }, [currentUser])
    return (
        <div className="Friends">
            <Header variant="white"/>
            <div className="friends-banner"></div>
            <div className="container">
                <div className="friends-content">
                    <h2 className="content-heading">Přátelé</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Friends
