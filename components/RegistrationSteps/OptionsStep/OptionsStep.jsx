import React from 'react'

const OptionsStep = ({setGender,gender, setStep}) => {
    return (
        <div className="content-options">
            <div onClick={() => {
                setGender("male");
                setStep(2);
            }} className={`option ${gender === "male" ? "active-option" : ""}`}>
                <i className="fas fa-male"></i>
                <p>Muž</p>
            </div>
            <div onClick={() => {
                setGender("female");
                setStep(2);
            }}className={`option ${gender === "female" ? "active-option" : ""}`}>
                <i className="fas fa-female"></i>
                <p>Žena</p>
            </div>
            <div onClick={() => {
                setGender("other");
                setStep(2);
            }} className={`option ${gender === "other" ? "active-option" : ""}`}>
                <i className="fas fa-genderless"></i>
                <p>Jiné</p>
            </div>

        </div>
    )
}

export default OptionsStep
