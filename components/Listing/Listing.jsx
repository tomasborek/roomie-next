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
        listingPersonBoxes,
        addedPersonBoxes,
        listingFlatBoxes,
        addedFlatBoxes,
        listingPremium,
        setPersonBoxerOverlay,
        handleSave,
    } = useListing();

    const [flatBoxesInfoAlert, setFlatBoxesInfoAlert] = useState(true);
    const [personBoxesInfoAlert, setPersonBoxesInfoAlert] = useState(true);
    if(type === "flatmate"){
        return (
            <>
            <Head>
                <title>{listingName} | Roomie</title>
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
                                            <i className="fas fa-info"></i>
                                            <p>
                                                Váš inzerát je nedokončený, prosím dokončete jej 
                                                <Link href={`/cr/${listingInfo.type}/${listingId}`}> zde</Link>
                                            </p> 
                                        </div>
                                    }
                                    {(listingInfo && !listingInfo.userInfo.emailVerified) &&
                                        <div className="messages-message">
                                            <i className="fas fa-info"></i>
                                            <p>
                                                Váš účet není ověřený - pro používání Roomie si jej prosím ověřte pomocí odkazu zaslaného na váš e-mail.
                                            </p> 
                                        </div>
                                    }
                                    {(listingInfo && listingInfo.hiddenByUser) &&
                                    <div className="messages-message">
                                        <i className="fas fa-info"></i>
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
                    <title>Byt {listingName} | Roomie</title>
                </Head>

                <div className="Listing FlatListing">
                    
                    <ListingDialogs/>

                    <Header variant="white" />

                    <div className="listing-banner"></div>
                        <div className="listing-content">
                            <ListingHeader/>
                            <div className="mid-container">
                                <div className="content-body">
                                    <div className="body-messages">
                                        {(listingInfo && !listingInfo.visible )&&
                                            <div className="messages-message">
                                                <i className="fas fa-info"></i>
                                                <p>
                                                    Váš inzerát je nedokončený, prosím dokončete jej  
                                                    <Link href={`/cr/${listingInfo.type}/${listingId}`}> zde</Link>
                                                </p> 
                                            </div>
                                        }
                                        {(listingInfo && !listingInfo.userInfo.emailVerified) &&
                                            <div className="messages-message">
                                                <i className="fas fa-info"></i>
                                                <p>
                                                    Váš účet není ověřený - pro používání Roomie si jej prosím ověřte pomocí odkazu zaslaného na váš e-mail.
                                                </p> 
                                            </div>
                                        }
                                        {(listingInfo && listingInfo.hiddenByUser) &&
                                            <div className="messages-message">
                                                <i className="fas fa-info"></i>
                                                <p>
                                                    Váš účet je skrytý - aby ho mohli uživatelé vidět, zapněte jeho viditelnost v <Link href="/edit-profile">nastavení profilu</Link>.
                                                </p> 
                                            </div>
                                        }
                                    </div>

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
