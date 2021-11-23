import React, {createContext, useContext} from 'react'
const ListingContext = createContext();
export const useListing = () => {
    return useContext(ListingContext);
}
export const ListingProvider = ({children}) => {
    //Functions
    const handleSave = () => {
        setLoading(true);
        if(!stayTime || stayTime == ""){
            snackBar("Prosíme vyplňte všechny důležité údaje.", "error");
            setLoading(false);
            window.scrollTo(0,0);
            return;
        }
        if(!startTime || startTime == ""){
            snackBar("Prosíme vyplňte všechny důležité údaje.", "error");
            setLoading(false);
            window.scrollTo(0,0);
            return;
        }
        updateListing(id, {
            mainInfo: {
                budget: budget,
                startTime: startTime,
                stayTime: stayTime
            },
            personBoxes: addedPersonBoxes,
            personTags: addedPersonTags,
            flatTags: addedFlatTags,
            bio: bioRef.current.value
        })
        .then(res => {
            setLoading(false);
            setEditListing(false);
            snackBar("Inzerát byl úspěšně upraven.", "success");
            window.scrollTo(0,0);
            getListing(id)
            .then(doc => setListingInfo(doc));
        }).catch(error => {
            snackBar("Něco se pokazilo. Zkuste to prosím později.", "error")
            setLoading(false);
        })
    }
    const value = {
        handleSave
    }
    return (
        <ListingContext.Provider value={value}>
            {children}
        </ListingContext.Provider>
    )
}


