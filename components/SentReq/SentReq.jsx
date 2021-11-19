import React from 'react'

const SentReq = ({name, age, status, uid}) => {
    const statusResolve = () => {
        if(status === "pending"){
            return `Poslali jste žádost uživateli ${name}...`
        }else if(status === "accepted"){
            return `Uživatel ${name} přijal vaši žádost!`
        }else if(status === "rejected"){
            return `Uživatel ${name} odmítnul vaší žádost!`
        }
    }
    return (
        <div className="sent-req">
            <div className="req-pfp-container">
                <div className="container-pfp"></div>
            </div>
            <div className="req-content">
                <div className="content-user">{name}, {age}</div>
                <div className="content-status">{statusResolve}</div>
            </div>
        </div>
    )
}

export default SentReq
