import React from 'react'
//next
import Link from "next/link"

const Banner = () => {
    return (
        <div className="banner">
            <img src="/img/banner/banner-bg.png" alt="" className="banner-bg" />
            <div className="banner-gradient"></div>
            <div className="banner-text mid-container">
                <h1>Spolubydlící, se kterými si budete rozumět</h1>
                <h2>Hledáte nebo nabízíte?</h2>
            </div>
            <div className="banner-buttons container">
                <Link href="/explore/flatmates"><button className="main-btn">Hledám spolubydlícího</button></Link>
                <Link href="/explore/flats"><button className="acc-btn">Hledám domov</button></Link>
            </div>
        </div>
    )
}

export default Banner
