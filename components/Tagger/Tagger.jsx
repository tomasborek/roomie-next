import React, {useState, useEffect} from 'react'
//Axios

//Components
import Tag from '../Tag/Tag';
import LocationDropdown from "../LocationDropdown/LocationDropdown";
//Mui components


const Tagger = ({addedTags,setAddedTags, setTagOverlay, existingTags, variant}) => {
    //Person state tags
    const [genderTag, setGenderTag] = useState("");
    const [ageTag, setAgeTag] = useState("");
    const [smokingTag, setSmokingTag] = useState("");
    const [jobTag, setJobTag] = useState("");
    //Flat state tags
    const [locationTag, setLocationTag] = useState(null);
    const [sizeTag, setSizeTag] = useState(null);
    const [roomTag, setRoomTag] = useState(null);
    const [mhdTag, setMhdTag] = useState(null);
    const [parkingTag, setParkingTag] = useState(null);


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
                location: locationTag
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
                    
                </>
                
                }
            <div className="tagger-button">
                <button onClick={() => handleAdd()} className="main-btn">Přidat tagy</button>
            </div>
        </div>
    )
}

export default Tagger
