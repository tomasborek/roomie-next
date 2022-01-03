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
        let searchedTerm = search.toLowerCase();
        if(isTyping === true) return;
        if(search === ""){
            setLocation("");
            setDropdownActive(false);
            return;
        };
        let results = [];
        if(searchedTerm.includes("prah")){
           if(searchedTerm.includes("praha")){
               searchedTerm = searchedTerm.replace("praha", "Prague");
           }else{
                searchedTerm = searchedTerm.replace("prah", "Prag");
           }
        }
        setDropdownActive(true);
        setFetching(true);
            fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&countryIds=cz&namePrefix=${searchedTerm}`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
		        "x-rapidapi-key": "055a115952msh3056abcfce60747p145c08jsn61e5785761bb"
	        }
            }).then(response => {
	           return response.json()
            }).then(res => {
                res.data.forEach(doc => {
                    let cityName = doc.name;
                    if(cityName.includes("Prague")) cityName = cityName.replace("Prague", "Praha");
                    results = [...results, cityName];
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
            setSearch(location);
        }else{
            inputRef.current.value = "";
            setSearch("");
        }
    }, [location])

    
    const typing = () => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
        }, 2000)
    }
    return (
      <div className="location-dropdown">
          <div className="location-dropdown-input">
              <input maxLength={30} ref={inputRef} onChange={e => {
                  typing();
                  setSearch(e.target.value)
              }} type="text" />
              <i value={search} style={{color: search && search == location ? "green" : search && search != location ? "red" : !search ? "#333" : ""}} className={`fas fa-${search && search == location ? "check" : search && search != location ? "times" : !search ? "search" : ""}`}></i>
          </div>
          <motion.div variants={optionsVariants} animate={dropdownActive ? "active" : ""} initial={"disabled"} transition={"transition"} className="location-dropdown-options">
                {!fetching &&
                    <ul>
                        {options.length > 0 ?
                        options.map((option,id) => (
                            <li key={id} onClick={() => {
                                setLocation(option);
                                setSearch(option);
                                setDropdownActive(false);
                            }}>
                                <p>{option}</p> 
                                <i className='fas fa-plus'></i>
                            </li>
                        ))
                        :
                        <li className="options-not-found">Nic nebylo nalezeno.</li>
                        }
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
