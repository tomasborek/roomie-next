import Image from 'next/image';
import React, {useState} from 'react';
//Components
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import AboutSection from '../components/AboutSection/AboutSection';
import ContactForm from "../components/ContactForm/ContactForm";

const about = () => {
    const [contactForm, setContactForm] = useState(false);
  return (
    <div className='about'>
        <ContactForm open={contactForm} setOpen={setContactForm}/>
        <Header variant={"white"}/>
        <div className="about-banner">
            <h1>Co je Roomie?</h1>
        </div>
        <div className="about-content">
            <AboutSection heading={"Začátek projektu"} image={"/img/about/puzzle.png"} x={506} y={182}>
                Krize bydlení, byty a jejich přemrštěné ceny. Nespočet inzerátů na Facebooku a dva studenti, 
                    kteří tuto situaci vnímají za kritickou. Tak se seznámil Pavel a Tomáš.
                    Během pár dlouhých dnů jsme v Covidem omezených kavárnách probrali naše vzájemné zkušenosti s hledáním dostupného bydlení, kdy studenti prochází množstvím nabídek, 
                    ze kterých vyselektují minimum, které si však ani ve finále nemohou dovolit. Tímto procesem však ani zdaleka neprocházejí jen studenti, ale i pracující, 
                    kteří svou kariéru teprv započali a nemají v kasičce tolik peněz na pronájem samostatného bydlení. Rozhodli jsme se tak vytvořit moderní platformu, 
                    na které se budou setkávat lidi hledající či nabízející spolubydlení.
                </AboutSection>
            <AboutSection heading={"Co si od Roomie slibujeme?"} image={"/img/about/guy.png"} left x={407} y={360}>
                    Naší vizí je vytvořit moderní platformu, která bude intuitivní pro všechny věkové kategorie a pomůže lidem vyhledat vysněné a ideální
                    spolubydlení. Věříme v to, že máte stoprocentní nárok na to, vybrat si s kým budete bydlet. Sdílení domácnosti tak nemusí být jen nutnost, ale i 
                    zábava a potkávání nových zajímavých lidí. Vyhledejte ideální byt, nebo ideálního spolubydlícího a kontakujte ho jednoduše pomocí uvedených kontaktních metod. 
                    Do budoucna plánujeme spoustu užitečných aktualizací, které používání Roomie vylepší, a vy tak ideálního spolubydlícího najdete ještě dříve a efektivněji. 
            </AboutSection>
            <AboutSection heading={"Spolubydlení jako cesta z krize?"} image={"/img/about/house.png"} x={555} y={300}>
            Krize bydlení je stále větší a koleje stále více zaplněné.  Spoustu lidí tak hledá řešení ve spolubydlení. Jako jediný moderní český portál pro
            obyvatele vyhledávající spolubydlení věříme, že dokážeme lidem pomoci hledat efektivně. Nedostatek dostupných bytů pro mladé, pracujicí i studující,
            se výrazně zvyšuje. Pro rok 2022 se odhaduje průměrný růst nájmů až o 20 %. V ostatních velkých městech až o 10 %. Prozatimním řešením tedy může být spolubydlení,
            zejména pro studenty. Roomie usnadňuje hledání spolubydlení a propojuje uživatele podle jejich preferencí. Každý má právo si vybrat. 
            </AboutSection>
            <div className="mid-container">
                <section className="about-help-section">
                    <div className="section-image">
                        <Image src="/img/home/mailbox.png" layout='fill' objectFit='cover' />
                    </div>
                    <div className="section-content">
                        <div className="content-text">
                            <h1>Potřebujete poradit?</h1>
                            <h2>Máte potíže s Roomie, nebo nám chcete jen dát tip na případná vylepšení? Neváhejte nás kontaktovat tlačítkem níže.</h2>
                        </div>
                        <button onClick={() => setContactForm(true)} className="section-btn main-btn">Kontaktovat Roomie!</button>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default about;
