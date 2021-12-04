import React, {useEffect} from 'react'

const Pagination = ({setPage, page, handlePagination, isDisabled}) => {
    
    return (
        <div className={`pagination ${isDisabled ? "disabled" : ""}`}>
            <div onClick={() => handlePagination("prev")} className="pagination-page"><i className="fas fa-arrow-left"></i>Předchozí</div>
            <div className="pagination-page">{page}</div>
            <div onClick={() => handlePagination("next")} className="pagination-page">Další<i className="fas fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination
