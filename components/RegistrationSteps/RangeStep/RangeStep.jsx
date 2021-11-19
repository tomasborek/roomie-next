import React from 'react'

//Components
import { Slider } from '@mui/material'

const RangeStep = ({price, setPrice}) => {
    return (
        <div className="content-range">
            <p>{price} 000 Kč</p>
            <Slider defaultValue={20} onChange={(e) => setPrice(e.target.value)} min={1} max={60} color="primary" />
        </div>
    )
}

export default RangeStep
