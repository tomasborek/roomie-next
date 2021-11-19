import React, {useState} from 'react'
//Framer motion
import { motion } from 'framer-motion';

const Switcher = () => {
    //State
    const [isSwitcherOn, setIsSwitcherOn] = useState(true);

    //Variants
    const riderVariants = {
        active: {
            left: 0,
            backgroundColor: "#E14949"
        },

        disabled: {
            right: 0,
            backgroundColor: "#309EAB"
        },

        transition: {
            duration: 0.2
        }
    }
    return (
        <div onClick={(() => setIsSwitcherOn(!isSwitcherOn))} className="switcher">
            <motion.div
            variants={riderVariants}
            animate={isSwitcherOn ? "active" : ""}
            initial="disabled"
            transition="transition"
            className="switcher-rider">
                <motion.i animate={isSwitcherOn ? {rotate: "360deg"} : ""} transition={{duration: 0.4}} className={`fas fa-${isSwitcherOn ? "times" : "check"}`}></motion.i>
            </motion.div>
        </div>
    )
}

export default Switcher
