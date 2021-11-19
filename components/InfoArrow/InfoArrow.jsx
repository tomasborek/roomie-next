import React, { useState } from 'react'
//Framer
import { motion } from 'framer-motion';
//Fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const InfoArrow = ({children, isArrowOpen}) => {
    const [isOpen, setIsopen] = useState(isArrowOpen);
    return (
        <motion.div className="info-arrow">
            <p className="arrow-text">{children}</p>
            <FontAwesomeIcon icon={faTimes}/>
            <div className="arrow-arrow"></div>
        </motion.div>
    )
}

export default InfoArrow
