import React from 'react'
//Components
import Footer from "../Footer/Footer";
import Header from '../Header/Header';
import SubHeader from "../SubHeader/SubHeader";

const Explore = ({children}) => {
    return (
        <div className="Explore">
        <Header variant="gradient" />
        
        <SubHeader />

        <div className="container">
            {children}
        </div>

        <Footer />
    </div>
    )
}

export default Explore
