import React from 'react'
//Framer
import { motion } from 'framer-motion';

const LocationDropdown = ({isDropdownActive, setIsDropdownActive, iconVariants, optionsVariants, setLocation, location}) => {
    return (
        <div className="location-dropdown-container">
            <div onClick={() => setIsDropdownActive(!isDropdownActive)} className="container-dropdown">
                <p>{location ? location : "Vyberte lokalitu..."}</p>
                <motion.i variants={iconVariants} animate={isDropdownActive ? "active" : ""} initial="disabled" className="fas fa-chevron-down"></motion.i>
            </div>
            <motion.div
            variants={optionsVariants}
            animate={isDropdownActive ? "active" : ""}
            initial="disabled"
            transition="transition"
            className="dropdown-options">
                <div onClick={() => {
                    setLocation("Praha");
                    setIsDropdownActive(false);
                } } className="option">Praha</div>
                <div onClick={() => {
                    setLocation("Olomouc");
                    setIsDropdownActive(false);
                } } className="option">Olomouc</div>
                <div onClick={() => {
                    setLocation("Plzeň");
                    setIsDropdownActive(false);
                } } className="option">Plzeň</div>
            </motion.div>
        </div>
    )
}

export default LocationDropdown
