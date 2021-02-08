import React from 'react'
import './module.Star.scss'
import {starsArray} from '../../../Constants'

const Star = () => {

    return(

        <div>
            {
                starsArray.map(star =>
                    
                    <div key={star.class} className={star.class}></div>
                )
            }
        </div>
    )
}


export default Star