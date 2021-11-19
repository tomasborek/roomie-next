import React from 'react'

const SentReq = ({name, age, status, id}) => {
    return (
        <div className="sent-req">
            <div className="req-pfp-container">
                <div className="container-pfp"></div>
            </div>
            <div className="req-content">
                <div className="content-user">{name}, {age}</div>
                <div className="content-status">{status === "pending" ? `Žádost čeká na vyřízení` : status === "rejected" ? "Žádost byla odmítnuta" : status === "accepted" ? `Žádost byla přijata, můžete vidět kontaktní údaje uživatele ${name}`:""}</div>
            </div>
        </div>
    )
}

export default SentReq
