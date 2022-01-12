import React from 'react'
//next
import Head from 'next/head'


const UnderConstruction = () => {
    return (
        <>
            <Head>
                <title>Roomie - portál pro hledání spolubydlení</title>
            </Head>
            <div className='under-construction'>
                <h1>Roomie</h1>
                <h2>Nejlepší portál pro spolubydlení</h2>
                <p>Již brzy</p>
                <img src="/img/bad-results/under-con.png" alt="" />
                <div className="wip-socials">
                    <div onClick={() => window.location.href = "https://instagram.com/roomiecz"} className="socials-social">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div onClick={() => window.location.href = "https://www.facebook.com/roomiecz/"} className="socials-social">
                        <i className="fab fa-facebook"></i>
                    </div>
                    <div onClick={() => window.location.href = "https://www.linkedin.com/company/roomie-cz/about/"} className="socials-social">
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnderConstruction
