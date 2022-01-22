import React from 'react';
//COntexts
import {useListing} from "../../../contexts/ListingContext";
//Components
import InputDialog from '../../InputDialog/InputDialog';
import GalleryInput from '../../GalleryInput/GalleryInput';
import Tagger from '../../Tagger/Tagger';
import Boxer from '../../Boxer/Boxer';
//Mui
import { Backdrop, Dialog, DialogTitle, DialogContent, DialogActions, Button, Slider } from '@mui/material';

const ListingDialogs = () => {
    const bdSx = {
        zIndex: (theme) => theme.zIndex.drawer + 1 
    }
    const {
        type,
        listingInfo,
        reportDialog,
        setReportDialog,
        reqDialogOpen,
        setReqDialogOpen,
        sliderDialog,
        setSliderDialog,
        personTagOverlay,
        setPersonTagOverlay,
        flatTagOverlay,
        setFlatTagOverlay,
        personBoxerOverlay,
        setPersonBoxerOverlay,
        flatBoxerOverlay,
        setFlatBoxerOverlay,
        reportMessage,
        setReportMessage,
        handleReport,
        requestMessage,
        setRequestMessage,
        handleRequest,
        budget,
        setBudget,
        addedPersonTags,
        setAddedPersonTags,
        addedFlatTags,
        setAddedFlatTags,
        addedPersonBoxes,
        setAddedPersonBoxes,
        addedFlatBoxes,
        setAddedFlatBoxes,
        listingPersonTags,
        listingFlatTags,
        listingPersonBoxes,
        listingFlatBoxes,
        galleryInput,
        setGalleryInput,
        listingImgs,
        addedListingImgs,
        setAddedListingImgs,
        pfp,
        addedPfp,
        setAddedPfp,
    } = useListing();
  return (
      <>
        {/*Report*/}
         <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={reportDialog}>
                <InputDialog
                    heading={`Nahlásit uživatele ${listingInfo && listingInfo.userInfo.username}`}
                    description="Prosím popište důvody nahlášení."
                    setMessage={setReportMessage} 
                    message={reportMessage} 
                    setOpen={setReportDialog} 
                    handleSend={handleReport}/>
            </Backdrop>

            {/*Request*/}
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={reqDialogOpen}>
                <InputDialog
                    heading="Odelsat žádost o kontakt"
                    description="Inzerant uvidí vaší žádost s vaší zprávou a může se rozhodnout zda vaší žádost přijme a poskytne vám své kontaktní údaje."
                    setMessage={setRequestMessage} 
                    message={requestMessage} 
                    setOpen={setReqDialogOpen} 
                    handleSend={handleRequest}/>
            </Backdrop>

            {/*Edit Budget*/}
            <Dialog
                    open={sliderDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>Upravit rozpočet</DialogTitle>
                    <DialogContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Slider sx={{width: 250, marginTop: "1rem"}} min={1000} max={60000} onChange={(e) => setBudget(e.target.value)} step={1000} value={budget ? budget : 0}/>
                            <div style={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                                <i style={{marginRight: "0.5rem"}}className="fas fa-coins"></i>
                                <p> 
                                    <input 
                                        maxLength={5} 
                                        type="text" 
                                        onChange={(e) => (e.target.value.match(/^[0-9]+$/) || e.target.value === "") ? setBudget(e.target.value) : ""} 
                                        value={budget} 
                                        className='range-input' /> 
                                    {budget == 60000 ? " +" : ""} Kč</p>
                            </div>
                            
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            sx={(!budget || budget < 1000 || budget > 60000) ? {opacity: 0.2, pointerEvents: "none"} : {opacity: 1, pointerEvents: "all"}} 
                            onClick={() => setSliderDialog(false)}>
                                Uložit
                            </Button>
                    </DialogActions>
                </Dialog>
            
                <GalleryInput 
                    object={galleryInput}
                    setObject={setGalleryInput}
                    listingImgs={listingImgs}
                    addedListingImgs={addedListingImgs}
                    pfp={pfp}
                    addedPfp={addedPfp}
                    setAddedPfp={setAddedPfp}
                />

            {type === "flatmate" && 
            <>
                 <Backdrop sx={bdSx} open={personTagOverlay}>
                    <Tagger 
                        variant="person" 
                        addedTags={addedPersonTags} 
                        setAddedTags={setAddedPersonTags}
                        setTagOverlay={setPersonTagOverlay}
                        existingTags={listingPersonTags}
                    />
                </Backdrop>

                <Backdrop sx={bdSx} open={flatTagOverlay}>
                    <Tagger 
                         variant="flat" 
                         addedTags={addedFlatTags} 
                         setAddedTags={setAddedFlatTags}
                         setTagOverlay={setFlatTagOverlay}
                         existingTags={listingFlatTags}
                    />
                </Backdrop>

                <Backdrop sx={bdSx} open={personBoxerOverlay}>
                    <Boxer
                         variant="person" 
                         addedBoxes={addedPersonBoxes} 
                         setAddedBoxes={setAddedPersonBoxes}
                         setBoxerOverlay={setPersonBoxerOverlay}
                         existingBoxes={listingPersonBoxes}
                    />
                </Backdrop>
            </>
            }

            {type === "flat" &&
                <>
                <Backdrop  sx={bdSx} open={personTagOverlay}>
                        <Tagger
                            variant="person"
                            addedTags={addedPersonTags}
                            setAddedTags={setAddedPersonTags}
                            setTagOverlay={setPersonTagOverlay}
                            existingTags={listingPersonTags}
                        />
                    </Backdrop>

                    <Backdrop sx={bdSx} open={personBoxerOverlay}>
                        <Boxer
                            variant="person" 
                            addedBoxes={addedPersonBoxes} 
                            setAddedBoxes={setAddedPersonBoxes}
                            setBoxerOverlay={setPersonBoxerOverlay}
                            existingBoxes={listingPersonBoxes}
                        />
                    </Backdrop>

                    <Backdrop sx={bdSx} open={flatBoxerOverlay}>
                        <Boxer
                            variant="flat" 
                            addedBoxes={addedFlatBoxes} 
                            setAddedBoxes={setAddedFlatBoxes}
                            setBoxerOverlay={setFlatBoxerOverlay}
                            existingBoxes={listingFlatBoxes}
                        />
                    </Backdrop>

                </>
            }
      </>
  );
};

export default ListingDialogs;
