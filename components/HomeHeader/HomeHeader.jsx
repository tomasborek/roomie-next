import React, {useState} from 'react'
//next
import Link from "next/link";

const HomeHeader = () => {
    //State
    const [isNavActive, setIsNavActive] = useState(false);
    return (
        <header className="home-header"> 
            <div className="res-header-view">
                <div className="brand">
                    <div className="brand-logo">
                        <img src="/img/logos/logo-white-small.png" alt="" />
                    </div>
                    <h2>Roomie</h2>
                </div>
                <i onClick={() => setIsNavActive(!isNavActive)} className="hamburger fas fa-bars"></i>
            </div>
        

            <ul className={`navbar ${isNavActive ? "active" : ""}`}>
               <Link href="/login"><li>Přihlásit se</li></Link>
               <Link href="/register"><li>Registrovat</li></Link>
            </ul>
        </header>
    )
}

export default HomeHeader
