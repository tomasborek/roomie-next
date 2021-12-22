import React from 'react'
//next
import Link from "next/link"
import { useRouter } from 'next/router'
//COntexts
import { useExploreDialog } from '../../contexts/ExploreDialogContext'
import { useAuth } from '../../contexts/AuthContext'

const Banner = () => {
    const {currentUser} = useAuth();
    const [exploreDialog, setExploreDialog] = useExploreDialog();
    const router = useRouter();
    const handleExploreDialog = () => {
        if(!currentUser){
            setTimeout(() => {
                setExploreDialog(true);
            }, 1500)
        }
    }
    return (
        <div className="banner">
            <img src="/img/banner/banner-bg.png" alt="" className="banner-bg" />
            <div className="banner-gradient"></div>
            <div className="banner-text mid-container">
                <h1>Spolubydlící, se kterými si budete rozumět</h1>
                <h2>Hledáte nebo nabízíte?</h2>
            </div>
            <div className="banner-buttons container">
                <button onClick={() => {
                    router.push("explore/flatmates");
                    handleExploreDialog();
                }} className="main-btn">Hledám spolubydlícího</button>
                <button onClick={() => {
                    router.push("explore/flatmates");
                    handleExploreDialog();
                }} className="acc-btn">Hledám domov</button>
            </div>
        </div>
    )
}

export default Banner
