import React from 'react';
import DataContext from "./context/DataContext"
import { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Star = ({ star }) => {

    const { handleMouseOver, handleMouseOutStar, handleSetRate } = useContext(DataContext);

    return (

        <FontAwesomeIcon

            icon={faStar}
            size='4x'
            color={star.color}
            onMouseOver={() => handleMouseOver(star.id)}
            onMouseLeave={() => handleMouseOutStar(star.id)}
            onClick={() => handleSetRate(star.id)}

        ></FontAwesomeIcon>

    )

}

export default Star;
