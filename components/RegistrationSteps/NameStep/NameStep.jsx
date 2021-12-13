import React from 'react'

const NameStep = (props) => {
    return (
        <div className='content-name'>
            <input onChange={(e) => props.setName(e.target.value)} value={props.name} maxLength={15} type="text" placeholder='Vaše křestní jméno...'/>
        </div>
    )
}

export default NameStep
