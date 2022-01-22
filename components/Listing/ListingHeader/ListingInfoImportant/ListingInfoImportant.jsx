import React from 'react'
//Contexts
import { useAuth } from '../../../../contexts/AuthContext';
import { useListing } from '../../../../contexts/ListingContext';
//Components
//MUI
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const ListingInfoImportant = () => {
    const {currentUser} = useAuth();
    const {
        type, 
        listingInfo, 
        editListing, 
        budget, 
        setBudget, 
        stayTime, 
        setStayTime, 
        startTime, 
        setStartTime,
        setSliderDialog
    } = useListing();
    if(type === "flatmate"){
        return (
           <>
                <div className={`info-important ${editListing ? "edit" : ""}`}>
                    <div className="important-item">
                        <div className="item-header">
                            <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-coins`}></i>
                            {editListing ?  
                                <div className="header-value header-value-edit-slider">
                                    <p>
                                        {budget && (budget >= 10000 ? 
                                            (budget.toString().substr(0,2) + " " + budget.toString().substr(2,6)) 
                                        : 
                                            (budget.toString().substr(0,1) + " " + budget.toString().substr(1,5)))} 
                                        {budget == 60000 && "+"} Kč
                                    </p>
                                    <i onClick={() => setSliderDialog(true)} className="fas fa-gear"></i></div> 
                            : 
                                <div className="header-value">
                                    {listingInfo.mainInfo.budget >= 10000 ? 
                                        (listingInfo.mainInfo.budget.toString().substr(0,2) + " " +  listingInfo.mainInfo.budget.toString().substr(2,6))
                                    :  
                                        (listingInfo.mainInfo.budget.toString().substr(0,1) + " " + listingInfo.mainInfo.budget.toString().substr(1,5))}
                                        {listingInfo.mainInfo.budget == 60000 && "+"} Kč
                                </div>}
                        </div>
                        <div className="item-description">Rozpočet</div>
                    </div>
                    <div className="important-item">
                        <div className="item-header">
                            <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-calendar-alt`}></i>
                            {editListing ? 
                            <FormControl className="select" size="small" error={!stayTime || stayTime == ""}>
                                <InputLabel className="input-label" >Doba bydlení</InputLabel>
                                    <Select onChange={(e) => setStayTime(e.target.value)} label="Doba bydlení" value={stayTime ? stayTime : listingInfo.mainInfo.stayTime ? listingInfo.mainInfo.stayTime : ""}>
                                        <MenuItem value="Krátkodobá">Krátkodobá</MenuItem>
                                        <MenuItem value="1 rok">1 rok</MenuItem>
                                        <MenuItem value="Dlouhodobá">Dlouhodobá</MenuItem>
                                        <MenuItem value="Neurčito">Neurčito</MenuItem>
                                    </Select>
                            </FormControl>
                            :
                            <div className="header-value">{listingInfo.mainInfo.stayTime}</div>}
                        </div>
                        <div className="item-description">Doba bydlení</div>
                    </div>
                    <div className="important-item">
                        <div className="item-header">
                            <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-shuttle-van`}></i>
                                {editListing ? 
                                <FormControl className="select" size="small" error={!startTime || startTime == ""}>
                                    <InputLabel className="input-label" >Doba nas.</InputLabel>
                                    <Select onChange={(e) => setStartTime(e.target.value)} label="Doba bydlení" value={startTime ? startTime : listingInfo.mainInfo.startTime ? listingInfo.mainInfo.startTime : ""}>
                                        <MenuItem value="Okamžitě">Okamžitě</MenuItem>
                                        <MenuItem value="Příští měsíc">Příští měsíc</MenuItem>
                                        <MenuItem value="Příští rok">Příští rok</MenuItem>
                                        <MenuItem value="Neurčito">Neurčito</MenuItem>
                                    </Select>
                                </FormControl>
                                :
                                <div className="header-value">{listingInfo.mainInfo.startTime}</div>}
                        </div>
                        <div className="item-description">Doba nastěhování</div>
                    </div>
                </div>
            </>
        )
    }

    if(type === "flat"){
        return(
            <>
                <div className={`info-important ${editListing ? "edit" : ""}`}>
                    <div className="important-item">
                        <div className="item-header">
                            <i className="header-icon fas fa-coins"></i>
                            {editListing ? 
                                <div className="header-value header-value-edit-slider">
                                    <p>
                                        {budget && (budget >= 10000 ? 
                                            (budget.toString().substr(0,2) + " " + budget.toString().substr(2,6)) 
                                        : 
                                            (budget.toString().substr(0,1) + " " + budget.toString().substr(1,5)))} 
                                            {budget == 60000 && "+"} Kč
                                    </p>
                                    <i onClick={() => setSliderDialog(true)} className="fas fa-gear"></i>
                                </div>  
                            : 
                            <div className="header-value">
                                {listingInfo.mainInfo.price >= 10000 ? 
                                    (listingInfo.mainInfo.price.toString().substr(0,2) + " " +  listingInfo.mainInfo.price.toString().substr(2,6))
                                :  
                                    (listingInfo.mainInfo.price.toString().substr(0,1) + " " + listingInfo.mainInfo.price.toString().substr(1,5))}
                                    {listingInfo.mainInfo.price == 60000 && "+"} Kč 
                            </div>
                            }
                        </div>
                        <div className="item-description">Měsíční nájemné</div>
                    </div>
                    <div className="important-item">
                        <div className="item-header">
                            <i className="header-icon fas fa-calendar-alt"></i>
                            {editListing ? 
                            <FormControl className="select" size="small" error={!stayTime || stayTime == ""}>
                                <InputLabel className="input-label" >Doba bydlení</InputLabel>
                                    <Select onChange={(e) => setStayTime(e.target.value)} label="Doba bydlení" value={stayTime ? stayTime : listingInfo.mainInfo.stayTime ? listingInfo.mainInfo.stayTime : ""}>
                                        <MenuItem value="Krátkodobá">Krátkodobá</MenuItem>
                                            <MenuItem value="1 rok">1 rok</MenuItem>
                                            <MenuItem value="Dlouhodobá">Dlouhodobá</MenuItem>
                                            <MenuItem value="Neurčito">Neurčito</MenuItem>
                                    </Select>
                            </FormControl>
                            :
                            <div className="header-value">{listingInfo.mainInfo.stayTime}</div>
                            }
                        </div>
                        <div className="item-description">Doba bydlení</div>
                    </div>
                    <div className="important-item">
                        <div className="item-header">
                            <i className="header-icon fas fa-shuttle-van"></i>
                            {editListing ? 
                            <FormControl className="select" size="small" error={!startTime || startTime == ""}>
                                <InputLabel className="input-label" >Doba nas.</InputLabel>
                                <Select onChange={(e) => setStartTime(e.target.value)} label="Doba nastěhování" value={startTime ? startTime : listingInfo.mainInfo.startTime ? listingInfo.mainInfo.startTime : ""}>
                                    <MenuItem value="Okamžitě">Okamžitě</MenuItem>
                                    <MenuItem value="Příští měsíc">Příští měsíc</MenuItem>
                                    <MenuItem value="Příští rok">Příští rok</MenuItem>
                                    <MenuItem value="Neurčito">Neurčito</MenuItem>
                                </Select>
                            </FormControl>
                        :
                        <div className="header-value">{listingInfo.mainInfo.startTime}</div>
                        } 
                    </div>
                    <div className="item-description">Doba nastěhování</div>
                </div>
            </div>
        </>
        )
    }
}
    

export default ListingInfoImportant
