import React, {createContext, useContext, useState, useRef} from 'react'

const RegisterContext = createContext();

export const useRegister = () => {
    return useContext(RegisterContext);
}

export  function RegisterProvider(props) {
    const usernameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const monthRef = useRef();
    const dayRef = useRef();
    const yearRef = useRef();
    const value = {
        usernameRef: usernameRef,
        emailRef: emailRef,
        phoneRef: phoneRef,
        passwordRef: passwordRef,
        dayRef: dayRef,
        monthRef: monthRef,
        yearRef: yearRef
    }
    return (
        <RegisterContext.Provider value={value}>
            {props.children}
        </RegisterContext.Provider>
    )
}