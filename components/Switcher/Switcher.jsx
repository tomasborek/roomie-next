import React, {useState, useEffect} from 'react'
//Framer motion
import { motion } from 'framer-motion';

const Switcher = ({activeRider, setActiveRider}) => {
    //Variants
    const riderVariants = {
        active: {
            left: 0,
            backgroundColor: "#309EAB",
        },

        disabled: {
            right: 0,
            backgroundColor: "#E14949",
        },

        transition: {
            duration: 0.2
        }
    }
    return (
        <div onClick={(() => setActiveRider(prevState => !prevState))} className="switcher">
            <motion.div
            variants={riderVariants}
            animate={activeRider ? "active" : ""}
            initial="disabled"
            transition="transition"
            className="switcher-rider">
                <motion.i animate={activeRider ? {rotate: "360deg"} : ""} transition={{duration: 0.4}} className={`fas fa-${activeRider ? "check" : "times"}`}></motion.i>
            </motion.div>
        </div>
    )
}

export default Switcher
