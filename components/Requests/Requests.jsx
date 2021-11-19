import React from 'react'
import { useRouter } from 'next/dist/client/router';

//Components
import Header from '../../components/Header/Header'

const Requests = ({children}) => {
    //Variables---
    //Contexts
    const router = useRouter();
    return (
        <div className="Requests">
            <Header variant="white" />
            <div className="requests-banner"></div>
            <div className="container">
                <div className="requests-content">
                    <h2 className="content-heading">Žádosti</h2>

                    <ul className="content-nav">
                        <li onClick={() => router.push("/requests/recieved")} className={`nav-link ${router.pathname === "/requests/recieved" && "active"}`}>Příchozí</li>
                        <li onClick={() => router.push("/requests/sent")} className={`nav-link ${router.pathname === "/requests/sent" && "active"}`}>Odeslané</li>
                    </ul>
                    <div className="content-requests">
                        {children}
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default Requests
