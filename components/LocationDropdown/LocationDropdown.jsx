import React, {useState, useEffect, useRef} from 'react'
//Framer
import { motion } from 'framer-motion';
//Components
//Mui
import { CircularProgress } from '@mui/material';



const LocationDropdown = ({setLocation, location}) => {
    //Variables
    //State
    const [search, setSearch] = useState("");
    const [options, setOptions] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    //Refs
    const inputRef = useRef(location);
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
    //Useffect
    useEffect(() => {
        if(isTyping === true) return;
        if(search === "") return;
        let results = [];
        setDropdownActive(true);
        setFetching(true);
            fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&countryIds=cz&minPopulation=10000&namePrefix=${search}`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
		        "x-rapidapi-key": "055a115952msh3056abcfce60747p145c08jsn61e5785761bb"
	        }
            }).then(response => {
	           return response.json()
            }).then(res => {
                res.data.forEach(doc => {
                    results = [...results, doc.name];
                })  
                setFetching(false);
                setOptions(results);
            }).catch(error => {
                //
            })
    }, [isTyping])

    useEffect(() => {
        if(location){
            inputRef.current.value = location;
        }
    }, [location])

    
    const typing = () => {
        console.log(isTyping);
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
        }, 2000)
    }
    return (
      <div className="location-dropdown">
          <div className="location-dropdown-input">
              <input ref={inputRef} onChange={e => {
                  typing();
                  setSearch(e.target.value)
              }} type="text" />
              <i value={search} className="fas fa-search"></i>
          </div>
          <motion.div variants={optionsVariants} animate={dropdownActive ? "active" : ""} initial={"disabled"} transition={"transition"} className="location-dropdown-options">
                {options.length && !fetching &&
                    <ul>
                        {options.map(option => (
                            <li onClick={() => {
                                setLocation(option);
                                setSearch(option);
                                setDropdownActive(false);
                            }}>{option}</li>
                        ))}
                    </ul>
                }
                {fetching &&
                    <div className="location-dropdown-loading">
                        < CircularProgress/>
                    </div>
                }
          </motion.div>
      </div>
    )
}

export default LocationDropdown
