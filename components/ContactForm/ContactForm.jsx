import React, {useState, useEffect, useRef} from 'react';
//COntexts
import {useSnackBar} from "../../contexts/SnackBarContext";
import {useFunctions} from "../../contexts/FunctionsContext";
//Components
//MUI
import {FormControl, InputLabel, Select, MenuItem, Backdrop} from "@mui/material"

const ContactForm = ({open, setOpen}) => {
        //COntexts
        const {snackBar} = useSnackBar();
        const {callable} = useFunctions();
        const [category, setCategory] = useState("");
        const [error, setError] = useState("");
        //Refs
        const name = useRef();
        const email = useRef();
        const message = useRef();
        const contactUs = callable("feedback-contactUs");

    const handleContact = () => {
        const contactInfo = {
            category,
            name: name.current.value,
            email: email.current.value,
            message: message.current.value
        }
        if(!contactInfo.category){
            setError("Prosím vyplňte všechny položky");
            return;
        }
        if(!contactInfo.name){
            setError("Prosím vyplňte všechny položky");
            return;
        }
        if(!contactInfo.email){
            setError("Prosím vyplňte všechny položky");
            return;
        }
        if(!contactInfo.message){
            setError("Prosím vyplňte všechny položky");
            return;
        }
        contactUs(JSON.stringify(contactInfo));
        setOpen(false);
        snackBar("Děkujeme za zaslání zpětné vazby.", "success");
    }

    useEffect(() => {
        if(error){
            snackBar(error, "error");
        }
    }, [error])
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <div className="home-contact-form">
            <div className="form-header">
                <div className="void-fill"></div>
                <i onClick={() => setContactForm(false)} className="fas fa-times"></i>
            </div>
            <div className="form-content">
                <h2 className="content-heading">Kontaktujte nás</h2>
                <div className="content-form">
                    <input ref={name} maxLength={30} placeholder="Vaše jméno..." className="form-item" type="text" />
                    <input ref={email} maxLength={60} placeholder="Váš e-mail..." className="form-item" type="text" />
                    <FormControl className="form-select form-item" size="small">
                        <InputLabel>Typ zprávy</InputLabel>
                        <Select defaultValue="" value={category ? category : ""} onChange={(e) => setCategory(e.target.value)} label="Typ zprávy">
                            <MenuItem value="Technický problém">Technický problém</MenuItem>
                            <MenuItem value="Stížnost">Stížnost</MenuItem>
                            <MenuItem value="Dotaz">Dotaz</MenuItem>
                        </Select>
                    </FormControl>
                    <textarea ref={message} maxLength={2000} placeholder="Obsah zprávy..." className="form-item form-textarea"></textarea>
                    <button onClick={handleContact} className="acc-btn form-button">Odeslat</button>
                </div>
            </div> 
        </div>
    </Backdrop>
  );
};

export default ContactForm;
