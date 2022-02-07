import Image from 'next/image';
import React, {useState} from 'react';
//Components
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import AboutSection from '../components/AboutSection/AboutSection';
import ContactForm from "../components/ContactForm/ContactForm";

const About = () => {
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
                <b>Krize bydlení</b>, byty a jejich přemrštěné ceny. Nespočet inzerátů na Facebooku a dva studenti, 
                    kteří tuto situaci vnímají za kritickou. Tak se seznámil Pavel a Tomáš.
                    Během pár dlouhých dnů jsme v Covidem omezených kavárnách probrali naše vzájemné zkušenosti s <b>hledáním dostupného bydlení</b>, kdy studenti prochází množstvím nabídek, 
                    ze kterých vyselektují minimum, které si však ani ve finále <b>nemohou dovolit</b>. Tímto procesem však ani zdaleka neprocházejí jen studenti, ale i pracující, 
                    kteří svou kariéru teprv započali a nemají v kasičce tolik peněz na <b>pronájem samostatného bydlení</b>. Rozhodli jsme se tak vytvořit moderní platformu, 
                    na které se budou setkávat lidi <b>hledající či nabízející spolubydlení</b>.
                </AboutSection>
            <AboutSection heading={"Co si od Roomie slibujeme?"} image={"/img/about/guy.png"} left x={407} y={360}>
                    Naší vizí je vytvořit <b>moderní platformu</b>, která bude intuitivní pro všechny věkové kategorie a pomůže lidem <b>vyhledat vysněné a ideální
                    spolubydlení</b>. Věříme v to, že máte stoprocentní nárok na to, vybrat si s kým budete bydlet. Sdílení domácnosti tak nemusí být jen nutnost, ale i 
                    zábava a potkávání nových zajímavých lidí. Vyhledejte ideální byt, nebo <b>ideálního spolubydlícího</b> a kontakujte ho jednoduše pomocí uvedených kontaktních metod. 
                    Do budoucna plánujeme spoustu užitečných aktualizací, které používání Roomie vylepší, a vy tak ideálního spolubydlícího najdete ještě dříve a efektivněji. 
            </AboutSection>
            <AboutSection heading={"Spolubydlení jako cesta z krize?"} image={"/img/about/house.png"} x={555} y={300}>
            <b>Krize bydlení</b> je stále větší a koleje stále více zaplněné.  Spoustu lidí tak hledá <b>řešení ve spolubydlení</b>. Jako jediný moderní český portál pro
            obyvatele vyhledávající spolubydlení věříme, že dokážeme lidem pomoci hledat <b>efektivně</b>. Nedostatek dostupných bytů pro mladé, pracujicí i studující,
            se <b>výrazně zvyšuje</b>. Pro rok 2022 se odhaduje průměrný růst nájmů až o 20 %. V ostatních velkých městech až o 10 %. Prozatimním řešením tedy může být <b>spolubydlení,
            zejména pro studenty</b>. Roomie usnadňuje <b>hledání spolubydlení</b> a propojuje uživatele podle jejich preferencí. Každý má právo si vybrat. 
            </AboutSection>
            <div className="mid-container">
                <section className="about-help-section">
                    <div className="section-image">
                        <Image src="/img/home/mailbox.png" layout='responsive' width={454} height={400} />
                    </div>
                    <div className="section-content">
                        <div className="content-text">
                            <h1>Potřebujete poradit?</h1>
                            <h2>Máte potíže s Roomie, nebo nám chcete jen dát tip na případná vylepšení? Neváhejte nás kontaktovat tlačítkem níže.</h2>
                        </div>
                        <button onClick={() => setContactForm(true)} className="section-btn main-btn">Kontaktovat Roomie!</button>
                    </div>
                </section>
                <div className="about-donate">
                    <h1>Líbí se vám projekt Roomie?</h1>
                    <p>Do Roomie vkládáme maximální úsilí a budeme moc rádi, pokud svým příspěvkem projekt podpoříte. Díky vám tak budeme moci pracovat na nových aktualizacích a Roomie vylepšovat.
                    Velmi nás to potěší.</p>
                    <iframe id='kofiframe' src='https://ko-fi.com/roomiecz/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:"none", margin:"0 auto", width:"75%",padding:"32px 0 0 0",background:"#f9f9f9"}} height='712' title='roomiecz'></iframe>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default About;
