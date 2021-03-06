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
    const [sizeBox, setSizeBox] = useState("");
    const [elevatorBox, setElevatorBox] = useState("");
    const [internetBox, setInternetBox] = useState("");


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
                size: sizeBox,
                location: locationBox,
                elevator: elevatorBox,
                internet: internetBox,
            })
        }
        setBoxerOverlay(false);
    }
       
        
    const fillAddedBoxes = () => {
        if(variant === "person"){
            setAddedBoxes(existingBoxes);
            existingBoxes.smoking && setSmokingBox(existingBoxes.smoking);
            existingBoxes.pet && setPetBox(existingBoxes.pet);
            existingBoxes.children && setChildrenBox(existingBoxes.children);
            existingBoxes.job && setJobBox(existingBoxes.job);
        }
        if(variant === "flat"){
            setAddedBoxes(existingBoxes);
            existingBoxes.layout && setLayoutBox(existingBoxes.layout);
            existingBoxes.level && setLevelBox(existingBoxes.level);
            existingBoxes.petAllowed && setPetAllowedBox(existingBoxes.petAllowed);
            existingBoxes.smokingAllowed && setSmokingAllowedBox(existingBoxes.smokingAllowed);
            existingBoxes.location && setLocationBox(existingBoxes.location);
            existingBoxes.size && setSizeBox(existingBoxes.size);
            existingBoxes.internet && setInternetBox(existingBoxes.internet);
            existingBoxes.elevator && setElevatorBox(existingBoxes.elevator);
        }
    }

    //Fills added boxes once existingBoxes are fetched
    useEffect(() => {
        if(existingBoxes && !addedBoxes){
           fillAddedBoxes();
        }
    }, [existingBoxes])

    //Return
    return (
        <div className="boxer">
            <i onClick={() => setBoxerOverlay(false)} className="boxer-close fas fa-times"></i>
            <div className="boxer-header">{variant === "person" ? "P??idat info o sob??..." : "P??idat info o bydlen??..."}</div>
            {(variant === "person" && existingBoxes) &&
            <>
            <section className="boxer-section">
                    <div className="section-header">Kou??en??</div>
                    <div className="section-boxes">
                        <Tag active={smokingBox == "Ku????k"} onClick={() => setSmokingBox(smokingBox === "Ku????k" ? "" : "Ku????k")} variant="box" icon="smoking">Ku????k</Tag>
                        <Tag active={smokingBox == "Neku????k"} onClick={() => setSmokingBox(smokingBox === "Neku????k" ? "" : "Neku????k")}  variant="box" icon="smoking">Neku????k</Tag>
                    </div>
            </section>
            <section className="boxer-section">
                    <div className="section-header">Mazl????ek</div>
                    <div className="section-boxes">
                        <Tag active={petBox == "Pes"} onClick={() => setPetBox(petBox === "Pes" ? "" : "Pes")} variant="box" icon="dog">Pes</Tag>
                        <Tag active={petBox == "Ko??ka"} onClick={() => setPetBox(petBox === "Ko??ka" ? "" : "Ko??ka")}  variant="box" icon="dog">Ko??ka</Tag>
                        <Tag active={petBox == "Jin??"} onClick={() => setPetBox(petBox === "Jin??" ? "" : "Jin??")}  variant="box" icon="dog">Jin??</Tag>
                        <Tag active={petBox == "????dn??"} onClick={() => setPetBox(petBox === "????dn??" ? "" : "????dn??")}  variant="box" icon="dog">????dn??</Tag>
                    </div>
            </section>
            <section className="boxer-section">
                    <div className="section-header">Zam??stn??n??</div>
                    <div className="section-boxes">
                        <Tag active={jobBox == "Zam??stnan??"} onClick={() => setJobBox(jobBox === "Zam??stnan??" ? "" : "Zam??stnan??")} variant="box" icon="graduation-cap">Zam??stnan??</Tag>
                        <Tag active={jobBox == "Nezam??stnan??"} onClick={() => setJobBox(jobBox === "Nezam??stnan??" ? "" : "Nezam??stnan??")}  variant="box" icon="graduation-cap">Nezam??stnan??</Tag>
                        <Tag active={jobBox == "Student"} onClick={() => setJobBox(jobBox === "Student" ? "" : "Student")}  variant="box" icon="graduation-cap">Student</Tag>
                    </div>
            </section>
            <section className="boxer-section">
                    <div className="section-header">D??ti</div>
                    <div className="section-boxes">
                        <Tag active={childrenBox == "Ano"} onClick={() => setChildrenBox(childrenBox === "Ano" ? "" : "Ano")} variant="box" icon="baby-carriage">Ano</Tag>
                        <Tag active={childrenBox == "Ne"} onClick={() => setChildrenBox(childrenBox === "Ne" ? "" : "Ne")}  variant="box" icon="baby-carriage">Ne</Tag>
                    </div>
            </section>
            <div className="boxer-button">
                <button onClick={() => handleSave()} className="main-btn">Ulo??it info</button>
            </div>
            </>
            }
            {(variant === "flat" && existingBoxes) &&
            <>
            
            <section className="boxer-section">
                    <div className="section-header">Dispozice</div>
                    <div className="section-boxes">
                     
                         <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Dispozice</InputLabel>
                                <Select label="Dispozice" onChange={e => setLayoutBox(e.target.value)} defaultValue={existingBoxes.layout != "" && existingBoxes.layout}>
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

            <section className="boxer-section">
                    <div className="section-header">Podla????</div>
                    <div className="section-boxes">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Podla????</InputLabel>
                                <Select label="Podla????" onChange={e => setLevelBox(e.target.value)} defaultValue={existingBoxes.level ? existingBoxes.level : ""}>
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
                <div className="section-header">Velikost</div>
                <div className="section-boxes">
                <div className="boxes-size-input">
                            <input type="number" value={sizeBox} onChange={e => setSizeBox(e.target.value)} maxLength={5} />
                            <p>m<sup>2</sup></p>
                        </div>
                </div>
            </section>

            <section className="boxer-section">
                <div className="section-header">V??tah</div>
                <div className="section-boxes">
                    <Tag active={elevatorBox == "Ano"} onClick={() => setElevatorBox(elevatorBox === "Ano" ? "" : "Ano")} variant="box" icon="caret-square-up">Ano</Tag>
                    <Tag active={elevatorBox == "Ne"} onClick={() => setElevatorBox(elevatorBox === "Ne" ? "" : "Ne")} variant="box" icon="caret-square-up">Ne</Tag>
                </div>
            </section>

            <section className="boxer-section">
                <div className="section-header">Internet</div>
                <div className="section-boxes">
                    <Tag active={internetBox == "Ano"} onClick={() => setInternetBox(internetBox === "Ano" ? "" : "Ano")} variant="box" icon="wifi">Ano</Tag>
                    <Tag active={internetBox == "Ne"} onClick={() => setInternetBox(internetBox === "Ne" ? "" : "Ne")} variant="box" icon="wifi">Ne</Tag>
                </div>
            </section>

            <section className="boxer-section">
                    <div className="section-header">Mazl????ci</div>
                    <div className="section-boxes">
                        <Tag active={petAllowedBox == "Povoleno"} onClick={() => setPetAllowedBox(petAllowedBox === "Povoleno" ? "" : "Povoleno")} variant="box" icon="dog">Povoleno</Tag>
                        <Tag active={petAllowedBox == "Nepovoleno"} onClick={() => setPetAllowedBox(petAllowedBox === "Nepovoleno" ? "" : "Nepovoleno")} variant="box" icon="dog">Nepovoleno</Tag>
                    </div>
            </section>

            <section className="boxer-section">
                    <div className="section-header">Kou??en??</div>
                    <div className="section-boxes">
                        <Tag active={smokingAllowedBox == "Povoleno"} onClick={() => setSmokingAllowedBox(smokingAllowedBox === "Povoleno" ? "" : "Povoleno")} variant="box" icon="smoking">Povoleno</Tag>
                        <Tag active={smokingAllowedBox == "Nepovoleno"} onClick={() => setSmokingAllowedBox(smokingAllowedBox === "Nepovoleno" ? "" : "Nepovoleno")} variant="box" icon="smoking">Nepovoleno</Tag>
                    </div>
            </section>
            <div className="boxer-button">
                <button onClick={() => handleSave()} className="main-btn">Ulo??it info</button>
            </div>
            </>
            }
            
        </div>
    )
}

export default Boxer
