import React, {useState, useEffect} from 'react'
//Axios

//Components
import Tag from '../Tag/Tag';
import LocationDropdown from "../LocationDropdown/LocationDropdown";
//Mui components
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';


const Tagger = ({variant, addedTags, setAddedTags, setTagOverlay, existingTags}) => {
    //Person state tags
    const [genderTag, setGenderTag] = useState([]);
    const [ageTag, setAgeTag] = useState([]);
    const [smokingTag, setSmokingTag] = useState("");
    const [jobTag, setJobTag] = useState([]);
    //Flat state tags
    const [layoutTag, setLayoutTag] = useState("");
    const [petAllowedTag, setPetAllowedTag] = useState("");
    const [smokingAllowedTag, setSmokingAllowedTag] = useState("");
    const [locationTag, setLocationTag] = useState("");
    const [elevatorTag, setElevatorTag] = useState("");
    const [internetTag, setInternetTag] = useState("");


    //Effect
    useEffect(() => {
        if(existingTags && !addedTags){
            fillExistingTags();
        }
    }, [existingTags])



    
    //Functions
    const fillExistingTags = () => {
        if(variant === "person"){
            setAddedTags(existingTags);
            setGenderTag(existingTags.gender ? existingTags.gender  : []);
            setAgeTag(existingTags.age ? existingTags.age  : []);
            setSmokingTag(existingTags.smoking ? existingTags.smoking  : "");
            setJobTag(existingTags.job ? existingTags.job  : []); 
            setLocationTag(existingTags.location ? existingTags.location  : ""); 
        }
        if(variant === "flat"){
            setAddedTags(existingTags);
            setLocationTag(existingTags.location ? existingTags.location  : ""); 
            setLayoutTag(existingTags.layout ? existingTags.layout  : ""); 
            setInternetTag(existingTags.internet ? existingTags.internet  : "");
            setElevatorTag(existingTags.elevator ? existingTags.elevator  : "");
            setPetAllowedTag(existingTags.petAllowed ? existingTags.petAllowed  : ""); 
            setSmokingAllowedTag(existingTags.smokingAllowed ? existingTags.smokingAllowed  : ""); 
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
            <div className="tagger-header">{variant === "person" ? "Koho hled??m?" : "Jak?? bydlen?? hled??m?"}</div>
            <div className="tagger-description">
                Zde m????ete zaklikat va??e preference  
                {variant === "person" ? " ide??ln??ho spolubydl??c??ho." : " ide??ln??ho bydlen??."} Pokud
                je pro v??s dan?? hodnota irelevantn??, jednodu??e j?? vynechte a zaklikejte v??e,
                co je pro v??s d??le??it??.
            </div>
            {variant === "person" &&
            <>
                <section className="tagger-section">
                    <p className="section-header">Pohlav??</p>
                    <div className="section-tags">
                        <Tag active={genderTag.includes("Mu??")} onClick={() => {
                            let value = "Mu??";
                            if(genderTag.includes(value)){
                                setGenderTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(genderTag.length === 2){
                                    setGenderTag([]);
                                }else{
                                    setGenderTag(prevState => [...prevState, value]);
                                }
                            }
                        }}>Mu??</Tag>
                        <Tag active={genderTag.includes("??ena")} onClick={() => {
                            let value = "??ena";
                            if(genderTag.includes(value)){
                                setGenderTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(genderTag.length === 2){
                                    setGenderTag([]);
                                }else{
                                    setGenderTag(prevState => [...prevState, value]);
                                }
                            }
                        }}>??ena</Tag>
                        <Tag active={genderTag.includes("Jin??")} onClick={() =>{
                            let value = "Jin??";
                            
                            if(genderTag.includes(value)){
                                setGenderTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(genderTag.length === 2){
                                    setGenderTag([]);
                                }else{
                                    setGenderTag(prevState => [...prevState, value]);
                                }
                            }
                        
                        }}>Jin??</Tag>
                    </div>
                </section>

                <section className="tagger-section">
                    <p className="section-header">V??k</p>
                    <div className="section-tags">
                        <Tag active={ageTag.includes("18-25")} onClick={() => {
                            let value = "18-25";
                            if(ageTag.includes(value)){
                                setAgeTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(ageTag.length === 2){
                                    setAgeTag([]);
                                }else{
                                    setAgeTag(prevState => [...prevState, value]);
                                }
                            }
                        }}>18-25</Tag>
                        <Tag  active={ageTag.includes("26-34")} onClick={() => {
                            let value = "26-34";
                            if(ageTag.includes(value)){
                                setAgeTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(ageTag.length === 2){
                                    setAgeTag([]);
                                }else{
                                    setAgeTag(prevState => [...prevState, value]);
                                }
                            }
                        }}>26-34</Tag>
                        <Tag  active={ageTag.includes("35+")} onClick={() =>{
                             let value = "35+";
                             if(ageTag.includes(value)){
                                setAgeTag(prevState => prevState.filter(item => item != value));
                             }else{
                                 if(ageTag.length === 2){
                                     setAgeTag([]);
                                }else{
                                    setAgeTag(prevState => [...prevState, value]);
                                }
                             }
                        }}>35+</Tag>
                       
                    </div>
                </section>

                <section className="tagger-section">
                    <p className="section-header">Kou??en??</p>
                    <div className="section-tags">
                        <Tag  active={smokingTag === "Ku????k"} onClick={() => setSmokingTag(smokingTag === "Ku????k" ? "" : "Ku????k")}>Ku????k</Tag>
                        <Tag active={smokingTag === "Neku????k"} onClick={() => setSmokingTag(smokingTag === "Neku????k" ? "" : "Neku????k")}>Neku????k</Tag>
                    </div>
                </section>
                <section className="tagger-section">
                    <p className="section-header">Zam??stn??n??</p>
                    <div className="section-tags">
                        <Tag active={jobTag.includes("Zam??stnan??")} onClick={() =>{
                             let value = "Zam??stnan??";
                             if(jobTag.includes(value)){
                                 setJobTag(prevState => prevState.filter(item => item != value));
                             }else{
                                 if(jobTag.length === 2){
                                     setJobTag([]);
                                 }else{
                                    setJobTag(prevState => [...prevState, value]);
                                 }
                             }
                        }}>Zam??stnan??</Tag>
                        <Tag active={jobTag.includes("Nezam??stnan??")} onClick={() => {
                            let value = "Nezam??stnan??";
                            if(jobTag.includes(value)){
                                setJobTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(jobTag.length === 2){
                                    setJobTag([]);
                                }else{
                                    setJobTag(prevState => [...prevState, value]);
                                }
                            }
                        }}>Nezam??stnan??</Tag>
                        <Tag active={jobTag.includes("Student")} onClick={() => {
                            let value = "Student";
                            if(jobTag.includes(value)){
                                setJobTag(prevState => prevState.filter(item => item != value));
                            }else{
                                if(jobTag.length === 2){
                                    setJobTag([]);
                                }else{
                                    setJobTag(prevState => [...prevState, value]);
                                }
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
                                <Select label="Dispozice" onChange={e => setLayoutTag(e.target.value === "none" ? "" : e.target.value)} value={layoutTag ? layoutTag : "none"}>
                                    <MenuItem value={"none"}>Libovoln??</MenuItem>
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
                    <div className="section-header">V??tah</div>
                    <div className="section-tags">
                        <Tag active={elevatorTag === "V??tah"} onClick={() => setElevatorTag(elevatorTag === "V??tah" ? "" : "V??tah")} variant="box" icon="caret-square-up">Ano</Tag>
                        <Tag active={elevatorTag === "Bez v??tahu"} onClick={() => setElevatorTag(elevatorTag === "Bez v??tahu" ? "" : "Bez v??tahu")} variant="box" icon="caret-square-up">Ne</Tag>
                    </div>
                </section>

                <section className="tagger-section">
                    <div className="section-header">Internet</div>
                    <div className="section-tags">
                        <Tag active={internetTag === "Internet"} onClick={() => setInternetTag(internetTag === "Internet" ? "" : "Internet")} variant="box" icon="wifi">Ano</Tag>
                        <Tag active={internetTag === "Bez internetu"} onClick={() => setInternetTag(internetTag === "Bez internetu" ? "" : "Bez internetu")} variant="box" icon="wifi">Ne</Tag>
                    </div>
                </section>

            <section className="tagger-section">
                    <div className="section-header">Mazl????ci</div>
                    <div className="section-tags">
                        <Tag active={petAllowedTag === "Mazl????ci povoleno"} onClick={() => setPetAllowedTag(petAllowedTag === "Mazl????ci povoleno" ? "" : "Mazl????ci povoleno")} variant="box" icon="dog">Povoleno</Tag>
                        <Tag active={petAllowedTag === "Mazl????ci nepovoleno"} onClick={() => setPetAllowedTag(petAllowedTag === "Mazl????ci nepovoleno" ? "" : "Mazl????ci nepovoleno")} variant="box" icon="dog">Nepovoleno</Tag>
                    </div>
            </section>

            <section className="tagger-section">
                    <div className="section-header">Kou??en??</div>
                    <div className="section-tags">
                        <Tag active={smokingAllowedTag === "Kou??en?? povoleno"} onClick={() => setSmokingAllowedTag(smokingAllowedTag === "Kou??en?? povoleno" ? "" : "Kou??en?? povoleno")} variant="box" icon="smoking">Povoleno</Tag>
                        <Tag active={smokingAllowedTag === "Kou??en?? nepovoleno"} onClick={() => setSmokingAllowedTag(smokingAllowedTag === "Kou??en?? nepovoleno" ? "" : "Kou??en?? nepovoleno")} variant="box" icon="smoking">Nepovoleno</Tag>
                    </div>
            </section>
                    
                </>
                
                }
            <div className="tagger-button">
                <button onClick={() => handleAdd()} className="main-btn">P??idat tagy</button>
            </div>
        </div>
    )
}

export default Tagger
