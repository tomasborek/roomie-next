import React from 'react'
//Components
import Tag from "../../Tag/Tag";

const ListingTags = ({type, existingTags, editListing, addedTags, setOverlay}) => {
    if(type === "person"){
        return (
            <div className="preferences-content">
                {(existingTags && !editListing) &&
                <>
                    {(existingTags.gender && existingTags.gender.length > 0) && existingTags.gender.map((tag, id) => <Tag key={id}>{tag}</Tag>)}
                    {(existingTags.age && existingTags.age.length > 0) && existingTags.age.map((tag, id) => <Tag key={id}>{tag}</Tag>)}
                    {(existingTags.smoking) && <Tag>{existingTags.smoking}</Tag>}
                    {(existingTags.job && existingTags.job.length > 0) && existingTags.job.map((tag, id) => <Tag key={id}>{tag}</Tag>)}

                </>
                }
                {(addedTags && editListing) &&
                <>
                    {(addedTags.gender && addedTags.gender.length > 0) && addedTags.gender.map((tag, id) => <Tag key={id}>{tag}</Tag>)}
                    {(addedTags.age && addedTags.age.length > 0) && addedTags.age.map((tag, id) => <Tag key={id}>{tag}</Tag>)}
                    {(addedTags.smoking) &&  <Tag>{addedTags.smoking}</Tag>}
                    {(addedTags.job && addedTags.job.length > 0) && addedTags.job.map((tag, id) => <Tag key={id}>{tag}</Tag>)}
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
                    {(existingTags.location) && <Tag>{existingTags.location}</Tag>}
                    {(existingTags.layout) && <Tag>{existingTags.layout}</Tag>}
                    {(existingTags.internet) && <Tag>{existingTags.internet}</Tag>}
                    {(existingTags.elevator) && <Tag>{existingTags.elevator}</Tag>}
                    {(existingTags.petAllowed) && <Tag>{existingTags.petAllowed}</Tag>}
                    {(existingTags.smokingAllowed) && <Tag>{existingTags.smokingAllowed}</Tag>}
                </>
                }
                {(addedTags && editListing) &&
                <>
                    {(addedTags.location) && <Tag>{addedTags.location}</Tag>}
                    {(addedTags.layout) && <Tag>{addedTags.layout}</Tag>}
                    {(addedTags.internet) && <Tag>{addedTags.internet}</Tag>}
                    {(addedTags.elevator)&& <Tag>{addedTags.elevator}</Tag>}
                    {(addedTags.petAllowed) && <Tag>{addedTags.petAllowed}</Tag>}
                    {(addedTags.smokingAllowed) &&  <Tag>{addedTags.smokingAllowed}</Tag>}
                </>
                }
                {editListing && <Tag onClick={() => setOverlay(true)} plus={true}></Tag>}    
            </div>
        )
    }
}

export default ListingTags
