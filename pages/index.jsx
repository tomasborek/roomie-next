import React, {useEffect, useRef, useState} from "react";
//next
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router';
//COntexts
import { useAuth } from '../contexts/AuthContext';

//Components
import HomeHeader from '../components/HomeHeader/HomeHeader';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
//MUI
import ContactForm from "../components/ContactForm/ContactForm";


export default function Home() {
    //Contexts
    const router = useRouter();
    const {currentUser} = useAuth();
    //State
    const [contactForm, setContactForm] = useState(false);
    //Refs
    const videoRef = useRef();
    

    
   
  return (
    <>
    <Head>
      <title>Roomie - portál pro hledání spolubydlení</title>
    </Head>

    <div className="Home">
            <HomeHeader />
            <Banner />
            <ContactForm open={contactForm} setOpen={setContactForm}/>
           
           <div className="mid-container">
                <section className="home-section section-left">
                    <div className="section-image">
                        <img src="/img/home/home-panels.png" alt="" />
                    </div>
                    
                    <div className="section-content">
                        <div className="content-text">
                            <h1>Hledáte spolubydlící?</h1>
                            <h2>Váš čas je drahocenný, hledejte proto spolubydlení s námi. Stačí si založit profil a my se postaráme, abyste našli nejen skvělé spolubydlící, ale i někoho, s kým si zkrátka budete rozumět.</h2>
                        </div>
                        <button onClick={() => videoRef.current.scrollIntoView()} className="section-btn main-btn">Jak funguje Roomie?</button>
                    </div>
                </section>
            </div>
            <div className="home-premium-banner">
                <div className="mid-container">
                    <div className="banner-text">
                        <h1>Premium profil přináší spoustu výhod!</h1>
                        <h2>Pomocí premium profilu všichni poznají legitimitu vašeho profilu. Bude se zobrazovat na prvních příčkách, a to zároveň s odznakem důvěryhodnosti, který výrazně ušetří váš čas.</h2>
                        <button onClick={() =>{ 
                            router.push("/premium");
                            window.scrollTo(0,0);
                        }} className="acc-btn">Přidat se do rodiny Roomie</button>
                    </div>
                    <div className="banner-imgs">
                        <div className="banner-guy-container">
                            <img className="banner-guy" src="/img/home/premium-banner-guy.png" />
                        </div>
                        <img className="banner-medal" src="/img/home/premium-medal.png" alt="" />
                    </div>
                </div>    
            </div>
            
            <div className="mid-container">           
                <section className="home-section section-left">
                    <div className="section-image">
                        <img src="/img/home/mailbox.png" alt="" />
                    </div>
                    
                    <div className="section-content">
                        <div className="content-text">
                            <h1>Potřebujete poradit?</h1>
                            <h2>Máte potíže s Roomie, nebo nám chcete jen dát tip na případná vylepšení? Neváhejte nás kontaktovat tlačítkem níže.</h2>
                        </div>
                        <button onClick={() => setContactForm(true)} className="section-btn main-btn">Kontaktovat Roomie!</button>
                    </div>
                </section>
                <video ref={videoRef} className="home-video" poster="/video/thumbnail.png" controls>
                    <source  src="/video/Sequence 01_1 (1).mp4"/>
                </video>
            </div>
               
           <Footer />
        </div>
    </>
  )
}
