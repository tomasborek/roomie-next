import React, {useEffect, useState} from "react";
//next
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router';
//COntexts
import { useAuth } from '../contexts/AuthContext';

//Components
import HomeHeader from '../components/HomeHeader/HomeHeader';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';


export default function Home() {
    //Contexts
    const router = useRouter();
    const {currentUser} = useAuth();
   
  return (
    <>
    <Head>
      <title>Roomie</title>
    </Head>

    <div className="Home">
            <HomeHeader />
            <Banner />
           
           <div className="mid-container">
                <section className="home-section section-left">
                    <div className="section-image">
                        <Image
                        alt={"Roomie inzeráty"}
                        src={"/img/home/home-panels.png"}
                        width={513}
                        height={415}
                        priority
                        />
                    </div>
                    
                    <div className="section-content">
                        <div className="content-text">
                            <h1>Hledáte spolubydlící?</h1>
                            <h2>Šetřete svůj čas a hledejte s námi. Spolubydlící by neměl být jen člověk, se kterým sdílíte domácnost, ale i někdo, s kým si budete rozumět. Výběr je na vás.</h2>
                        </div>
                        <button className="section-btn main-btn">Jak funguje Roomie?</button>
                    </div>
                </section>
            </div>
            <div className="home-premium-banner">
                <div className="mid-container">
                    <div className="banner-text">
                        <h1>S prémium profilem jde vše lépe!</h1>
                        <h2>Pomocí premium profilu všichni poznají legitimitu vašeho profilu. Bude se zobrazovat na prvních příčkách, a to zároveň s odznakem důvěryhodnosti, který výrázně ušetří váš čas.</h2>
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
                        <Image
                            alt={"Roomie inzeráty"}
                            src={"/img/home/mailbox.png"}
                            width={400}
                            height={400}
                            priority
                            />
                    </div>
                    
                    <div className="section-content">
                        <div className="content-text">
                            <h1>Potřebujete poradit?</h1>
                            <h2>Máte potíže s Roomie, nebo nám chcete jen dát tip na případná vylepšení? Neváhejte nás kontaktovat tlačítkem níže.</h2>
                        </div>
                        <button onClick={() => setIsModalActive(true)} className="section-btn main-btn">Kontaktovat Roomie!</button>
                    </div>
                </section>
               <div className="home-video"></div>
            </div>
               
           <Footer />
        </div>
    </>
  )
}
