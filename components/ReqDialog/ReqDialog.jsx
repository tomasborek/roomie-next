import React from 'react'

const ReqDialog = ({setMessage, message, setOpen, handleSend}) => {
    return (
        <div className="req-dialog">
            <i onClick={() => setOpen(false)} className="dialog-close fas fa-times"></i>
            <div className="dialog-heading">Odelsat žádost o kontakt</div>
            <div className="dialog-description">Inzerant uvidí vaší žádost s vaší zprávou a může se rozhodnout zda vaší žádost přijme a poskytne vám své kontaktní údaje.</div>
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="dialog-input" placeholder="Sem zadejte svou zprávu..."></textarea>
            <button onClick={handleSend} className="main-btn">Poslat <i className="fas fa-envelope"></i></button>
            
        </div>
    )
}

export default ReqDialog
