import React, {useState} from 'react'
//next
import Head from "next/head";
import Link from "next/link";

//Context
import { useListing } from '../../contexts/ListingContext';

//Components
import Header from '../Header/Header'
import ListingBoxesContainer from "../ListingBoxesContainer/ListingBoxesContainer";
import Footer from "../Footer/Footer";
import ListingAbout from "../../components/Listing/ListingAbout/ListingAbout";
import Gallery from "../../components/Gallery/Gallery";
import ListingDialogs from './ListingDialogs/ListingDialogs';
//Mui components
import {Skeleton, Collapse, Alert} from '@mui/material';
import ListingHeader from './ListingHeader/ListingHeader';
import ListingOpeningBoxes from './ListingOpeningBoxes/ListingOpeningBoxes';






const Listing = () => {
    const {
        type,
        cr,
        listingInfo,
        editListing,
        listingId,
        listingName,
        listingPfp,
        listingImgs,
        listingBio,
        listingFlatBio,
        listingPersonBoxes,
        addedPersonBoxes,
        listingFlatBoxes,
        addedFlatBoxes,
        listingPremium,
        setPersonBoxerOverlay,
        setFlatBoxerOverlay,
        handleSave,
    } = useListing();

    const [flatBoxesInfoAlert, setFlatBoxesInfoAlert] = useState(true);
    const [personBoxesInfoAlert, setPersonBoxesInfoAlert] = useState(true);
    if(type === "flatmate"){
        return (
            <>
            <Head>
                {cr ?
                <title>Vytvořte si vlastní inzerát | Roomie</title>
                :
                <>
                    <title>{listingName} | Roomie</title>
                    <meta name="title" content={`${listingName} | Roomie`} />
                    <meta property="og:title" content={`${listingName} | Roomie`} />
                    <meta property="twitter:title" content={`${listingName} | Roomie`}  />
                </>
                } 
                {listingBio ? 
                <>
                    <meta name='description' content={listingBio}/> 
                    <meta property="og:description" content={listingBio}></meta>
                    <meta property="twitter:description" content={listingBio}></meta>
                </>
                : 
                ""}
                {listingPfp ?
                <>
                    <meta property="og:image" content={listingPfp}/>
                    <meta property="twitter:image" content={listingPfp}/>
                </>
                :
                ""
                }
            </Head>

            <div className="Listing FlatMateListing">
                <ListingDialogs/>
            
                <Header variant="white" />
                <div className="listing-banner"/>
                <div className="listing-content">
                    <ListingHeader/>
                    <div className="mid-container">
                        <div className="content-body">
                            {!cr && 
                                <div className="body-messages">
                                    {(listingInfo && !listingInfo.visible )&&
                                        <div className="messages-message">
                                            <i className="fas fa-info-circle"></i>
                                            <p>
                                                Váš inzerát je nedokončený, prosím dokončete jej 
                                                <Link href={`/cr/${listingInfo.type}/${listingId}`}> zde</Link>
                                            </p> 
                                        </div>
                                    }
                                    {(listingInfo && !listingInfo.userInfo.emailVerified) &&
                                        <div className="messages-message">
                                            <i className="fas fa-info-circle"></i>
                                            <p>
                                                Váš účet není ověřený - pro používání Roomie si jej prosím ověřte pomocí odkazu zaslaného na váš e-mail.
                                            </p> 
                                        </div>
                                    }
                                    {(listingInfo && listingInfo.hiddenByUser) &&
                                    <div className="messages-message">
                                        <i className="fas fa-info-circle"></i>
                                        <p>
                                            Váš účet je skrytý - aby ho mohli uživatelé vidět, zapněte jeho viditelnost v <Link href="/edit-profile">nastavení profilu</Link>.
                                        </p> 
                                    </div>
                                    }
                                </div>
                            }
                            <div className="body-info">
                                <div className="container">
                                    {listingPremium && 
                                        <div className="info-premium-box">
                                            <i className="fas fa-circle-check"></i>
                                            <h3>Premium uživatel</h3>
                                        </div>
                                    
                                    }

                                    <ListingBoxesContainer type="flatmate" addedBoxes={addedPersonBoxes} existingBoxes={listingPersonBoxes} editListing={editListing} />

                                    {cr &&
                                        <Collapse in={personBoxesInfoAlert}>
                                            <Alert sx={{marginTop: "1rem"}} severity="info">Přidejte o sobě info.</Alert>
                                        </Collapse> 
                                    }

                                    {editListing && 
                                        <div className="info-edit-boxes">
                                            <button onClick={() => {
                                                setPersonBoxerOverlay(true)
                                                setPersonBoxesInfoAlert(false);
                                    }}> <i className="fas fa-plus"></i> </button>
                                        </div>
                                    }
                                </div>
                            </div> 

                            <ListingAbout/>

                            <Gallery/>
                            
                        </div>
                    </div>

                    {editListing &&
                        <div className="content-edit-buttons">
                            {cr && <p><i className="fas fa-info-circle"></i> Nezapomeňte na ověření svého e-mailu</p>}
                            <button onClick={() => handleSave()} className="main-btn">Uložit změny</button>
                        </div>
                    }
                </div>
                <Footer />
            </div>
        </>
        )
    }
    if(type === "flat"){
        return (
            <>
                <Head>
                    {cr ?
                    <title>Vytvořte si vlastní inzerát | Roomie</title>
                    :
                    <>
                        <title>Byt {listingName} | Roomie</title>
                        <meta name="title" content={`Byt ${listingName} | Roomie`} />
                        <meta property="og:title" content={`Byt ${listingName} | Roomie`} />
                        <meta property="twitter:title" content={`Byt ${listingName} | Roomie`}  />
                    </>
                    } 
                    {listingFlatBio ? 
                    <>
                        <meta name='description' content={listingFlatBio}/> 
                        <meta property="og:description" content={listingFlatBio}></meta>
                        <meta property="twitter:description" content={listingFlatBio}></meta>
                    </>
                    : 
                    ""}
                    {(listingImgs.length && listingImgs[0]) ?
                    <>
                        <meta property="og:image" content={listingImgs[0]}/>
                        <meta property="twitter:image" content={listingImgs[0]}/>
                    </>
                    :
                    ""
                    }
                </Head>

                <div className="Listing FlatListing">
                    
                    <ListingDialogs/>

                    <Header variant="white" />

                    <div className="listing-banner"></div>
                        <div className="listing-content">
                            <ListingHeader/>
                            <div className="mid-container">
                                <div className="content-body">
                                    {!cr && 
                                    <div className="body-messages">
                                        {(listingInfo && !listingInfo.visible )&&
                                            <div className="messages-message">
                                                <i className="fas fa-info-circle"></i>
                                                <p>
                                                    Váš inzerát je nedokončený, prosím dokončete jej  
                                                    <Link href={`/cr/${listingInfo.type}/${listingId}`}> zde</Link>
                                                </p> 
                                            </div>
                                        }
                                        {(listingInfo && !listingInfo.userInfo.emailVerified) &&
                                            <div className="messages-message">
                                                <i className="fas fa--circle"></i>
                                                <p>
                                                    Váš účet není ověřený - pro používání Roomie si jej prosím ověřte pomocí odkazu zaslaného na váš e-mail.
                                                </p> 
                                            </div>
                                        }
                                        {(listingInfo && listingInfo.hiddenByUser) &&
                                            <div className="messages-message">
                                                <i className="fas fa-info-circle"></i>
                                                <p>
                                                    Váš účet je skrytý - aby ho mohli uživatelé vidět, zapněte jeho viditelnost v <Link href="/edit-profile">nastavení profilu</Link>.
                                                </p> 
                                            </div>
                                        }
                                    </div>
    }

                                    <div className="body-info">
                                        <div className="container">
                                            {listingPremium && 
                                                <div className="info-premium-box">
                                                    <i className="fas fa-circle-check"></i>
                                                    <h3>Premium uživatel</h3>
                                                </div>
                                            }
                                           
                                           <ListingOpeningBoxes/>

                                            <ListingBoxesContainer type="flat" addedBoxes={addedFlatBoxes} existingBoxes={listingFlatBoxes} editListing={editListing}/> 

                                            {cr &&
                                                <Collapse in={flatBoxesInfoAlert}>
                                                    <Alert sx={{marginTop: "1rem"}} severity="info">Přidejte info o svém bydlení.</Alert>
                                                </Collapse> 
                                            }

                                            {editListing && 
                                                <div className="info-edit-boxes">
                                                    <button onClick={() => {
                                                        setFlatBoxerOverlay(true);
                                                        setFlatBoxesInfoAlert(false);
                                                    }}> <i className="fas fa-plus"></i> </button>
                                                </div>
                                            }

                                            <ListingBoxesContainer  type="flatmate" addedBoxes={addedPersonBoxes} existingBoxes={listingPersonBoxes} editListing={editListing}/>
                                            
                                            {cr &&
                                                <Collapse in={personBoxesInfoAlert}>
                                                    <Alert sx={{marginTop: "1rem"}} severity="info">Přidejte info o sobě.</Alert>
                                                </Collapse> 
                                            }


                                            {editListing && 
                                                <div className="info-edit-boxes">
                                                    <button onClick={() => {
                                                        setPersonBoxerOverlay(true);
                                                        setPersonBoxesInfoAlert(false);
                                                    }}> <i className="fas fa-plus"></i> </button>
                                                </div>
                                            }
                                        </div>
                                    </div> 

                                    <ListingAbout/>

                                    <Gallery />

                                    {editListing &&
                                        <div className="content-edit-buttons">
                                            {cr && <p><i className="fas fa-info-circle"></i> Nezapomeňte na ověření svého e-mailu</p>}
                                            <button onClick={handleSave} className="main-btn">Uložit změny</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    <Footer />
        </div>
    </>
        )
    }

}



export default Listing
