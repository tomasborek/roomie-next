import React, {createContext, useContext, useState, useRef} from 'react'

const RegisterContext = createContext();

export const useRegister = () => {
    return useContext(RegisterContext);
}

export  function RegisterProvider(props) {
    const usernameRef = useRef();
    const [username, setUsername] = useState();
    const emailRef = useRef();
    const phoneRef = useRef();
    const phoneCodeRef = useRef();
    const passwordRef = useRef();
    const passwordCheckRef = useRef();
    const monthRef = useRef();
    const dayRef = useRef();
    const yearRef = useRef();
    const value = {
        usernameState: {username, setUsername},
        emailRef: emailRef,
        phoneRef: phoneRef,
        phoneCodeRef: phoneCodeRef,
        passwordRef: passwordRef,
        passwordCheckRef: passwordCheckRef,
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