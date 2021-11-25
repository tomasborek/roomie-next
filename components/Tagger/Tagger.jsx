import React, {useState, useEffect} from 'react'
//Axios

//Components
import Tag from '../Tag/Tag';
import LocationDropdown from "../LocationDropdown/LocationDropdown";
//Mui components
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';


const Tagger = ({addedTags,setAddedTags, setTagOverlay, existingTags, variant}) => {
    //Person state tags
    const [genderTag, setGenderTag] = useState("");
    const [ageTag, setAgeTag] = useState("");
    const [smokingTag, setSmokingTag] = useState("");
    const [jobTag, setJobTag] = useState("");
    //Flat state tags
    const [layoutTag, setLayoutTag] = useState("");
    const [levelTag, setLevelTag] = useState("");
    const [petAllowedTag, setPetAllowedTag] = useState("");
    const [smokingAllowedTag, setSmokingAllowedTag] = useState("");
    const [locationTag, setLocationTag] = useState("");


    //Effect
    useEffect(() => {
        if(existingTags && !addedTags && variant === "person"){
            setAddedTags(existingTags);
            existingTags.smoking && setSmokingTag(existingTags.smoking);
            existingTags.job && setJobTag(existingTags.job);
            existingTags.age && setAgeTag(existingTags.age);
            existingTags.gender && setGenderTag(existingTags.gender);
            existingTags.location && setLocationTag(existingTags.location);
        }
    }, [existingTags])

    useEffect(() => {
        if(existingTags && !addedTags && variant === "flat"){
            setAddedTags(existingTags);
            existingTags.location && setLocationTag(existingTags.location);
        }
    }, [existingTags])


    
    //Functions
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
                level: levelTag,
                petAllowed: petAllowedTag,
                smokingAllowed: smokingAllowedTag
            })
        }
       
        setTagOverlay(false);
    }
    return (
        <div className="tagger">
            <div className="tagger-header">Přidat tag</div>
            {variant === "person" &&
            <>
                <section className="tagger-section">
                    <p className="section-header">Pohlaví</p>
                    <div className="section-tags">
                        <Tag active={genderTag === "Muž"} onClick={() => genderTag == "Muž" ? setGenderTag("") : setGenderTag("Muž")}>Muž</Tag>
                        <Tag active={genderTag === "Žena"} onClick={() => genderTag == "Žena" ? setGenderTag("") : setGenderTag("Ženu")}>Žena</Tag>
                        <Tag active={genderTag === "Jiné"} onClick={() => genderTag == "Jiné" ? setGenderTag("") : setGenderTag("Jiné")}>Jiné</Tag>
                    </div>
                </section>
                <section className="tagger-section">
                    <p className="section-header">Věk</p>
                    <div className="section-tags">
                        <Tag active={ageTag === "18-25"} onClick={() => ageTag == "18-25" ? setAgeTag("") : setAgeTag("18-25")}>18-25</Tag>
                        <Tag  active={ageTag === "25-30"} onClick={() => ageTag == "25-30" ? setAgeTag("") : setAgeTag("25-30")}>25-30</Tag>
                        <Tag  active={ageTag === "30-35"} onClick={() => ageTag == "30-40" ? setAgeTag("") : setAgeTag("30-40")}>30-40</Tag>
                        <Tag  active={ageTag === "35-40"} onClick={() => ageTag == "40-50" ? setAgeTag("") : setAgeTag("40-50")}>35-45</Tag>
                        <Tag  active={ageTag === "40+"} onClick={() => ageTag == "50+" ? setAgeTag("") : setAgeTag("50+")}>50+</Tag>
                    </div>
                </section>
                <section className="tagger-section">
                    <p className="section-header">Kouření</p>
                    <div className="section-tags">
                        <Tag  active={smokingTag === "Kuřák"} onClick={() => smokingTag == "Kuřáka" ? setSmokingTag("") : setSmokingTag("Kuřák")}>Kuřák</Tag>
                        <Tag active={smokingTag === "Nekuřák"} onClick={() =>  smokingTag == "Nekuřáka" ? setSmokingTag("") : setSmokingTag("Nekuřák")}>Nekuřák</Tag>
                    </div>
                </section>
                <section className="tagger-section">
                    <p className="section-header">Zaměstnání</p>
                    <div className="section-tags">
                        <Tag active={jobTag === "Zaměstnaný"} onClick={() => setJobTag(jobTag === "Zaměstnaný" ? "" : "Zaměstnaný")}>Zaměstnaný</Tag>
                        <Tag active={jobTag === "Nezaměstnaný"} onClick={() => setJobTag(jobTag === "Nezaměstnaný" ? "" : "Nezaměstnaný")}>Nezaměstnaný</Tag>
                        <Tag active={jobTag === "Student"} onClick={() => setJobTag(jobTag === "Student" ? "" : "Student")}>Student</Tag>
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
                                <Select label="Dispozice" onChange={e => setLayoutTag(e.target.value)} defaultValue={existingTags && existingTags.layout != "" && existingTags.layout}>
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
                        <div className="section-header">Podlaží</div>
                        <div className="section-tags">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Podlaží</InputLabel>
                                    <Select label="Podlaží" onChange={e => setLevelTag(e.target.value)} defaultValue={existingTags && existingTags.level != "" && existingTags.level}>
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

            <section className="tagger-section">
                    <div className="section-header">Mazlíčci</div>
                    <div className="section-tags">
                        <Tag active={petAllowedTag == "Mazlíčci povoleno"} onClick={() => setPetAllowedTag(petAllowedTag === "Mazlíčci povoleno" ? "" : "Mazlíčci povoleno")} variant="box" icon="dog">Povoleno</Tag>
                        <Tag active={petAllowedTag == "Mazlíčci nepovoleno"} onClick={() => setPetAllowedTag(petAllowedTag === "Mazlíčci nepovoleno" ? "" : "Mazlíčci nepovoleno")} variant="box" icon="dog">Nepovoleno</Tag>
                    </div>
            </section>

            <section className="tagger-section">
                    <div className="section-header">Kouření</div>
                    <div className="section-tags">
                        <Tag active={smokingAllowedTag == "Kouření povoleno"} onClick={() => setSmokingAllowedTag(smokingAllowedTag === "Kouření povoleno" ? "" : "Kouření povoleno")} variant="box" icon="smoking">Povoleno</Tag>
                        <Tag active={smokingAllowedTag == "Kouření nepovoleno"} onClick={() => setSmokingAllowedTag(smokingAllowedTag === "Kouření nepovoleno" ? "" : "Kouření nepovoleno")} variant="box" icon="smoking">Nepovoleno</Tag>
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
