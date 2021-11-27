import React from 'react'

//Components
import ListingBox from '../ListingBox/ListingBox';

const ListingBoxesContainer = ({type, existingBoxes, addedBoxes, editListing}) => {
    if(type === "flatmate"){
        return  (
        <div className="profile-boxes-container">
            <div className="container-heading">Info o inzerantovi</div>
            <div className="container-content">    
                {existingBoxes && !editListing &&
                <>
                    {(existingBoxes.pet && existingBoxes.pet != "") && <ListingBox icon="fa-dog" title="Mazlíček">{existingBoxes.pet}</ListingBox>}
                    {(existingBoxes.smoking && existingBoxes.smoking != "") && <ListingBox icon="fa-smoking" title="Kouření">{existingBoxes.smoking}</ListingBox>}
                    {(existingBoxes.job && existingBoxes.job  != "") && <ListingBox icon="fa-graduation-cap" title="Vzdělání">{existingBoxes.job}</ListingBox>}
                    {(existingBoxes.children && existingBoxes.children != "") && <ListingBox icon="fa-baby-carriage" title="Děti">{existingBoxes.children}</ListingBox>}

                </>
                }
                {!existingBoxes &&
                <>
                <ListingBox title="skeleton"></ListingBox>
                <ListingBox title="skeleton"></ListingBox>
                <ListingBox title="skeleton"></ListingBox>
                </>
                }
                {addedBoxes && editListing &&
                <>
                    {(addedBoxes.pet && addedBoxes.pet != "") && <ListingBox icon="fa-dog" title="Mazlíček">{addedBoxes.pet}</ListingBox>}
                    {(addedBoxes.smoking && addedBoxes.smoking != "") && <ListingBox icon="fa-smoking" title="Kouření">{addedBoxes.smoking}</ListingBox>}
                    {(addedBoxes.job && addedBoxes.job  != "") && <ListingBox icon="fa-graduation-cap" title="Vzdělání">{addedBoxes.job}</ListingBox>}
                    {(addedBoxes.children && addedBoxes.children != "") && <ListingBox icon="fa-baby-carriage" title="Děti">{addedBoxes.children}</ListingBox>}
                </>
                }
            </div>
        </div>
    )
    }else if(type === "flat"){
        return (
        <div className="profile-boxes-container">
            <div className="container-heading">Info o bydlení</div>
            <div className="container-content">
                {existingBoxes && !editListing &&
                    <>
                    {(existingBoxes.location && existingBoxes.location != "" )&& <ListingBox icon="fa-home" title="Lokace">{existingBoxes.location}</ListingBox>}
                    {(existingBoxes.layout && existingBoxes.layout != "") && <ListingBox icon="fa-door-closed" title="Dispozice">{existingBoxes.layout}</ListingBox>}
                    {(existingBoxes.size && existingBoxes.size != "") && <ListingBox icon="fa-arrows-alt-h" title="Velikost">{existingBoxes.size}m<sup>2</sup></ListingBox>}
                    {(existingBoxes.level && existingBoxes.level != "") && <ListingBox icon="fa-door-closed" title="Podlaží">{existingBoxes.level}</ListingBox>}
                    {(existingBoxes.petAllowed && existingBoxes.petAllowed != "") && <ListingBox icon="fa-dog" title="Mazlíčci">{existingBoxes.petAllowed}</ListingBox>}
                    {(existingBoxes.smokingAllowed && existingBoxes.smokingAllowed != "") && <ListingBox icon="fa-smoking" title="Kouření">{existingBoxes.smokingAllowed}</ListingBox>}
                    </>
                }
                 {!existingBoxes &&
                <>
                <ListingBox title="skeleton"></ListingBox>
                <ListingBox title="skeleton"></ListingBox>
                <ListingBox title="skeleton"></ListingBox>
                </>
                }
                {addedBoxes && editListing && 
                <>
                {(existingBoxes.location && existingBoxes.location != "") && <ListingBox icon="fa-home" title="Lokace">{existingBoxes.location}</ListingBox>}
                {(addedBoxes.layout && addedBoxes.layout != "") && <ListingBox icon="fa-door-closed" title="Dispozice">{addedBoxes.layout}</ListingBox>}
                {(addedBoxes.size && addedBoxes.size != "") && <ListingBox icon="fa-arrows-alt-h" title="Velikost">{addedBoxes.size}m<sup>2</sup></ListingBox>}
                {(addedBoxes.level && addedBoxes.level != "") && <ListingBox icon="fa-door-closed" title="Podlaží">{addedBoxes.level}</ListingBox>}
                {(addedBoxes.petAllowed && addedBoxes.petAllowed != "") && <ListingBox icon="fa-dog" title="Mazlíčci">{addedBoxes.petAllowed}</ListingBox>}
                {(addedBoxes.smokingAllowed && addedBoxes.smokingAllowed != "") && <ListingBox icon="fa-smoking" title="Kouření">{addedBoxes.smokingAllowed}</ListingBox>}
                </>
                }
            </div>
            
            
       
    </div>)
    }
    
}

export default ListingBoxesContainer
