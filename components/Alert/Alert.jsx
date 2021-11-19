import React from 'react'

const Alert = ({text, type}) => {
    return (
        <div className={`alert ${type}`}>
            <p className="alert-heading">{text}</p>
            <i className="alert-x fas fa-times"></i>
        </div>
    )
}

export default Alert
