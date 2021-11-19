import React from 'react'
//next
import Head from "next/head";
//FA
import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";

const Tag = ({children, plus,active, variant,icon, ...rootDOMAttributes}) => {
    return (
        <div {...rootDOMAttributes} className={`tag ${active && "active"}`}>
            <i className={`tag-icon ${variant === "box" && "box-tag-icon"} fas fa-${variant === "box" ? icon : plus ? "plus" : "check"}`}></i>
            <p className="tag-description">{children}</p>
        </div>
    )
}

export default Tag
