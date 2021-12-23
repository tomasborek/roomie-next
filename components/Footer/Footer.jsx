import React from 'react'
//next
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="mid-container">
                <div className="footer-section about-section">
                    <p className="section-header">Roomie</p>
                    <p className="section-description">     
                        Portál Roomie se zaměřuje na zprostředkování moderní platformy pro hledání spolubydlících či bytů ke spolubydlení. Hledejte 
                        spolubydlení a spolubydlící jednoduše a podle vašich představ. Jsme sociální sítí pro spolubydlení.
                    </p>
                </div>
                <div className="footer-section links-section">
                    <p className="section-header">Důležité odkazy</p>
                    <div className="section-description">
                        <ul>
                            <li><Link href="/login">Přihlásit se</Link></li>
                            <li><Link href="/register">Registrovat</Link></li>
                            <li><Link href="/404">Smluvní podmínky</Link></li>
                            <li><Link href="/premium">Premium</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-section connect-section">
                    <p className="section-header">Spojte se s námi:</p>
                    <div className="section-description">
                        <div className="description-icons">
                            <i className="fab fa-instagram icons-icon"></i>
                            <i className="fab fa-facebook icons-icon"></i>
                            <i className="fas fa-envelope icons-icon"></i>
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
