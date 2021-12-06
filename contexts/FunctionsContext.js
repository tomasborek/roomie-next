import React, {useContext, createContext} from 'react'
//Firebase
import { functions } from '../Firebase';
import { httpsCallable } from '@firebase/functions';
const FunctionsContext = createContext();
export const useFunctions = () => {
    return useContext(FunctionsContext);
}

const FunctionsProvider = ({children}) => {

    const callable = (name) => {
        return httpsCallable(functions, name);
    }

    const value = {
        callable
    }
    return (
        <FunctionsContext.Provider value={value}>
            {children}
        </FunctionsContext.Provider>
    )
}

export default FunctionsProvider
