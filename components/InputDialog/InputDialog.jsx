import React from 'react'

const InputDialog = ({heading, description, setMessage, message, setOpen, handleSend}) => {
    const textAreaChange = (e) => {
        let text = e.target.value; 
        while (text.includes("\n\n\n")){
            text = text.replace("\n\n\n","\n\n");
        }
       setMessage(text);
    }
    return (
        <div className="req-dialog">
            <i onClick={() => setOpen(false)} className="dialog-close fas fa-times"></i>
            <div className="dialog-heading">{heading}</div>
            <div className="dialog-description">{description}</div>
            <textarea maxLength={250} onChange={(e) => textAreaChange(e)} value={message} className="dialog-input" placeholder="Sem zadejte svou zprávu..."></textarea>
            <button onClick={handleSend} className="main-btn">Poslat <i className="fas fa-envelope"></i></button>
            
        </div>
    )
}

export default InputDialog
