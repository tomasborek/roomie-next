import React from 'react'

//Components
import LocationDropdown from '../../LocationDropdown/LocationDropdown';

const DropdownStep = ({setIsDropdownActive, isDropdownActive, location, setLocation}) => {

    //Variants
    const optionsVariants = {
        active: {
            maxHeight: "20vh",
            opacity: 1,
            display: "block"
        },

        disabled:{
            maxHeight: 0,
            opacity: 0,
            display: "none"
        },

        transition: {
            duration: 1
        }
    }
    const iconVariants = {
        active: {
            rotate: 180
        },
        disabled: {
            rotate: 0
        }
    }
    return (
        <div className="content-dropdown">
            <LocationDropdown setIsDropdownActive={setIsDropdownActive} isDropdownActive={isDropdownActive} iconVariants={iconVariants} optionsVariants={optionsVariants} setLocation={setLocation} location={location} />
         </div>
    )
}

export default DropdownStep
