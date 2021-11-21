import React, {useState, useEffect} from 'react'
import Tag from "../Tag/Tag";

//Components
//MUI
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

const Boxer = ({variant, existingBoxes, addedBoxes, setAddedBoxes, setBoxerOverlay}) => {
    //Person boxes
    const [smokingBox, setSmokingBox] = useState("");
    const [petBox, setPetBox] = useState("");
    const [jobBox, setJobBox] = useState("");
    const [childrenBox, setChildrenBox] = useState("");
    //Flat boxes
    const [layoutBox, setLayoutBox] = useState("");
    const [levelBox, setLevelBox] = useState("");
    const [petAllowedBox, setPetAllowedBox] = useState("");
    const [smokingAllowedBox, setSmokingAllowedBox] = useState("");
    const [locationBox, setLocationBox] = useState("");


    //Functions
    const handleSave = () => {
        if(variant === "person"){
            setAddedBoxes({
                smoking: smokingBox,
                job: jobBox,
                children: childrenBox,
                pet: petBox
            })
        }else if(variant === "flat"){
            setAddedBoxes( {
                layout: layoutBox,
                level: levelBox,
                petAllowed: petAllowedBox,
                smokingAllowed: smokingAllowedBox,
                location: locationBox
            })
        }
        setBoxerOverlay(false);
    }
       
        
    

    //Fills added boxes once existingBoxes are fetched
    useEffect(() => {
        if(existingBoxes && !addedBoxes){
            setAddedBoxes(existingBoxes);
            existingBoxes.smoking && setSmokingBox(existingBoxes.smoking);
            existingBoxes.pet && setPetBox(existingBoxes.pet);
            existingBoxes.children && setChildrenBox(existingBoxes.children);
            existingBoxes.job && setJobBox(existingBoxes.job);
        }
    }, [existingBoxes])
    useEffect(() => {
        if(existingBoxes && !addedBoxes){
            setAddedBoxes(existingBoxes);
            existingBoxes.layout && setLayoutBox(existingBoxes.layout);
            existingBoxes.level && setLevelBox(existingBoxes.level);
            existingBoxes.petAllowed && setLayoutBox(existingBoxes.petAllowed);
            existingBoxes.smokingAllowed && setLayoutBox(existingBoxes.smokingAllowed);
            existingBoxes.location && setLocationBox(existingBoxes.location);
            
        }
    }, [existingBoxes])
    //Return
    return (
        <div className="boxer">
            <div className="boxer-header">{variant === "person" ? "Přidat info o sobě..." : "Přidat info o bydlení..."}</div>
            {variant === "person" && existingBoxes &&
            <>
            <section className="boxer-section">
                    <div className="section-header">Kouření</div>
                    <div className="section-boxes">
                        <Tag active={smokingBox == "Kuřák"} onClick={() => setSmokingBox(smokingBox === "Kuřák" ? "" : "Kuřák")} variant="box" icon="smoking">Kuřák</Tag>
                        <Tag active={smokingBox == "Nekuřák"} onClick={() => setSmokingBox(smokingBox === "Nekuřák" ? "" : "Nekuřák")}  variant="box" icon="smoking">Nekuřák</Tag>
                    </div>
            </section>
            <section className="boxer-section">
                    <div className="section-header">Mazlíček</div>
                    <div className="section-boxes">
                        <Tag active={petBox == "Pes"} onClick={() => setPetBox(petBox === "Pes" ? "" : "Pes")} variant="box" icon="dog">Pes</Tag>
                        <Tag active={petBox == "Kočka"} onClick={() => setPetBox(petBox === "Kočka" ? "" : "Kočka")}  variant="box" icon="dog">Kočka</Tag>
                        <Tag active={petBox == "Jiné"} onClick={() => setPetBox(petBox === "Jiný" ? "" : "Jiné")}  variant="box" icon="dog">Jiné</Tag>
                        <Tag active={petBox == "Žádný"} onClick={() => setPetBox(petBox === "Žádný" ? "" : "Žádný")}  variant="box" icon="dog">Žádný</Tag>
                    </div>
            </section>
            <section className="boxer-section">
                    <div className="section-header">Zaměstnání</div>
                    <div className="section-boxes">
                        <Tag active={jobBox == "Zaměstnaný"} onClick={() => setJobBox(jobBox === "Zaměstnaný" ? "" : "Zaměstnaný")} variant="box" icon="graduation-cap">Zaměstnaný</Tag>
                        <Tag active={jobBox == "Nezaměstnaný"} onClick={() => setJobBox(jobBox === "Nezaměstnaný" ? "" : "Nezaměstnaný")}  variant="box" icon="graduation-cap">Nezaměstnaný</Tag>
                        <Tag active={jobBox == "Student"} onClick={() => setJobBox(jobBox === "Student" ? "" : "Student")}  variant="box" icon="graduation-cap">Student</Tag>
                    </div>
            </section>
            <section className="boxer-section">
                    <div className="section-header">Děti</div>
                    <div className="section-boxes">
                        <Tag active={childrenBox == "Ano"} onClick={() => setChildrenBox(childrenBox === "Ano" ? "" : "Ano")} variant="box" icon="baby-carriage">Ano</Tag>
                        <Tag active={childrenBox == "Ne"} onClick={() => setChildrenBox(childrenBox === "Ne" ? "" : "Ne")}  variant="box" icon="baby-carriage">Ne</Tag>
                    </div>
            </section>
            <div className="boxer-button">
                <button onClick={() => handleSave()} className="main-btn">Uložit info</button>
            </div>
            </>
            }
            {variant === "flat" && existingBoxes &&
            <>
             {/* <section className="boxer-section">
                    <div className="section-header"></div>
                    <div className="section-tags">
                        <Tag active={Box == ""} onClick={() => setBox(Box === "" ? "" : "")} variant="box" icon=""></Tag>
                    </div>
            </section> */}
            <section className="boxer-section">
                    <div className="section-header">Dispozice</div>
                    <div className="section-boxes">
                        {/* <Tag active={layoutBox == "2+1"} onClick={() => setLayoutBox(layoutBox === "2+1" ? "" : "2+1")} variant="box" icon="door-closed">2+1</Tag>
                        <Tag active={layoutBox == "2+kk"} onClick={() => setLayoutBox(layoutBox === "2+kk" ? "" : "2+kk")} variant="box" icon="door-closed">2+kk</Tag>
                        <Tag active={layoutBox == "3+1"} onClick={() => setLayoutBox(layoutBox === "3+1" ? "" : "3+1")} variant="box" icon="door-closed">3+1</Tag>
                        <Tag active={layoutBox == "3+kk"} onClick={() => setLayoutBox(layoutBox === "3+kk" ? "" : "3+kk")} variant="box" icon="door-closed">3+kk</Tag>
                        <Tag active={layoutBox == "4+1"} onClick={() => setLayoutBox(layoutBox === "4+1" ? "" : "4+1")} variant="box" icon="door-closed">4+1</Tag> */}
                         <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Dispozice</InputLabel>
                                <Select label="Dispozice" onChange={e => setLayoutBox(e.target.value)} defaultValue={existingBoxes.layout != "" && existingBoxes.layout}>
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

            <section className="boxer-section">
                    <div className="section-header">Podlaží</div>
                    <div className="section-boxes">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Podlaží</InputLabel>
                                <Select label="Podlaží" onChange={e => setLevelBox(e.target.value)} defaultValue={existingBoxes.level != "" && existingBoxes.level}>
                                    <MenuItem value={"1"}>1</MenuItem>
                                    <MenuItem value={"2"}>2</MenuItem>
                                    <MenuItem value={"3"}>3</MenuItem>
                                    <MenuItem value={"4"}>4</MenuItem>
                                    <MenuItem value={"5"}>5</MenuItem>
                                    <MenuItem value={"6"}>6</MenuItem>
                                    <MenuItem value={"7"}>7</MenuItem>
                                    <MenuItem value={"8"}>8</MenuItem>
                                    <MenuItem value={"9"}>9</MenuItem>
                                    <MenuItem value={"10"}>10+</MenuItem>
                                </Select>
                            </FormControl>
                    </div>
            </section>

            <section className="boxer-section">
                    <div className="section-header">Mazlíčci</div>
                    <div className="section-boxes">
                        <Tag active={petAllowedBox == "Povoleno"} onClick={() => setPetAllowedBox(petAllowedBox === "Povoleno" ? "" : "Povoleno")} variant="box" icon="dog">Povoleno</Tag>
                        <Tag active={petAllowedBox == "Nepovoleno"} onClick={() => setPetAllowedBox(petAllowedBox === "Nepovoleno" ? "" : "Nepovoleno")} variant="box" icon="dog">Nepovoleno</Tag>
                    </div>
            </section>

            <section className="boxer-section">
                    <div className="section-header">Kouření</div>
                    <div className="section-boxes">
                        <Tag active={smokingAllowedBox == "Povoleno"} onClick={() => setSmokingAllowedBox(smokingAllowedBox === "Povoleno" ? "" : "Povoleno")} variant="box" icon="smoking">Povoleno</Tag>
                        <Tag active={smokingAllowedBox == "Nepovoleno"} onClick={() => setSmokingAllowedBox(smokingAllowedBox === "Nepovoleno" ? "" : "Nepovoleno")} variant="box" icon="smoking">Nepovoleno</Tag>
                    </div>
            </section>
            <div className="boxer-button">
                <button onClick={() => handleSave()} className="main-btn">Uložit info</button>
            </div>
            </>
            }
            
        </div>
    )
}

export default Boxer
