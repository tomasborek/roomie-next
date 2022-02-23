import React from "react";
//next
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="mid-container">
        <div className="footer-section about-section">
          <p className="section-header">Roomie</p>
          <p className="section-description">
            Portál Roomie se zaměřuje na zprostředkování moderní platformy pro
            hledání spolubydlících či bytů ke spolubydlení. Hledejte
            spolubydlení a spolubydlící jednoduše a podle vašich představ. Jsme
            sociální sítí pro spolubydlení.
          </p>
        </div>
        <div className="footer-section links-section">
          <p className="section-header">Důležité odkazy</p>
          <div className="section-description">
            <ul>
              <li>
                <Link href="/about">O nás</Link>
              </li>
              <li>
                <Link href="/faq">Často kladené dotazy</Link>
              </li>
              <li>
                <Link href="/zasady-o-soukromi">Poučení o soukromí</Link>
              </li>
              <li>
                <Link href="/obchodni-podminky">Obchodní podmínky</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-section connect-section">
          <p className="section-header">Spojte se s námi:</p>
          <div className="section-description">
            <div className="description-icons">
              <i
                onClick={() =>
                  (window.location.href = "https://instagram.com/roomiecz")
                }
                className="fab fa-instagram icons-icon"
              ></i>
              <i
                onClick={() =>
                  (window.location.href = "https://facebook.com/roomiecz")
                }
                className="fab fa-facebook icons-icon"
              ></i>
              <a href="mailto:roomieback@gmail.com">
                <i className="fas fa-envelope icons-icon"></i>
              </a>
            </div>
            <Link href="/about#contact">Kontaktujte nás...</Link>
          </div>
        </div>
      </div>
      <div className="credits">
        <p>Images attributed to Freepik</p>
      </div>
      <div className="copyright">&copy; Roomie 2022</div>
    </footer>
  );
};

export default Footer;
