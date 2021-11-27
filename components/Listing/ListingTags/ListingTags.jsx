import React from 'react'
//Components
import Tag from "../../Tag/Tag";

const ListingTags = ({type, existingTags, editListing, addedTags, setOverlay}) => {
    if(type === "person"){
        return (
            <div className="preferences-content">
                {(existingTags && !editListing) &&
                <>
                    {(existingTags.gender && existingTags.gender.length > 0) &&  existingTags.gender.map(tag => <Tag>{tag}</Tag>)}
                    {(existingTags.age && existingTags.age.length > 0) &&  existingTags.age.map(tag => <Tag>{tag}</Tag>)}
                    {(existingTags.smoking && existingTags.smoking.length > 0) &&  existingTags.smoking.map(tag => <Tag>{tag}</Tag>)}
                    {(existingTags.job && existingTags.job.length > 0) &&  existingTags.job.map(tag => <Tag>{tag}</Tag>)}
                </>
                }
                {(addedTags && editListing) &&
                <>
                    {(addedTags.gender && addedTags.gender.length > 0) &&  addedTags.gender.map(tag => <Tag>{tag}</Tag>)}
                    {(addedTags.age && addedTags.age.length > 0) &&  addedTags.age.map(tag => <Tag>{tag}</Tag>)}
                    {(addedTags.smoking && addedTags.smoking.length > 0) &&  addedTags.smoking.map(tag => <Tag>{tag}</Tag>)}
                    {(addedTags.job && addedTags.job.length > 0) &&  addedTags.job.map(tag => <Tag>{tag}</Tag>)}
                </>
                }
                {editListing && <Tag onClick={() => setOverlay(true)} plus={true}></Tag>}    
            </div>
        )
    }
    if(type === "flat"){
        return(
            <div className="preferences-content">
                {(existingTags && !editListing) &&
                <>
                    {(existingTags.location && existingTags.location.length > 0) &&  existingTags.location.map(tag => <Tag>{tag}</Tag>)}
                    {(existingTags.layout && existingTags.layout.length > 0) &&  existingTags.layout.map(tag => <Tag>{tag}</Tag>)}
                    {(existingTags.level && existingTags.level.length > 0) &&  existingTags.level.map(tag => <Tag>{tag}</Tag>)}
                    {(existingTags.petAllowed && existingTags.petAllowed.length > 0) &&  existingTags.petAllowed.map(tag => <Tag>{tag}</Tag>)}
                    {(existingTags.smokingAllowed && existingTags.smokingAllowed.length > 0) &&  existingTags.smokingAllowed.map(tag => <Tag>{tag}</Tag>)}
                </>
                }
                {(addedTags && editListing) &&
                <>
                    {(addedTags.location && addedTags.location.length > 0) &&  addedTags.location.map(tag => <Tag>{tag}</Tag>)}
                    {(addedTags.layout && addedTags.layout.length > 0) &&  addedTags.layout.map(tag => <Tag>{tag}</Tag>)}
                    {(addedTags.level && addedTags.level.length > 0) &&  addedTags.level.map(tag => <Tag>{tag}</Tag>)}
                    {(addedTags.petAllowed && addedTags.petAllowed.length > 0) &&  addedTags.petAllowed.map(tag => <Tag>{tag}</Tag>)}
                    {(addedTags.smokingAllowed && addedTags.smokingAllowed.length > 0) &&  addedTags.smokingAllowed.map(tag => <Tag>{tag}</Tag>)}
                </>
                }
                {editListing && <Tag onClick={() => setOverlay(true)} plus={true}></Tag>}    
            </div>
        )
    }
}

export default ListingTags
