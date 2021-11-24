import React, {useState} from 'react'
//next
import Link from "next/link";
import { useRouter } from 'next/dist/client/router';
//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';

const SubHeader = () => {
    const router = useRouter();
    return (
        <div className="sub-header">
            <div className={`sub-header-link ${router.pathname === "/explore/flatmates" && "active"}`}>
                <Link href="/explore/flatmates"><i className="fas fa-users"></i></Link>
            </div>
            <div  className={`sub-header-link ${router.pathname === "/explore/flats" && "active"}`}>
                <Link href="/explore/flats"><i  className="fas fa-home"></i></Link>
            </div>
            

        </div>
    )
}

export default SubHeader
