import React from 'react'

//Components
import LocationDropdown from '../../LocationDropdown/LocationDropdown';

const DropdownStep = ({location, setLocation}) => {

   
    return (
        <div className="content-dropdown">
            <LocationDropdown setLocation={setLocation} location={location} />
         </div>
    )
}

export default DropdownStep
