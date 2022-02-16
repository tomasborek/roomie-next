import React, {useEffect, useRef, useState} from "react";
//next
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router';
import Image from "next/image";
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
       {/* Primary meta tags */}
      <title>Roomie - portál pro hledání spolubydlení</title>
    <meta name="title" content="Roomie - portál pro hledání spolubydlících" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="Roomie - portál pro hledání spolubydlících" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:title" content="Roomie - portál pro hledání spolubydlících" />
    </Head>

    <div className="Home">
            <HomeHeader />
            <Banner />
            <ContactForm open={contactForm} setOpen={setContactForm}/>
           
           <div className="mid-container">
                <section className="home-section section-left">
                    <div className="section-image">
                        <Image alt="Hledáta spolubydlící?" src="/img/home/home-panels.png" layout="responsive" width={513} height={415} priority/>
                    </div>
                    
                    <div className="section-content">
                        <div className="content-text">
                            <h2 className="text-main">Hledáte spolubydlící?</h2>
                            <h3 className="text-description">Váš čas je drahocenný, hledejte proto spolubydlení s námi. Stačí si založit profil a my se postaráme, abyste našli nejen skvělé spolubydlící, ale i někoho, s kým si zkrátka budete rozumět.</h3>
                        </div>
                        <button onClick={() => videoRef.current.scrollIntoView()} className="section-btn main-btn">Jak funguje Roomie?</button>
                    </div>
                </section>
            </div>
            <div className="home-about-banner">
                <div className="mid-container">
                    <div className="banner-text">
                        <h2 className="text-main">Co je Roomie a kdo za projektem stojí?</h2>
                        <h3 className="text-description">Chcete se ještě před puštěním do akce dozvědět více o Roomie a jak tento projekt vznikl? Přečtěte si něco o naší motivaci a co je naším cílem.</h3>
                        <button onClick={() =>{ 
                            router.push("/about");
                            window.scrollTo(0,0, {behavior: "smooth"});
                        }} className="acc-btn">Více o Roomie!</button>
                    </div>
                    <div className="banner-img">
                        <div className="img-img">
                            <Image alt="Co je Roomie?" src={"/img/home/zarovka.png"} layout="responsive" width={275} height={416}></Image>
                        </div>
                    </div>
                </div>    
            </div>
            
            <div className="mid-container">           
                <video ref={videoRef} className="home-video" poster="/video/thumbnail.png" controls>
                    <source  src="/video/Sequence 01_1 (1).mp4"/>
                </video>
                <div className="home-donate">
                    <h1>Líbí se vám projekt Roomie?</h1>
                    <p>Do Roomie vkládáme maximální úsilí a budeme moc rádi, pokud svým příspěvkem projekt podpoříte. Díky vám tak budeme moci pracovat na nových aktualizacích a Roomie vylepšovat.
                    Velmi nás to potěší.</p>
                    <iframe id='kofiframe' src='https://ko-fi.com/roomiecz/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:"none", margin:"0 auto", width:"100%",padding:"32px 0 0 0",background:"#f9f9f9"}} height='712' title='roomiecz'></iframe>
                </div>
            </div>
               
           <Footer />
        </div>
    </>
  )
}
