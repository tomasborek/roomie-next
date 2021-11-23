import React from 'react'
//Contexts
import { useAuth } from '../../../contexts/AuthContext';
//Components
//MUI
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const ListingInfoImportant = ({type, listingInfo, editListing, state}) => {
    const {currentUser} = useAuth();
    if(type === "flatmate"){
        return (
            <div className={`info-important ${editListing ? "edit" : ""}`}>
                <div className="important-item">
                    <div className="item-header">
                        <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-coins`}></i>
                         {editListing ?  <div className="header-value header-value-edit-slider"><p>{state.budget} 000 Kč</p><i onClick={() => state.setSliderDialog(true)} className="fas fa-gear"></i></div> : <div className="header-value"> {listingInfo.data().mainInfo.budget} 000 Kč</div>}
                    </div>
                    <div className="item-description">Rozpočet</div>
                </div>
                <div className="important-item">
                    <div className="item-header">
                        <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-calendar-alt`}></i>
                        {editListing ? 
                        <FormControl className="select" size="small" error={!state.stayTime || state.stayTime == ""}>
                            <InputLabel className="input-label" >Doba bydlení</InputLabel>
                                <Select onChange={(e) => state.setStayTime(e.target.value)} label="Doba bydlení" defaultValue={listingInfo.data().mainInfo.stayTime}>
                                    <MenuItem value="Krátkodobá">Krátkodobá</MenuItem>
                                    <MenuItem value="1 rok">1 rok</MenuItem>
                                    <MenuItem value="Dlouhodobá">Dlouhodobá</MenuItem>
                                    <MenuItem value="Neurčito">Neurčito</MenuItem>
                                </Select>
                        </FormControl>
                        :
                        <div className="header-value">{listingInfo.data().mainInfo.stayTime}</div>}
                    </div>
                    <div className="item-description">Doba bydlení</div>
                </div>
                <div className="important-item">
                    <div className="item-header">
                        <i className={`header-icon ${editListing && "header-edit-icon"} fas fa-shuttle-van`}></i>
                            {editListing ? 
                            <FormControl className="select" size="small" error={!state.startTime || state.startTime == ""}>
                                <InputLabel className="input-label" >Doba nas.</InputLabel>
                                <Select onChange={(e) => state.setStartTime(e.target.value)} label="Doba bydlení"  defaultValue={listingInfo.data().mainInfo.startTime}>
                                    <MenuItem value="Okamžitě">Okamžitě</MenuItem>
                                    <MenuItem value="Příští měsíc">Příští měsíc</MenuItem>
                                    <MenuItem value="Příští rok">Příští rok</MenuItem>
                                    <MenuItem value="Neurčito">Neurčito</MenuItem>
                                </Select>
                            </FormControl>
                            :
                            <div className="header-value">{listingInfo.data().mainInfo.startTime}</div>}
                    </div>
                    <div className="item-description">Doba nastěhování</div>
                 </div>
            </div>
        )
    }

    if(type === "flat"){
        return(
            <div className={`info-important ${editListing ? "edit" : ""}`}>
                <div className="important-item">
                    <div className="item-header">
                        <i className="header-icon fas fa-coins"></i>
                        {editListing ? <div className="header-value header-value-edit-slider"><p>{state.budget} 000 Kč</p><i onClick={() => state.setSliderDialog(true)} className="fas fa-gear"></i></div>  : <div className="header-value">{listingInfo.data().mainInfo.price} 000 Kč</div>}
                    </div>
                    <div className="item-description">Měsíční nájemné</div>
                </div>
                <div className="important-item">
                    <div className="item-header">
                        <i className="header-icon fas fa-calendar-alt"></i>
                        {editListing ? 
                        <FormControl className="select" size="small" error={!state.stayTime || state.stayTime == ""}>
                            <InputLabel className="input-label" >Doba bydlení</InputLabel>
                                <Select onChange={(e) => state.setStartTime(e.target.value)} label="Doba bydlení" defaultValue={listingInfo.data().mainInfo.startTime}>
                                    <MenuItem value="Krátkodobá">Krátkodobá</MenuItem>
                                        <MenuItem value="1 rok">1 rok</MenuItem>
                                        <MenuItem value="Dlouhodobá">Dlouhodobá</MenuItem>
                                        <MenuItem value="Neurčito">Neurčito</MenuItem>
                                </Select>
                        </FormControl>
                        :
                        <div className="header-value">{listingInfo.data().mainInfo.startTime}</div>
                        }
                    </div>
                    <div className="item-description">Doba bydlení</div>
                </div>
                <div className="important-item">
                    <div className="item-header">
                        <i className="header-icon fas fa-shuttle-van"></i>
                        {editListing ? 
                        <FormControl className="select" size="small" error={!state.startTime || state.startTime == ""}>
                            <InputLabel className="input-label" >Doba nas.</InputLabel>
                            <Select onChange={(e) => state.setStayTime(e.target.value)} label="Doba bydlení" defaultValue={listingInfo.data().mainInfo.stayTime}>
                                <MenuItem value="Okamžitě">Okamžitě</MenuItem>
                                <MenuItem value="Příští měsíc">Příští měsíc</MenuItem>
                                <MenuItem value="Příští rok">Příští rok</MenuItem>
                                <MenuItem value="Neurčito">Neurčito</MenuItem>
                            </Select>
                        </FormControl>
                    :
                    <div className="header-value">{listingInfo.data().mainInfo.startTime}</div>
                    } 
                </div>
                <div className="item-description">Doba nastěhování</div>
            </div>
        </div>
        )
    }
}
    

export default ListingInfoImportant
