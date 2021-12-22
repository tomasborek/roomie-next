import React from 'react'

const CustomDialog = ({image, heading, children}) => {
    return (
        <div className="custom-dialog">
            <div className="dialog-image">
                <img src={image} alt="" />
            </div>
            <h2 className="dialog-heading">{heading}</h2>
           {children}
        </div>
    )
}

export default CustomDialog
