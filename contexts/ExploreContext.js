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
    const [premiumFlatmateSnaps, setPremiumFlatmateSnaps] = useState(null);
    const [premiumFlatSnaps, setPremiumFlatSnaps] = useState(null);
    const [activeFilters, setActiveFilters] = useState({});
    const [flatmatePage, setFlatmatePage] = useState(1);
    const [flatPage, setFlatPage] = useState(1);
    const [currentVariant, setCurrentVariant] = useState(null);
    const value = {
        flatListingsValue: [flatListings, setFlatListings],
        flatmateListingsValue: [flatmateListings, setFlatmateListings],
        flatSnapsValue: [flatSnaps, setFlatSnaps],
        flatmateSnapsValue: [flatmateSnaps, setFlatmateSnaps],
        premiumFlatSnapsValue: [premiumFlatSnaps, setPremiumFlatSnaps],
        premiumFlatmateSnapsValue: [premiumFlatmateSnaps, setPremiumFlatmateSnaps],
        activeFiltersValue: [activeFilters, setActiveFilters],
        flatmatePageValue: [flatmatePage, setFlatmatePage],
        flatPageValue: [flatPage, setFlatPage],
        currentVariantValue: [currentVariant, setCurrentVariant],

    }
    return (
        <ExploreContext.Provider value={value}>
            {children}
        </ExploreContext.Provider>
    )
}