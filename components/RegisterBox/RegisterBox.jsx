import React, { useState, useRef } from "react";
//React Router
import { useRouter } from "next/dist/client/router";
//Framer motion
import { motion } from "framer-motion";
//Contexts
import { useAuth } from "../../contexts/AuthContext";
import { useDb } from "../../contexts/DbContext";
import { useLoading } from "../../contexts/LoadingContext";
import { useRegister } from "../../contexts/RegisterContext";
import { useFunctions } from "../../contexts/FunctionsContext";

//Components
import LocationDropdown from "../LocationDropdown/LocationDropdown";
import ButtonsStep from "../RegistrationSteps/ButtonsStep/ButtonsStep";
import OptionsStep from "../RegistrationSteps/OptionsStep/OptionsStep";
//Material components
import Slider from "@mui/material/Slider";
import Alert from "@mui/material/Alert";
import { Button, easing } from "@mui/material";
import DropdownStep from "../RegistrationSteps/DropdownStep/DropdownStep";
import RangeStep from "../RegistrationSteps/RangeStep/RangeStep";
import RegistrationFinal from "../RegistrationSteps/RegistrationFinal/RegistrationFinal";
import NameStep from "../RegistrationSteps/NameStep/NameStep";

const RegisterBox = () => {
  //Variables
  let router = useRouter();
  const { register, currentUser, updateCurrentUserData } = useAuth();
  const [loading, setLoading] = useLoading();
  const {
    usernameState,
    emailRef,
    phoneRef,
    phoneCodeRef,
    passwordRef,
    passwordCheckRef,
    dayRef,
    monthRef,
    yearRef,
    termsAgreementRef,
    emailMarketingRef,
  } = useRegister();
  const { callable } = useFunctions();
  let uid;
  let listingIdVar;
  //State
  const [step, setStep] = useState(0);
  const [type, setType] = useState("");
  const [error, setError] = useState(null);
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState(null);
  const [price, setPrice] = useState(20000);
  const [listingId, setListingId] = useState("");
  //Functions
  const createUser = callable("onCreatedUser-createUser");
  const createListing = callable("onCreatedUser-createListing");

  //Action handle functions
  const registerHandle = () => {
    let userObject;
    //Reset error
    setError(null);
    //Refs trim
    emailRef.current.value = emailRef.current.value.trim();
    phoneRef.current.value = phoneRef.current.value.trim();
    // Age and bday
    const birthday = new Date(
      yearRef.current.value,
      monthRef.current.value,
      dayRef.current.value
    );
    const age = ageCalc(birthday);
    if (!checkIfFilled(age)) return;
    //Set loading on
    setLoading(true);
    //Variables
    //Refs variables
    const username = usernameState.username.trim();
    const email = emailRef.current.value;
    const phoneNumber = phoneRef.current.value;
    const phoneCode = phoneCodeRef.current.value;
    const phone = `${phoneCode}${phoneNumber}`;
    const password = passwordRef.current.value;

    const listingIdVar = idGenerator(type);
    setListingId(listingIdVar);
    //Auth register
    register(email, password)
      .then((user) => {
        userObject = user.user;
        const uid = user.user.uid;
        const userInfo = {
          username,
          age,
          gender,
          birthday,
          location,
          type,
          email,
          phone,
          sendEmails: emailMarketingRef.current.checked,
          listingId: listingIdVar,
          uid,
        };
        const listingInfo = {
          username,
          age,
          gender,
          type,
          listingId: listingIdVar,
          contact: {
            email: email,
            phone: phone,
            ig: "",
            fb: "",
          },
          uid,
          money: price,
          location,
        };
        createUser(userInfo)
          .then((response) => {
            return createListing(listingInfo);
          })
          .then((response) => {
            setLoading(false);
            setStep(6);
            updateCurrentUserData(userObject);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        setLoading(false);
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("Tento e-mail je nedostupn??.");
            break;
          case "auth/invalid-email":
            setError("Zadejte pros??m platn?? email.");
            break;
          default:
            setError("Registrace selhala. Zkuste to pros??m za chv??li.");
            break;
        }
      });
  };

  const checkIfFilled = (age) => {
    emailRef.current.classList.remove("error");
    phoneRef.current.classList.remove("error");
    passwordRef.current.classList.remove("error");
    passwordCheckRef.current.classList.remove("error");
    dayRef.current.classList.remove("error");
    yearRef.current.classList.remove("error");

    if (!termsAgreementRef.current.checked) {
      setError(
        "Pro pokra??ov??n?? pros??m za??krtn??te souhlas s obchodn??mi podm??nkami."
      );
      return false;
    }

    if (emailRef.current.value == null || emailRef.current.value.length < 4) {
      setError("Pros??m zadejte sv??j email.");
      emailRef.current.classList.add("error");
      return false;
    }

    if (
      phoneRef.current.value == null ||
      phoneRef.current.value.match(/^[0-9]+$/) == null ||
      phoneRef.current.value.length < 9
    ) {
      setError("Pros??m zadejte sv?? ????slo.");
      phoneRef.current.classList.add("error");
      return false;
    }

    if (passwordRef.current.value == null) {
      setError("Pros??m zadejte sv?? heslo.");
      passwordRef.current.classList.add("error");
      return false;
    } else if (passwordRef.current.value.length < 7) {
      setError("Pros??m zadejte heslo dlouh?? alespo?? 7 znak??.");
      passwordRef.current.classList.add("error");
      return false;
    }

    if (passwordRef.current.value != passwordCheckRef.current.value) {
      setError("Hesla se neshoduj??.");
      passwordRef.current.classList.add("error");
      passwordCheckRef.current.classList.add("error");
      passwordRef.current.value = "";
      passwordCheckRef.current.value = "";
      return false;
    }

    if (dayRef.current.value == 31) {
      const month = monthRef.current.value;
      if (month == 1 || month == 3 || month == 5 || month == 8 || month == 10) {
        setError("Zadejte pros??m re??ln?? datum.");
        dayRef.current.classList.add("error");
        return false;
      }
    }

    if (dayRef.current.value > 29) {
      if (monthRef.current.value == 1) {
        setError("Zadejte pros??m re??ln?? datum.");
        return false;
      }
    }

    if (age < 18) {
      setError("Pro p??ihl????en?? v??m mus?? b??t alespo?? 18 let.");
      return false;
    }

    //State
    if (!type || !gender || !location) {
      setError("N??kter?? z p??edchoz??ch ot??zek nen?? vypln??n??.");
      return false;
    }
    return true;
  };

  const ageCalc = (birthday) => {
    let today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  };

  const finishReg = () => {
    let listingUrl;
    if (type === "offerer") {
      listingUrl = "flat";
    } else if (type === "flatmate") {
      listingUrl = "flatmate";
    }
    router.push(`/cr/${listingUrl}/${listingId}`);
  };

  const idGenerator = (type) => {
    let randomId = "";
    for (let i = 0; i <= 8; i++) {
      randomId += Math.floor(Math.random() * 9);
    }
    type === "flatmate" ? (randomId += "fm") : (randomId += "f");
    return randomId;
  };

  return (
    <div className="register-box">
      {step === 0 && (
        <div className="box-content">
          <div className="content-img-container">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/img/registration-steps/slide-img0.png"
              className="content-img"
            />
          </div>
          <h1 className="content-title">Co od Roomie o??ek??v??te?</h1>
          <ButtonsStep setType={setType} setStep={setStep} />
          <div className="void-fill"></div>
        </div>
      )}

      {step === 1 && (
        <div className="box-content">
          <div className="content-img-container">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/img/registration-steps/slide-img1.png"
              className="content-img"
            />
          </div>
          <h1 className="content-title">Jak?? je Va??e pohlav???</h1>
          <OptionsStep
            setGender={setGender}
            gender={gender}
            setStep={setStep}
          />
          <div className="void-fill"></div>
        </div>
      )}

      {step === 2 && type === "flatmate" && (
        <div className="box-content">
          <div className="content-img-container">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/img/registration-steps/slide-img2.png"
              className="content-img"
            />
          </div>
          <h1 className="content-title">Kde sv?? bydlen?? hled??te?</h1>
          <DropdownStep location={location} setLocation={setLocation} />
          <button
            disabled={!location}
            className={`acc-btn ${!location && "disabled"}`}
            onClick={() => setStep(3)}
          >
            Hotovo
          </button>
        </div>
      )}

      {step === 2 && type === "offerer" && (
        <div className="box-content">
          <div className="content-img-container">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/img/registration-steps/slide-img2.png"
              className="content-img"
            />
          </div>
          <h1 className="content-title">Kde sv?? bydlen?? nab??z??te?</h1>
          <DropdownStep location={location} setLocation={setLocation} />
          <button
            disabled={!location}
            className={`acc-btn ${!location && "disabled"}`}
            onClick={() => setStep(3)}
          >
            Hotovo
          </button>
        </div>
      )}

      {step === 3 && type === "flatmate" && (
        <div className="box-content">
          <div className="content-img-container">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/img/registration-steps/slide-img3.png"
              className="content-img"
            />
          </div>
          <h1 className="content-title">
            Jak?? je v???? maxim??ln?? m??s????n?? rozpo??et na bydlen???
          </h1>
          <RangeStep price={price} setPrice={setPrice} />
          <button
            disabled={!price || price < 1000 || price > 60000}
            onClick={() => setStep(4)}
            className={`acc-btn ${
              (!price || price < 1000 || price > 60000) && "disabled"
            }`}
          >
            Hotovo
          </button>
        </div>
      )}

      {step === 3 && type === "offerer" && (
        <div className="box-content">
          <div className="content-img-container">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/img/registration-steps/slide-img3.png"
              className="content-img"
            />
          </div>
          <h1 className="content-title">
            Kolik ??inn?? m??s????n?? n??jem pro p????padn?? z??jemce?
          </h1>
          <RangeStep price={price} setPrice={setPrice} />
          <button
            disabled={!price || price < 1000 || price > 60000}
            onClick={() => setStep(4)}
            className={`acc-btn ${
              (!price || price < 1000 || price > 60000) && "disabled"
            }`}
          >
            Hotovo
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="box-content">
          <div className="content-img-container">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/img/registration-steps/slide-img4.png"
              className="content-img"
            />
          </div>
          <h1 className="content-title">Jak v??m m??me ????kat?</h1>
          <NameStep
            setName={usernameState.setUsername}
            name={usernameState.username}
          />
          <button
            onClick={() => setStep(5)}
            disabled={
              !usernameState.username || usernameState.username.length < 3
            }
            className={`acc-btn ${
              (!usernameState.username || usernameState.username.length < 3) &&
              "disabled"
            }`}
          >
            Hotovo
          </button>
        </div>
      )}

      {step === 5 && (
        <div className="box-content">
          <div className="void-fil"></div>
          {error && (
            <Alert
              variant="filled"
              severity="error"
              sx={{ width: "100%", fontSize: "14px" }}
            >
              {error}
            </Alert>
          )}
          {!error ? (
            <h1 className="content-title">Tohle je posledn??, slibujeme!</h1>
          ) : (
            ""
          )}

          <RegistrationFinal />
          <button
            onClick={() => registerHandle()}
            disabled={loading}
            className={`acc-btn ${loading && "disabled"}`}
          >
            Registrovat
          </button>
        </div>
      )}

      {step === 6 && (
        <div className="box-content">
          <div className="content-img-container">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/img/registration-steps/slide-img6.png"
              className="content-img"
            />
          </div>
          <h1 className="content-title">Gratulujeme!</h1>
          <h1 className="content-welcome">V??tejte v roomie!</h1>
          <button onClick={finishReg} className="acc-btn">
            Jdeme na to!
          </button>
          <div className="void-fill"></div>
        </div>
      )}

      <div
        className="box-steps"
        style={{ display: step === 6 ? "none" : "flex" }}
      >
        <div className={`dot ${step === 0 ? "active-dot" : ""}`}></div>
        <div
          onClick={() => {
            if (step > 1) setStep(1);
          }}
          className={`dot ${step === 1 ? "active-dot" : ""}`}
        ></div>
        <div
          onClick={() => {
            if (step > 2) setStep(2);
          }}
          className={`dot ${step === 2 ? "active-dot" : ""}`}
        ></div>
        <div
          onClick={() => {
            if (step > 3) setStep(3);
          }}
          className={`dot ${step === 3 ? "active-dot" : ""}`}
        ></div>
        <div
          onClick={() => {
            if (step > 4) setStep(4);
          }}
          className={`dot ${step === 4 ? "active-dot" : ""}`}
        ></div>
        <div
          onClick={() => {
            if (step > 5) setStep(5);
          }}
          className={`dot ${step === 5 ? "active-dot" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default RegisterBox;
