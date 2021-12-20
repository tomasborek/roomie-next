import React from 'react'

//Components
import { Slider } from '@mui/material'

const RangeStep = ({price, setPrice}) => {
    return (
        <div className="content-range">
           
            <p> 
                <input type="text" onChange={(e) => (e.target.value.match(/^[0-9]+$/) || e.target.value === "") ? setPrice(e.target.value) : ""} value={price} className='range-input' /> 
                {price == 60000 && "+"} Kč
            </p>
            <Slider value={price ? price : 1000} onChange={(e) => setPrice(e.target.value)} min={1000} max={60000} color="primary" step={1000} />
        </div>
    )
}

export default RangeStep
