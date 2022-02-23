import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import FaqSection from "../components/FaqSection/FaqSection";
import Footer from "../components/Footer/Footer";

const faq = () => {
  return (
    <>
      <Head>
        <title>Často kladené dotazy | Roomie</title>
      </Head>
      <div className="faq">
        <Header variant={"white"} />
        <div className="faq-banner">
          <h1>Často kladené otázky</h1>
        </div>
        <div className="container">
          <FaqSection name="Jak se zaregistruji?">
            Postup registrace je jednoduchý, stačí kliknout na{" "}
            <b>registrovat</b> v pravém horním rohu. To vás odkáže do
            registračního formuláře, který prosím vyplňte pravdivě a podle
            vašich preferencí.{" "}
            <b>
              Nezapomeňte si ověřit e-mailovou adresu, jinak váš účet nebude
              vidět!
            </b>{" "}
            Doporučujeme se podívat i do složky SPAM. Po úspěšné registraci
            budete zavedení do prvotní úpravy účtu - tato úprava je důležitá a
            doporučujeme vyplnit co nejvíce informací pro největší zacílení na
            ostatní uživatele.
          </FaqSection>

          <FaqSection name={"Jak funguje Roomie?"}>
            Roomie není klasickou sociální sítí, nemůžete si tedy s uživateli
            psát pomocí našeho webového rozhraní. Potvrzením žádosti však
            získáte přístup k základním kontaktním údajům (e-mail, telefon)
            jiného uživatele. Pokud vám nevyhovuje kontakt skrze telefon či
            e-mailovou adresu, můžete si do profilu přidat sociální sítě jako
            Instagram a Facebook. Poté stačí jen kliknout na ikonu v poli
            kontaktních údajů jiného uživatele, který vaši žádost přijal, nebo
            jemuž jste žádost potvrdili a sdílíte tak vzájemně své kontaktní
            údaje.
          </FaqSection>

          <FaqSection
            name={"Poslal/a jsem uživateli žádost, ale nevidím jeho údaje. "}
          >
            Pokud jste zaslal/a jinému uživateli žádost a stále nevidíte jeho
            kontaktní údaje, pravděpodobně vám ji nepřijal. Je možné, že váš
            inzerát není to pravé, co hledá - nebo ještě vaši žádost nestihl
            schválit.
          </FaqSection>

          <FaqSection
            name={"Jak si přidám do kontaktních údajů sociální sítě?"}
          >
            Vaše soukromí je pro nás důležité, proto veškeré citlivé údaje
            můžete změnit výhradně v nastavení Účtu a soukromí. Stačí kliknout
            na šipku v pravém horním rohu - hned vedle vaší profilové fotky a
            kliknout na Účet a soukromí. Zde můžete vložit odkazy URL na vaše
            sociální sítě a uložit je. Změny se projeví ihned.
          </FaqSection>

          <FaqSection name={"Jak mohu někoho požádat o kontaktní údaje?"}>
            Stačí jít na profil uživatele nebo bytu a kliknout na tlačítko{" "}
            <b>Poslat žádost.</b>
            Zde vyplníte krátkou zprávu, kterou uživatel obdrží, a podle které
            se rozhodne, zda žádost potvrdí. O přijetí vaší žádosti budete
            informování. Poté uvidíte uživatelovi kontaktní údaje a můžete s ním
            navázat spojení.
          </FaqSection>

          <FaqSection name={"Dá se na Roomie chatovat?"}>
            Na webovém rozhraní Roomie <b>není možné chatovat</b> a současně
            taková funkce není dostupná. Podstatou Roomie je, že získáte přehled
            o kontaktních údajích uživatele a můžete jej kontaktovat na
            zvolených kanálech jako je e-mailová adresa, telefon, Instagram nebo
            Facebook. Tyto informace se vám odemknou po potvrzení žádosti o
            přátelství.
          </FaqSection>

          <FaqSection
            name={
              "Nechci aby bylo vidět mé telefonní číslo nebo e-mail, co teď?"
            }
          >
            Zda ostatním zobrazíte telefonní číslo nebo e-mailovou adresu je
            pouze na vás. Vždy je ale nutné ponechat alespoň jednu možnost, aby
            vás protějšek mohl kontaktovat. Stačí kliknout na šipku v pravém
            horním rohu - hned vedle vaší profilové fotky a kliknout na Účet a
            soukromí. U kolonek E-mail a Tel. číslo se nachází symbol oka,
            kterým můžete daný kontaktní údaj deaktivovat. (je-li zašedlý, je
            deaktivován).
          </FaqSection>

          <FaqSection name={"Jak si mohu smazat účet na Roomie?"}>
            Účet na Roomie si můžete smazat nebo deaktivovat. Pokud jste již pro
            své účely Roomie využili, můžete v Nastavení Účtu a soukromí profil
            smazat či deaktivovat. Při dočasném deaktivování vaše údaje uchováme
            po 12 měsíců, pokud se rozhodnete účet smazat, přijdete o celkový
            přístup a žádná data nebudou uchována. Pokud byste tedy chtěli
            Roomie v budoucnu využít, bude nutná nová registrace.
          </FaqSection>

          <FaqSection name={"Zapomněl/a jsem heslo, jak si ho mohu obnovit?"}>
            Obnova hesla je jednoduchá. Stačí při přihlašování kliknout na
            Zapomenuté heslo a vyplnit e-mailovou adresu, kterou jste použili
            při registraci. Poté se řiďte instrukcemi zaslanými na vaši
            e-mailovou adresu.
          </FaqSection>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default faq;
