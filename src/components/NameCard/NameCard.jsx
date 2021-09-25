import React from "react";

import './NameCard.css'

const NameCard = (props) =>{
    return (
        <h1 className="name-card-container">
            {props.predictedName}
        </h1>
    )
}

export default NameCard;