import React, {useState, useEffect} from 'react'
//Axios

//Components
import Tag from '../Tag/Tag';
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
        if(existingTags && !addedTags){
            setAddedTags(existingTags);
            existingTags.smoking && setSmokingTag(existingTags.smoking);
            existingTags.job && setJobTag(existingTags.job);
            existingTags.age && setAgeTag(existingTags.age);
            existingTags.gender && setGenderTag(existingTags.gender);
        }
    }, [existingTags])


    
    //Functions
    const handleAdd = () => {
        setAddedTags({
            gender: genderTag,
            age: ageTag,
            smoking: smokingTag,
            job: jobTag
        })
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
                        <Tag active={genderTag === "Muže"} onClick={() => genderTag == "Muže" ? setGenderTag("") : setGenderTag("Muže")}>Muže</Tag>
                        <Tag active={genderTag === "Ženu"} onClick={() => genderTag == "Ženu" ? setGenderTag("") : setGenderTag("Ženu")}>Ženu</Tag>
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
                        <Tag  active={smokingTag === "Kuřáka"} onClick={() => smokingTag == "Kuřáka" ? setSmokingTag("") : setSmokingTag("Kuřáka")}>Kuřáka</Tag>
                        <Tag active={smokingTag === "Nekuřáka"} onClick={() =>  smokingTag == "Nekuřáka" ? setSmokingTag("") : setSmokingTag("Nekuřáka")}>Nekuřáka</Tag>
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
                </>
                
                }
            <div className="tagger-button">
                <button onClick={() => handleAdd()} className="main-btn">Přidat tagy</button>
            </div>
        </div>
    )
}

export default Tagger
