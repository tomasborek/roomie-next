import React from 'react'
//next
import Link from "next/link";
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="mid-container">
                <div className="footer-section about-section">
                    <p className="section-header">Roomie</p>
                    <p className="section-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras elementum. </p>
                </div>
                <div className="footer-section links-section">
                    <p className="section-header">Důležité odkazy</p>
                    <p className="section-description">
                        <ul>
                            <li><Link href="/login">Přihlásit se</Link></li>
                            <li><Link href="/login">Registrovat</Link></li>
                            <li><Link href="/login">Smluvní podmínk</Link></li>
                            <li><Link href="/login">Premium</Link></li>
                        </ul>
                    </p>
                </div>

                <div className="footer-section connect-section">
                    <p className="section-header">Spojte se s námi:</p>
                    <div className="section-description">
                        <div className="description-icons">
                            <FontAwesomeIcon className="icons-icon" icon={faInstagram}/> 
                            <FontAwesomeIcon className="icons-icon" icon={faFacebook}/> 
                            <FontAwesomeIcon className="icons-icon" icon={faEnvelope}/> 
                        </div>
                        <Link href="/">Kontaktujte nás...</Link>
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; Roomie 2021
            </div>
        </footer>
    )
}

export default Footer
