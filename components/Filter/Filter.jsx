import React, {useState, useEffect} from 'react'
//Axios

//Components
import Tag from '../Tag/Tag';
import LocationDropdown from "../LocationDropdown/LocationDropdown";
//Mui components
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

const Filter = ({variant, setOpen, activeFilters, setActiveFilters, applyFilters}) => {
     //Person state tags
     const [genderTag, setGenderTag] = useState([]);
     const [ageTag, setAgeTag] = useState([]);
     const [smokingTag, setSmokingTag] = useState([]);
     const [jobTag, setJobTag] = useState([]);
     //Flat state tags
     const [layoutTag, setLayoutTag] = useState([]);
     const [levelTag, setLevelTag] = useState([]);
     const [petAllowedTag, setPetAllowedTag] = useState([]);
     const [smokingAllowedTag, setSmokingAllowedTag] = useState([]);
     const [locationTag, setLocationTag] = useState([]);

     useEffect(() => {
         if(variant === "flatmate"){
            activeFilters.gender ? setGenderTag(activeFilters.gender) : "";
            activeFilters.age ? setAgeTag(activeFilters.age) : "";
            activeFilters.smoking ? setSmokingTag(activeFilters.smoking) : "";
            activeFilters.job ? setJobTag(activeFilters.job) : "";  
            activeFilters.location && activeFilters.location[0] ? setLocationTag(activeFilters.location) : "";
         }
     }, [activeFilters])
 
 
     useEffect(() => {
         if(Array.isArray(locationTag)){
             return;
         } 
         setLocationTag(prevState => [prevState]);
     }, [locationTag]);
 
 
     
     //Functions
     const handleAdd = () => {
         if(variant === "flatmate"){
             let addObject = {};
            genderTag.length ? addObject.gender = genderTag : "";
            ageTag.length ? addObject.age = ageTag : "";
            smokingTag.length ? addObject.smoking = smokingTag : "";
            jobTag.length ? addObject.job = jobTag : "";
            (locationTag.length && locationTag[0]) ? addObject.location = locationTag : "";
            setActiveFilters(addObject);
            applyFilters(addObject);
         }
         if(variant === "flat"){
            setActiveFilters({
                location: locationTag,
                layout: layoutTag,
                level: levelTag,
                petAllowed: petAllowedTag,
                smokingAllowed: smokingAllowedTag,
            })
         }
         setOpen(false);
     }

     const handleRemove = () => {
        setGenderTag([]);
        setAgeTag([]);
        setSmokingTag([]);
        setJobTag([]);
        setActiveFilters({});
        setOpen(false);
        applyFilters({})
     }
 
    return (
        <div className="filter">
            <div className="filter-header">{variant === "flatmate" ? "Filtrovat lidi" : "Filtrovat byty"}</div>
            <div className="filter-description">
                Zde můžete zadat vaše preference  
                {variant === "flatmate" ? " ideálního spolubydlícího." : " ideálního bydlení."} Zaklikejte hodnoty, podle kterých chcete filtrovat, ostatní můžete nechat prázdné.
            </div>
            {variant === "flatmate" &&
            <>
                <section className="filter-section">
                    <div className="section-header">Lokace</div>
                    <div className="section-tags">
                        <LocationDropdown location={locationTag} setLocation={setLocationTag}/>
                    </div>
                </section>
                <section className="filter-section">
                    <div className="section-tags">
                        <Tag>{(locationTag && locationTag[0]) ? locationTag[0] : "Vyberte lokaci"}</Tag>
                    </div>
                </section>
                <section className="filter-section">
                    <p className="section-header">Pohlaví</p>
                    <div className="section-tags">
                        <Tag active={genderTag.includes("Muž")} onClick={() => {
                            let value = "Muž";
                            if(genderTag.includes(value)){
                                setGenderTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(genderTag.length === 2){
                                    setGenderTag([]);
                                    return
                                }
                                setGenderTag(prevState => [...prevState, value]);
                            }
                        }}>Muž</Tag>
                        <Tag active={genderTag.includes("Žena")} onClick={() => {
                            let value = "Žena";
                            if(genderTag.includes(value)){
                                setGenderTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(genderTag.length === 2){
                                    setGenderTag([]);
                                    return
                                }
                                setGenderTag(prevState => [...prevState, value]);
                            }
                        }}>Žena</Tag>
                        <Tag active={genderTag.includes("Jiné")} onClick={() =>{
                            let value = "Jiné";
                            
                            if(genderTag.includes(value)){
                                setGenderTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(genderTag.length === 2){
                                    setGenderTag([]);
                                    return
                                }
                                setGenderTag(prevState => [...prevState, value]);
                            }
                        
                        }}>Jiné</Tag>
                    </div>
                </section>

                <section className="filter-section">
                    <p className="section-header">Věk</p>
                    <div className="section-tags">
                        <Tag active={ageTag.includes("18-25")} onClick={() => {
                            let value = "18-25";
                            
                            if(ageTag.includes(value)){
                                setAgeTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(ageTag.length === 2){
                                    setAgeTag([]);
                                    return
                                }
                                setAgeTag(prevState => [...prevState, value]);
                            }
                        }}>18-25</Tag>
                        <Tag  active={ageTag.includes("25-35")} onClick={() => {
                            let value = "25-35";
                            
                            if(ageTag.includes(value)){
                                setAgeTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(ageTag.length === 2){
                                    setAgeTag([]);
                                    return
                                }
                                setAgeTag(prevState => [...prevState, value]);
                            }
                        }}>25-35</Tag>
                        <Tag  active={ageTag.includes("35+")} onClick={() =>{
                             let value = "35+";
                            
                             if(ageTag.includes(value)){
                                setAgeTag(prevState => prevState.filter(item => item != value));
                             }else{
                                 if(ageTag.length === 2){
                                     setAgeTag([]);
                                     return
                                 }
                                 setAgeTag(prevState => [...prevState, value]);
                             }
                        }}>35+</Tag>
                    </div>
                </section>

                <section className="filter-section">
                    <p className="section-header">Kouření</p>
                    <div className="section-tags">
                        <Tag  active={smokingTag.includes("Kuřák")} onClick={() => setSmokingTag(smokingTag.includes("Kuřák") ? [] : ["Kuřák"])}>Kuřák</Tag>
                        <Tag active={smokingTag.includes("Nekuřák")} onClick={() => setSmokingTag(smokingTag.includes("Nekuřák") ? [] : ["Nekuřák"])}>Nekuřák</Tag>
                    </div>
                </section>
                <section className="filter-section">
                    <p className="section-header">Zaměstnání</p>
                    <div className="section-tags">
                        <Tag active={jobTag.includes("Zaměstnaný")} onClick={() =>{
                             let value = "Zaměstnaný";
                             if(jobTag.includes(value)){
                                 setJobTag(prevState => prevState.filter(item => item != value));
                             }else{
                                 if(jobTag.length === 2){
                                     setJobTag([]);
                                     return
                                 }
                                 setJobTag(prevState => [...prevState, value]);
                             }
                        }}>Zaměstnaný</Tag>
                        <Tag active={jobTag.includes("Nezaměstnaný")} onClick={() => {
                            let value = "Nezaměstnaný";
                            if(jobTag.includes(value)){
                                setJobTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(jobTag.length === 2){
                                    setJobTag([]);
                                    return
                                }
                                setJobTag(prevState => [...prevState, value]);
                            }
                        }}>Nezaměstnaný</Tag>
                        <Tag active={jobTag.includes("Student")} onClick={() => {
                            let value = "Student";
                            if(jobTag.includes(value)){
                                setJobTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(jobTag.length === 2){
                                    setJobTag([]);
                                    return
                                }
                                setJobTag(prevState => [...prevState, value]);
                            }
                        }}>Student</Tag>
                    </div>
                </section>
                </>
                }

                {variant === "flat" && 
                <>
                <section className="filter-section">
                    <div className="section-header">Lokace</div>
                    <div className="section-tags">
                        <LocationDropdown location={locationTag} setLocation={setLocationTag}/>
                    </div>
                </section>
                
                <section className="filter-section">
                    <div className="section-header">Dispozice</div>
                    <div className="section-tags">
                         <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Dispozice</InputLabel>
                                <Select label="Dispozice" onChange={e => setLayoutTag(e.target.value === "none" ? [] : [e.target.value])} value={layoutTag}>
                                    <MenuItem value={"none"}>Libovolné</MenuItem>
                                    <MenuItem value={"1+1"}>1+1</MenuItem>
                                    <MenuItem value={"1+kk"}>1+kk</MenuItem>
                                    <MenuItem value={"2+1"}>2+1</MenuItem>
                                    <MenuItem value={"2+kk"}>2+kk</MenuItem>
                                    <MenuItem value={"3+1"}>3+1</MenuItem>
                                    <MenuItem value={"3+kk"}>3+kk</MenuItem>
                                    <MenuItem value={"4+1"}>4+1</MenuItem>
                                    <MenuItem value={"4+kk"}>4+kk</MenuItem>
                                </Select>
                        </FormControl>
                    </div>
                </section>

                <section className="filter-section">
                        <div className="section-header">Podlaží</div>
                        <div className="section-tags">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Podlaží</InputLabel>
                                    <Select label="Podlaží" onChange={(e) => setLevelTag(e.target.value === "none" ? [] : [e.target.value])} value={levelTag}>
                                        <MenuItem value={"none"}>Libovolné</MenuItem>
                                        <MenuItem value={"1. podlaží"}>1</MenuItem>
                                        <MenuItem value={"2. podlaží"}>2</MenuItem>
                                        <MenuItem value={"3. podlaží"}>3</MenuItem>
                                        <MenuItem value={"4. podlaží"}>4</MenuItem>
                                        <MenuItem value={"5. podlaží"}>5</MenuItem>
                                        <MenuItem value={"6. podlaží"}>6</MenuItem>
                                        <MenuItem value={"7. podlaží"}>7</MenuItem>
                                        <MenuItem value={"8. podlaží"}>8</MenuItem>
                                        <MenuItem value={"9. podlaží"}>9</MenuItem>
                                        <MenuItem value={"10+ podlaží"}>10+</MenuItem>
                                    </Select>
                                </FormControl>
                        </div>
                </section>

            <section className="filter-section">
                    <div className="section-header">Mazlíčci</div>
                    <div className="section-tags">
                        <Tag active={petAllowedTag.includes("Mazlíčci povoleno")} onClick={() => setPetAllowedTag(petAllowedTag.includes("Mazlíčci povoleno") ? [] : ["Mazlíčci povoleno"])} variant="box" icon="dog">Povoleno</Tag>
                        <Tag active={petAllowedTag.includes("Mazlíčci nepovoleno")} onClick={() => setPetAllowedTag(petAllowedTag.includes("Mazlíčci nepovoleno") ? [] : ["Mazlíčci nepovoleno"])} variant="box" icon="dog">Nepovoleno</Tag>
                    </div>
            </section>

            <section className="filter-section">
                    <div className="section-header">Kouření</div>
                    <div className="section-tags">
                        <Tag active={smokingAllowedTag.includes("Kouření povoleno")} onClick={() => setSmokingAllowedTag(smokingAllowedTag.includes("Kouření povoleno") ? [] : ["Kouření povoleno"])} variant="box" icon="smoking">Povoleno</Tag>
                        <Tag active={smokingAllowedTag.includes("Kouření nepovoleno")} onClick={() => setSmokingAllowedTag(smokingAllowedTag.includes("Kouření nepovoleno")? [] : ["Kouření nepovoleno"])} variant="box" icon="smoking">Nepovoleno</Tag>
                    </div>
            </section>
                    
                </>
                
                }
            <div className="filter-buttons">
                <button onClick={() => handleAdd()} className="main-btn">Přidat filtry</button>
                <button onClick={() => handleRemove()} className="general-btn">Odebrat filtry</button>
            </div>
        </div>
    )
}

export default Filter
