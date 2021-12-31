import React from 'react'

const InputDialog = ({heading, description, setMessage, message, setOpen, handleSend}) => {
    return (
        <div className="req-dialog">
            <i onClick={() => setOpen(false)} className="dialog-close fas fa-times"></i>
            <div className="dialog-heading">{heading}</div>
            <div className="dialog-description">{description}</div>
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="dialog-input" placeholder="Sem zadejte svou zprávu..."></textarea>
            <button onClick={handleSend} className="main-btn">Poslat <i className="fas fa-envelope"></i></button>
            
        </div>
    )
}

export default InputDialog
