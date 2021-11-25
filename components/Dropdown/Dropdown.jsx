import React, {useState, useRef, useEffect} from 'react';
//Handle click outside
import { motion } from 'framer-motion';
const Dropdown = ({open, setOpen, children, ...rootDOMAttributes}) => {
    const [clickOutside, setClickOutside] = useState(false);
    const dropDownRef = useRef();
    
    useEffect(() => {
        if(open){
            setTimeout(() => {
                document.addEventListener("click", handleClick);
            }, 300)
        }else if(!open){
            document.removeEventListener("click", handleClick);
        }
        return () => document.removeEventListener("click", handleClick);
    }, [open])

    //Functions
    const handleClick = (e) => {
        if (dropDownRef.current != e.target) {
            setOpen(false);
        }
    }
    return (
        <>
        <motion.div ref={dropDownRef} {...rootDOMAttributes} animate={open ? {height: "auto", opacity: 1}: ""} initial={{opacity:0, height: 0}} tranisition={{duration: 0.4}} className="dropdown">
            {children}
        </motion.div>
        </>
    )
}

export default Dropdown
