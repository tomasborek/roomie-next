import React, {createContext, useContext, useState} from 'react'

const NavOverlayContext = createContext();

export const useNavOverlay = () => {
    return useContext(NavOverlayContext);
}

export function NavOverlayProvider(props) {
    const [navOverlay, setNavOverlay] = useState(false);
    return (
        <NavOverlayContext.Provider value={[navOverlay, setNavOverlay]}>
            {props.children}
        </NavOverlayContext.Provider>
    )
}
