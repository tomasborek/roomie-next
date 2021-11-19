import React from 'react';
//next
import Head from 'next/dist/shared/lib/head';

//Components
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';

const Premium = () => {
    return (
        <>
        <Head>
            <title>Premium | Roomie</title>
        </Head>
        <div className="Premium">
            <Header variant="white"/>
            <div className="premium-banner">
                <div className="container">
                    <img src="/img/premium/premium-banner-guy.png" className="banner-img" alt="" />
                    <h1 className="banner-heading">Díváte se už dlouho a stále jste nenašli 
                    vaše vysněné spolubydlení?</h1>
                </div>
            </div>

            <div className="container">
                <div className="premium-shield">
                    <p className="shield-heading">Připojte se do Roomie rodiny a zvyšte vaše šance. </p>
                    <p className="shield-description">Získejte znak důvěryhodnosti a spoustu dalších výhod.</p>
                </div>

                <div className="premium-info-icons">
                    <div className="info-icon">
                        <i className="fas fa-trophy"></i>
                        <p>Zaručíme, že budete 
                        vždy vidět</p>
                    </div>
                    <div className="info-icon">
                        <i className="fas fa-clock"></i>
                        <p>Výrazně urychlíme vaše hledání</p>
                    </div>
                    <div className="info-icon">
                        <i className="fas fa-infinity"></i>
                        <p>Funkce Roomie jsou pro vás neomezené</p>
                    </div>
                </div>
            </div>
            <div className="mid-container">
                <div className="premium-boxes">
                    <div className="boxes-box anon">
                        <h2 className="box-heading">Anonym</h2>
                        <ul className="box-list">
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">K zobrazení pouze první strana inzerátů</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">K zobrazení pouze první strana inzerátů</p></li>
                        </ul>
                    </div>

                    <div className="boxes-box premium">
                        <h2 className="box-heading">Roomie family</h2>
                        <ul className="box-list">
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">Zvýraznění vašeho profilu</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">TOPování vašich inzerátů</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">Neomezené žádosti</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">Hlídací pes</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">Znak důvěryhodnosti</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">“Matching” systém</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">Prioritní podpora</p></li>
                            
                        </ul>
                        <h2 className="box-price">229 Kč</h2>
                        <button className="acc-btn box-btn">Zakoupit</button>
                    </div>

                    <div className="boxes-box user">
                        <h2 className="box-heading">Uživatel</h2>
                        <ul className="box-list">
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">Plná úprava profilu</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">Podpora Roomie</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">Ukládání do oblíbených</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">5 žádostí denně</p></li>
                            <li className="list-item"><i className="fas fa-check item-icon"></i> <p className="item-description">70 inzerátů denně</p></li>
                        </ul>
                        <h2 className="box-price">ZDARMA</h2>
                        <button className="main-btn box-btn">Přihlásit se</button>
                    </div>
                </div>

                <section className="premium-section">
                    <div className="section-text">
                        <h2>Spolubydlení jako cesta z krize?</h2>
                        <p className="text-description">
                             <b>Krize bydlení</b> je stále větší a koleje stále více zaplněné.  Spoustu lidí tak hledá řešení ve <b>spolubydlení</b>. Jako jediný moderní český portál pro obyvatele vyhledávající spolubydlení věříme, že dokážeme lidem pomoci hledat <b>efektivně.</b>
                        </p>
                    </div>
                    <img src="/img/premium/section-img1.png" alt="" className="section-img" />
                </section>

                <section className="premium-section left">
                    <div className="section-text">
                        <h2>Hledání je příliš náročné?</h2>
                        <p className="text-description">
                           <b>Nedostatek dostupných bytů</b> pro mladé, pracujicí i studující, se výrazně zvyšuje. Pro rok 2022 se odhaduje průměrný <b>růst nájmů až o 20 %</b>. V ostatních velkých městech až o 10%. Prozatimním řešením tedy může být spolubydlení, zejména pro studenty. <b>Roomie usnadňuje hledání spolubydlení</b>  a propojuje uživatele podle jejich preferencí. Každý má právo si vybrat. 
                        </p>
                    </div>
                    <img src="/img/premium/section-img2.png" alt="" className="section-img" />
                </section>
            </div>

            <Footer />
        </div>
        </>
    )
}

export default Premium
