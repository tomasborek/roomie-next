import React from 'react'
import { useRouter } from 'next/dist/client/router';

//Components
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";

const PageFeedLayout = ({children, heading}) => {
    //Variables---
    //Contexts
    const router = useRouter();
    return (
        <div className="page-feed-layout">
            <Header variant="white" />
            <div className="layout-banner"></div>
            <div className="container">
                <div className="layout-content">
                    <h2 className="content-heading">{heading}</h2>
                    {children}
                </div>
            </div>
           <Footer />
        </div>
    )
}

export default PageFeedLayout
