import React, {useContext, createContext , useState} from 'react'
const ExploreContext = createContext();
export const useExplore  = () => {
    return useContext(ExploreContext);
}

export const ExploreProvider = ({children}) => {
    const [flatListings, setFlatListings ] = useState(null);
    const [flatmateListings, setFlatmateListings ] = useState(null);
    const [flatSnaps, setFlatSnaps] = useState(null);
    const [flatmateSnaps, setFlatmateSnaps] = useState(null);
    const [activeFilters, setActiveFilters] = useState({});
    const [flatmatePage, setFlatmatePage] = useState(1);
    const [flatPage, setFlatPage] = useState(1);
    const value = {
        flatListingsValue: [flatListings, setFlatListings],
        flatmateListingsValue: [flatmateListings, setFlatmateListings],
        flatSnapsValue: [flatSnaps, setFlatSnaps],
        flatmateSnapsValue: [flatmateSnaps, setFlatmateSnaps],
        activeFiltersValue: [activeFilters, setActiveFilters],
        flatmatePageValue: [flatmatePage, setFlatmatePage],
        flatPageValue: [flatPage, setFlatPage],

    }
    return (
        <ExploreContext.Provider value={value}>
            {children}
        </ExploreContext.Provider>
    )
}