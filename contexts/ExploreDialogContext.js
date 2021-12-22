import React, {useContext, createContext , useState} from 'react'
const ExploreDialogContext = createContext();
export const useExploreDialog = () => {
    return useContext(ExploreDialogContext);
}

export const ExploreDialogProvider = ({children}) => {
    const [exploreDialog, setExploreDialog] = useState(false);
    return (
        <ExploreDialogContext.Provider value={[exploreDialog, setExploreDialog]}>
            {children}
        </ExploreDialogContext.Provider>
    )
}

