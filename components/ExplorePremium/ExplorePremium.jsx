import React from 'react'
//next
import { useRouter } from 'next/dist/client/router'

const ExplorePremium = () => {
    const router = useRouter();
    return (
        <div className='explore-premium'>
            <div className="premium-main-text">
                <p className="text-name-paragraph">Získejte výhody</p>
                <h3 className='text-name-heading'>Roomie premium</h3>
                <p className="text-description">Premium účet zajistí efektivnější a rychlejší hledání pomocí řady benefitů.</p>
            </div>
            <button className="acc-btn">Získat Premium</button>

        </div>
    )
}

export default ExplorePremium
