import React from 'react';
import { motion } from 'framer-motion';
const Dropdown = ({open,children, ...rootDOMAttributes}) => {
    return (
        <motion.div {...rootDOMAttributes} animate={open ? {height: "auto", opacity: 1}: ""} initial={{opacity:0, height: 0}} tranisition={{duration: 0.4}} className="dropdown">
            {children}
        </motion.div>
    )
}

export default Dropdown
