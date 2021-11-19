import React from 'react'

const ButtonsStep = ({setType, setStep}) => {
    return (
        <div className="content-buttons">
            <button onClick={() => {
               setType("offerer");
                setStep(1);
            }} className="acc-btn">Hledám spolubydlícího</button>
            <button onClick={() => {
              setType("flatmate");
               setStep(1);
            }} className="main-btn">Hledám domov</button>
         </div>
    )
}

export default ButtonsStep
