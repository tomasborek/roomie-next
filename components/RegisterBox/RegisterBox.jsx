import React, {useState,  useRef} from 'react'
//React Router
import { useRouter } from 'next/dist/client/router';
//Framer motion
import {motion} from "framer-motion";
//Contexts
import {useAuth} from "../../contexts/AuthContext";
import { useDb } from '../../contexts/DbContext';
import { useLoading } from '../../contexts/LoadingContext';
import { useRegister } from '../../contexts/RegisterContext';


//Components
import LocationDropdown from '../LocationDropdown/LocationDropdown';
import ButtonsStep from '../RegistrationSteps/ButtonsStep/ButtonsStep';
import OptionsStep from '../RegistrationSteps/OptionsStep/OptionsStep';
//Material components
import Slider from "@mui/material/Slider";
import Alert from "@mui/material/Alert";
import { Button } from '@mui/material';
import DropdownStep from '../RegistrationSteps/DropdownStep/DropdownStep';
import RangeStep from '../RegistrationSteps/RangeStep/RangeStep';
import RegistrationFinal from '../RegistrationSteps/RegistrationFinal/RegistrationFinal';



const RegisterBox = () => {
    //Variables
    let router = useRouter();
    const {register, currentUser, deleteU} = useAuth();
    const {addUser, getListingByUser, createListing} = useDb();
    const [loading, setLoading] = useLoading();
    const {usernameRef, emailRef, phoneRef, passwordRef, dayRef, monthRef, yearRef} = useRegister();
    let uid;
    let listingIdVar;
    //State
    const [step, setStep] = useState(0);
    const [type, setType] = useState("");
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [error, setError] = useState(null);
    const [gender, setGender] = useState(null);
    const [location, setLocation] = useState(null);
    const [price, setPrice] = useState(20);
    const [listingId, setListingId] = useState("");
    //Action handle functions
    const registerHandle = () => {
        
        setError(null);
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const password = passwordRef.current.value;
        //Checks if all inputs are filled, throws an alert if not
       
        if(!checkIfFilled()){
            return;
        }
        setLoading(true);
       // setLoading(true);
        const birthday = `${dayRef.current.value}/${monthRef.current.value}/${yearRef.current.value}`;
        const age = ageCalc(dayRef.current.value, monthRef.current.value, yearRef.current.value);
        //Register then chain
        register(email, password)
        .then(user =>{
            console.log("Successful - registration");
            uid = user.user.uid;
            return user;
        }).then(user => {
            listingIdVar = idGenerator(type);
            setListingId(listingIdVar);
            return createListing(type, username, uid, gender, age, price, location, listingIdVar);
        }).then(res => {
            console.log("Succesful - listing");
            return addUser(username, gender, type, age, birthday, location, price, email, phone, listingIdVar, uid);
        }).then(doc => {
            console.log("Successful - db");
            setLoading(false);
            setStep(5);
        }).catch(error => {
            setLoading(false);
            console.log(error);
            switch(error.code){
                case "auth/email-already-in-use":
                    setError("Tento e-mail je nedostupný.");
                    break;
                case "auth/invalid-email":
                    setError("Zadejte prosím platný email.");
                    break;
                default:
                    setError("Registrace selhala. Zkuste to prosím za chvíli.");
            }
        }) 
     }

    const checkIfFilled = () => {
        usernameRef.current.classList.remove("error");
        emailRef.current.classList.remove("error");
        phoneRef.current.classList.remove("error");
        passwordRef.current.classList.remove("error");
        dayRef.current.classList.remove("error");
        yearRef.current.classList.remove("error");

        if(usernameRef.current.value === "" ){
            setError("Prosím zadejte své jméno.");
            usernameRef.current.classList.add("error");
            return false;
        }

        if(emailRef.current.value === "" ){
            setError("Prosím zadejte svůj email.");
            emailRef.current.classList.add("error");
            return false;
        }

        if(phoneRef.current.value === "" ){
            setError("Prosím zadejte své číslo.");
            phoneRef.current.classList.add("error");
            return false;
        }

        if(passwordRef.current.value === ""){
            setError("Prosím zadejte své heslo.");
            passwordRef.current.classList.add("error");
            return false;
        }

        if(dayRef.current.value === ""){
            setError("Prosím vyplňte datum narození,");
            dayRef.current.classList.add("error");
            return false;
        }

        

        if(yearRef.current.value === ""){
            setError("Prosím vyplňte datum narození");
            yearRef.current.classList.add("error");
            return false;
        }

        if(new Date().getFullYear() - yearRef.current.value <= 18){
            if(new Date().getFullYear() - yearRef.current.value == 18){
                if(new Date().getMonth() + 1 < monthRef.current.value){
                    setError("Pro přihlášení vám musí být alespoň 18 let.");
                    return false;
                }
            }else{
                setError("Pro přihlášení vám musí být alespoň 18 let.");
                return false;
            }

        }

        return true;
    };

    const ageCalc = (day, month, year) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDay = new Date().getDay();

    let age = currentYear - year;
        if(currentMonth + 1 <= month){
            if(month == currentMonth + 1){
                if(day => currentDay){
                    age++;
                    return age;
                }
            }else{
                age--;
                return age;
            }
            
        }else{
            return age;
        }
    }

    const finishReg = () => {
        let listingUrl;
       if(type === "offerer"){
           listingUrl = "flat"
       }else if(type === "flatmate"){
           listingUrl = "flatmate";
       }
       router.push(`/cr/${listingUrl}/${listingId}`);
    }

    const idGenerator = (type) => {
        let randomId = "";
        for(let i = 0; i <= 8; i++){
            randomId += Math.floor((Math.random() * 9));
        }
        type === "flatmate" ? randomId += "fm" : randomId += "f";
        return randomId;
    }
 
    return (
        <div className="register-box">

            
           {step === 0 && 
            <div className="box-content">
                <div className="content-img-container">
                    <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} src="/img/registration-steps/slide-img0.png" className="content-img" />
                </div>
                <h1 className="content-title">Co od Roomie očekáváte?</h1>
                <ButtonsStep setType={setType} setStep={setStep}/>
                <div className="void-fill"></div>
            </div>
           }

           {step === 1 &&
            <div className="box-content">
                <div className="content-img-container">
                <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} src="/img/registration-steps/slide-img1.png" className="content-img" />
                </div>
                 <h1 className="content-title">Jaké je Vaše pohlaví?</h1>
                 <OptionsStep setGender={setGender} gender={gender} setStep={setStep}/>
                 <div className="void-fill"></div>
            </div>
           }

           {step === 2 && type === "flatmate" &&
                <div className="box-content">
                    <div className="content-img-container">
                        <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} src="/img/registration-steps/slide-img2.png" className="content-img" />
                    </div>
                    <h1 className="content-title">Kde své bydlení hledáte?</h1>
                    <DropdownStep setIsDropdownActive={setIsDropdownActive} isDropdownActive={isDropdownActive} location={location} setLocation={setLocation} />
                    <button  disabled={!location} className={`acc-btn ${!location && "disabled"}`} onClick={() => setStep(3)}>Hotovo</button>
                </div>
           }

           {step === 2 && type === "offerer" &&
                 <div className="box-content">
                    <div className="content-img-container">
                        <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} src="/img/registration-steps/slide-img2.png" className="content-img" />
                    </div>
                    <h1 className="content-title">Kde své bydlení nabízíte?</h1>
                    <DropdownStep setIsDropdownActive={setIsDropdownActive} isDropdownActive={isDropdownActive} location={location} setLocation={setLocation} />
                    <button  disabled={!location} className={`acc-btn ${!location && "disabled"}`} onClick={() => setStep(3)}>Hotovo</button>
             </div>


           }

           {step === 3 && type === "flatmate" &&
                <div className="box-content">
                     <div className="content-img-container">
                        <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} src="/img/registration-steps/slide-img3.png" className="content-img" />
                    </div>
                     <h1 className="content-title">Jaký je váš maximální měsíční rozpočet na bydlení?</h1>
                        <RangeStep price={price} setPrice={setPrice} />
                        <button disabled={!price} onClick={() => setStep(4)} className={`acc-btn ${!price && "disabled"}`}>Hotovo</button>
                </div>
           }

                {step === 3 && type === "offerer" &&
                    <div className="box-content">
                        <div className="content-img-container">
                            <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}   src="/img/registration-steps/slide-img3.png" className="content-img" />
                        </div>
                        <h1 className="content-title">Kolik činí měsíční nájem pro případné zájemce?</h1>
                        <RangeStep price={price} setPrice={setPrice} />
                        <button disabled={!price} onClick={() => setStep(4)} className={`acc-btn ${!price && "disabled"}`}>Hotovo</button>
                </div>
           }
            

        {step === 4 && 
            <div className="box-content">
                <div className="void-fil"></div>
                {error && <Alert variant="filled" severity="error" sx={{width: "100%"}}>{error}</Alert>}
                <h1 className="content-title">Tohle je poslední, slibujeme!</h1>
                <RegistrationFinal />
                <button onClick={() => registerHandle()} disabled={loading} className={`acc-btn ${loading && "disabled"}`}>Registrovat</button>
            </div>
        }

        {step === 5 && 
            <div className="box-content">
                <div className="content-img-container">
                    <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} src="/img/registration-steps/slide-img5.png" className="content-img" />
                </div>
                <h1 className="content-title">Gratulujeme!</h1>
                <h1 className="content-welcome">Vítejte v roomie!</h1>
                <button onClick={finishReg} className="acc-btn">Jdeme na to!</button>
                <div className="void-fill"></div>
            </div>
        }

            
           

         

            <div className="box-steps" style={{display: step === 5 ? "none" : "flex"}}>
                <div
                 className={`dot ${step === 0 ? "active-dot" : ""}`}></div>
                <div onClick={() =>{
                    setStep(1);
                }} className={`dot ${step === 1 ? "active-dot" : ""}`}></div>
                <div onClick={() =>{
                    setStep(2);
                }} className={`dot ${step === 2 ? "active-dot" : ""}`}></div>
                <div onClick={() => {
                    setStep(3)
                }} className={`dot ${step === 3 ? "active-dot" : ""}`}></div>
                <div onClick={() => {
                    setStep(4)
                }} className={`dot ${step === 4 ? "active-dot" : ""}`}></div>
                </div>
               
                

           
            
        </div>
    )
}

export default RegisterBox
