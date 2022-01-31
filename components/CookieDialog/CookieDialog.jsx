import React from 'react';

const CookieDialog = ({setOpen}) => {
    const handleAccept = () => {
        localStorage.setItem("cookies-accepted", true);
        setOpen(false);
    }
  return (
    <div className="cookie-dialog">
        <div className='dialog-left'>
            <p className='left-heading'>Tato stránka využívá cookies.</p>
            <p className='left-description'>K analýze naší návštěvnosti.</p>
        </div>
        <button onClick={handleAccept} className="btn">Souhlasím</button>
    </div>
);
};

export default CookieDialog;
