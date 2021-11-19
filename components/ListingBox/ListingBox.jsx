import React from 'react'

import { Skeleton } from '@mui/material'

const ProfileBox = ({icon, title, children}) => {
    return (
        <>
        {title != "skeleton" ?

        <div className="profile-box">
            <i className={`fas ${icon}`}></i>
            <p className="result">{children}</p>
            <p className="title">{title}</p>
        </div>
        :
        <div className="profile-box">
            <Skeleton variant="text" sx={{width: "50%", marginTop: 5}} className="result"/>
            <Skeleton variant="text" sx={{width: "20%"}} className="title"/>
        </div>
        }
        </>
    )
}

export default ProfileBox
