import React, {createContext, useContext, useState} from 'react'

const LoadingContext = createContext();
export const useLoading = () => {
    return useContext(LoadingContext);
}


export function LoadingProvider(props) {
    const [loading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider value={[loading, setLoading]}>
            {props.children}
        </LoadingContext.Provider>
    )
}
