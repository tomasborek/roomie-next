import React, {useEffect} from 'react'

const Pagination = ({items}) => {
    
    return (
        <div className="pagination">
            <div className="pagination-page"><i className="fas fa-arrow-left"></i>Předchozí</div>
            <div className="pagination-page">1</div>
            <div className="pagination-page">2</div>
            <div className="pagination-page">3</div>
            <div className="pagination-page">Další<i className="fas fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination
