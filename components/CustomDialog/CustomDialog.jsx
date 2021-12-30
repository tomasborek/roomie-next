import React from 'react'

const CustomDialog = ({image, heading, setOpen, children}) => {
    return (
        <div className="custom-dialog">
            <div className="dialog-close">
                <i onClick={() => setOpen(false)} className="fas fa-times"></i>
            </div>
            <div className="dialog-image">
                <img src={image} alt="" />
            </div>
            <h2 className="dialog-heading">{heading}</h2>
           {children}
        </div>
    )
}

export default CustomDialog
