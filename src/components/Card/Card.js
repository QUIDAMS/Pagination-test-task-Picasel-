import React from "react";

const Card = ({text}) => {
	return(
		<div className="col">
			<div className="card">
			  <h1>{text}</h1>
			  <p className="title">Example</p>
			  <p>....</p>
			</div>
		</div>
	)
}

export default Card;