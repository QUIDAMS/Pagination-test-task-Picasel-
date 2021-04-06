import React from "react";

const Pagination = ({totalPages, currentPage, onChangeCurrentPage}) => {
	return (
		<div className="pagination">
			<button
				href="#" 
				className={`pagination__link ${currentPage === 0 && "pagination__disabled"}`}
				onClick={(e) => onChangeCurrentPage(e, currentPage - 1)}
				>«</button>
			{Array.from(Array(totalPages)).map((x, i) => {
			  return (
			  	<button
			  		key={i}
			  		className={`pagination__link ${currentPage === i && "active"}`} 
			  		href="#"
			  		onClick={(e) => onChangeCurrentPage(e, i)}
			  		>
			  			{i + 1}
			  		</button>
			  )
			})}
			<button
				className={`pagination__link ${currentPage + 1 === totalPages && "pagination__disabled"}`} 
				href="#"
				onClick={(e) => onChangeCurrentPage(e, currentPage + 1)}
				>»</button>
		</div>
	)
}

export default Pagination;
