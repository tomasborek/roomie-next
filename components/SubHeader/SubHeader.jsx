import React, {useState} from 'react'
//next
import Link from "next/link";
import { useRouter } from 'next/dist/client/router';


const SubHeader = () => {
    const router = useRouter();
    return (
        <div className="sub-header">
             <Link href="/explore/flatmates">
                <div className={`sub-header-link ${router.pathname === "/explore/flatmates" && "active"}`}>
                    <i className="fas fa-users"></i>
                </div>
            </Link>
            <Link href="/explore/flats">
                <div  className={`sub-header-link ${router.pathname === "/explore/flats" && "active"}`}>
                    <i  className="fas fa-home"></i>
                </div>
            </Link>
            

        </div>
    )
}

export default SubHeader
