import React, {useState, useEffect} from 'react'
//Axios

//Components
import Tag from '../Tag/Tag';
import LocationDropdown from "../LocationDropdown/LocationDropdown";
//Mui components
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';


const Tagger = ({addedTags,setAddedTags, setTagOverlay, existingTags, variant}) => {
    //Person state tags
    const [genderTag, setGenderTag] = useState([]);
    const [ageTag, setAgeTag] = useState([]);
    const [smokingTag, setSmokingTag] = useState([]);
    const [jobTag, setJobTag] = useState([]);
    //Flat state tags
    const [layoutTag, setLayoutTag] = useState([]);
    const [petAllowedTag, setPetAllowedTag] = useState([]);
    const [smokingAllowedTag, setSmokingAllowedTag] = useState([]);
    const [locationTag, setLocationTag] = useState([]);
    const [elevatorTag, setElevatorTag] = useState([]);
    const [internetTag, setInternetTag] = useState([]);


    //Effect
    useEffect(() => {
        if(existingTags && !addedTags){
            fillExistingTags();
        }
    }, [existingTags])

    useEffect(() => {
        if(Array.isArray(locationTag)){
            return;
        } 
        setLocationTag(prevState => [prevState]);
    }, [locationTag]);


    
    //Functions
    const fillExistingTags = () => {
        if(variant === "person"){
            setAddedTags(existingTags);
            existingTags.smoking && setSmokingTag(existingTags.smoking);
            existingTags.job && setJobTag(existingTags.job);
            existingTags.age && setAgeTag(existingTags.age);
            existingTags.gender && setGenderTag(existingTags.gender);
            existingTags.location && setLocationTag(existingTags.location);
        }
        if(variant === "flat"){
            setAddedTags(existingTags);
            existingTags.location && setLocationTag(existingTags.location);
            existingTags.layout && setLayoutTag(existingTags.layout);
            existingTags.internet && setInternetTag(existingTags.internet);
            existingTags.elevator && setElevatorTag(existingTags.elevator);
            existingTags.petAllowed && setPetAllowedTag(existingTags.petAllowed);
            existingTags.smokingAllowed && setSmokingAllowedTag(existingTags.smokingAllowed);
        }
    }

    const handleAdd = () => {
        if(variant === "person"){
            setAddedTags({
                gender: genderTag,
                age: ageTag,
                smoking: smokingTag,
                job: jobTag,
            })
        }
        if(variant === "flat"){
            setAddedTags({
                location: locationTag,
                layout: layoutTag,
                internet: internetTag,
                elevator: elevatorTag,
                petAllowed: petAllowedTag,
                smokingAllowed: smokingAllowedTag
            })
        }
       
        setTagOverlay(false);
    }

    return (
        <div className="tagger">
            <i onClick={() => setTagOverlay(false)} className="tagger-close fas fa-times"></i>
            <div className="tagger-header">{variant === "person" ? "Koho hledám?" : "Jaké bydlení hledám?"}</div>
            <div className="tagger-description">
                Zde můžete zaklikat vaše preference  
                {variant === "person" ? " ideálního spolubydlícího." : " ideálního bydlení."} Pokud
                je pro vás daná hodnota irelevantní, jednoduše jí vynechte a zaklikejte vše,
                co je pro vás důležité.
            </div>
            {variant === "person" &&
            <>
                <section className="tagger-section">
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

                <section className="tagger-section">
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
                        <Tag  active={ageTag.includes("26-34")} onClick={() => {
                            let value = "26-34";
                            if(ageTag.includes(value)){
                                setAgeTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(ageTag.length === 2){
                                    setAgeTag([]);
                                    return
                                }
                                setAgeTag(prevState => [...prevState, value]);
                            }
                        }}>26-34</Tag>
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

                <section className="tagger-section">
                    <p className="section-header">Kouření</p>
                    <div className="section-tags">
                        <Tag  active={smokingTag.includes("Kuřák")} onClick={() => setSmokingTag(smokingTag.includes("Kuřák") ? [] : ["Kuřák"])}>Kuřák</Tag>
                        <Tag active={smokingTag.includes("Nekuřák")} onClick={() => setSmokingTag(smokingTag.includes("Nekuřák") ? [] : ["Nekuřák"])}>Nekuřák</Tag>
                    </div>
                </section>
                <section className="tagger-section">
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
                <section className="tagger-section">
                    <div className="section-header">Lokace</div>
                    <div className="section-tags">
                        <LocationDropdown location={locationTag} setLocation={setLocationTag}/>
                    </div>
                </section>
                
                <section className="tagger-section">
                    <div className="section-header">Dispozice</div>
                    <div className="section-tags">
                         <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Dispozice</InputLabel>
                                <Select label="Dispozice" onChange={e => setLayoutTag(e.target.value === "none" ? [] : [e.target.value])} value={layoutTag ? layoutTag : "none"}>
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

                <section className="tagger-section">
                    <div className="section-header">Výtah</div>
                    <div className="section-tags">
                        <Tag active={elevatorTag.includes("Výtah")} onClick={() => setElevatorTag(elevatorTag.includes("Výtah") ? [] : ["Výtah"])} variant="box" icon="caret-square-up">Ano</Tag>
                        <Tag active={elevatorTag.includes("Bez výtahu")} onClick={() => setElevatorTag(elevatorTag.includes("Bez výtahu") ? [] : ["Bez výtahu"])} variant="box" icon="caret-square-up">Ne</Tag>
                    </div>
                </section>

                <section className="tagger-section">
                    <div className="section-header">Internet</div>
                    <div className="section-tags">
                        <Tag active={internetTag.includes("Internet")} onClick={() => setInternetTag(internetTag.includes("Internet") ? [] : ["Internet"])} variant="box" icon="wifi">Ano</Tag>
                        <Tag active={internetTag.includes("Bez internetu")} onClick={() => setInternetTag(internetTag.includes("Bez internetu") ? [] : ["Bez internetu"])} variant="box" icon="wifi">Ne</Tag>
                    </div>
                </section>

            <section className="tagger-section">
                    <div className="section-header">Mazlíčci</div>
                    <div className="section-tags">
                        <Tag active={petAllowedTag.includes("Mazlíčci povoleno")} onClick={() => setPetAllowedTag(petAllowedTag.includes("Mazlíčci povoleno") ? [] : ["Mazlíčci povoleno"])} variant="box" icon="dog">Povoleno</Tag>
                        <Tag active={petAllowedTag.includes("Mazlíčci nepovoleno")} onClick={() => setPetAllowedTag(petAllowedTag.includes("Mazlíčci nepovoleno") ? [] : ["Mazlíčci nepovoleno"])} variant="box" icon="dog">Nepovoleno</Tag>
                    </div>
            </section>

            <section className="tagger-section">
                    <div className="section-header">Kouření</div>
                    <div className="section-tags">
                        <Tag active={smokingAllowedTag.includes("Kouření povoleno")} onClick={() => setSmokingAllowedTag(smokingAllowedTag.includes("Kouření povoleno") ? [] : ["Kouření povoleno"])} variant="box" icon="smoking">Povoleno</Tag>
                        <Tag active={smokingAllowedTag.includes("Kouření nepovoleno")} onClick={() => setSmokingAllowedTag(smokingAllowedTag.includes("Kouření nepovoleno")? [] : ["Kouření nepovoleno"])} variant="box" icon="smoking">Nepovoleno</Tag>
                    </div>
            </section>
                    
                </>
                
                }
            <div className="tagger-button">
                <button onClick={() => handleAdd()} className="main-btn">Přidat tagy</button>
            </div>
        </div>
    )
}

export default Tagger
